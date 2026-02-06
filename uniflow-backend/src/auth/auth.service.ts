import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
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
}
