import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
        private readonly mailerService: MailerService,
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        console.log(`[BACKEND DEBUG] validateUser called for: ${email}`);
        const user = await (this.db.query as any).users.findFirst({
            where: eq(schema.users.email as any, email),
        });

        if (!user) {
            console.log(`[BACKEND DEBUG] User NOT found: ${email}`);
            return null;
        }

        const isMatch = await bcrypt.compare(pass, user.password);
        console.log(`[BACKEND DEBUG] Password match for ${email}: ${isMatch}`);

        if (isMatch) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async forgotPassword(email: string) {
        const user = await (this.db.query as any).users.findFirst({
            where: eq(schema.users.email as any, email),
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expires = Date.now() + 900000; // 15 minutes

        await this.db.update(schema.users as any)
            .set({
                resetPasswordToken: token,
                resetPasswordExpires: expires.toString()
            } as any)
            .where(eq(schema.users.id as any, user.id));

        // Send email
        const resetLink = `http://localhost:5173/reset-password?token=${token}`;
        console.log('\n=================================================================');
        console.log('[PASSWORD RESET DEBUG] Starting password reset flow for:', email);
        console.log('[PASSWORD RESET DEBUG] Token generated:', token);
        console.log('[PASSWORD RESET DEBUG] FULL RESET LINK BELOW:');
        console.log(resetLink);
        console.log('=================================================================\n');

        try {
            console.log('[PASSWORD RESET DEBUG] Attempting to send email via MailerService...');
            await this.mailerService.sendMail({
                to: user.email,
                subject: 'Réinitialisation de mot de passe - Uniflow',
                template: 'reset-password',
                context: {
                    resetLink: resetLink,
                },
                attachments: [
                    {
                        filename: 'uniflow.png',
                        path: process.cwd() + '/templates/uniflow.png',
                        cid: 'uniflow_logo'
                    }
                ]
            });
            console.log('[PASSWORD RESET DEBUG] Email sent successfully (or logged if mock transport).');
        } catch (e) {
            console.error('[BACKEND ERROR] Failed to send email via MailerService:', e);
            console.error('[BACKEND ERROR] Stack:', e instanceof Error ? e.stack : String(e));
            // Don't throw error to UI, just log it. The token is in the console for dev.
        }

        const isDevMode = !process.env.SMTP_HOST;
        return {
            message: 'Password reset email sent',
            ...(isDevMode ? { devToken: token, devLink: resetLink } : {})
        };
    }

    async resetPassword(token: string, newPass: string) {
        const user = await (this.db.query as any).users.findFirst({
            where: eq(schema.users.resetPasswordToken as any, token),
        });

        if (!user) {
            throw new BadRequestException('Invalid token');
        }

        const now = Date.now();
        const expires = parseInt(user.resetPasswordExpires || '0');

        if (now > expires) {
            throw new BadRequestException('Token expired');
        }

        const hashedPassword = await bcrypt.hash(newPass, 10);

        await this.db.update(schema.users as any)
            .set({
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null,
            } as any)
            .where(eq(schema.users.id as any, user.id));

        return { message: 'Password successfully updated' };
    }
}
