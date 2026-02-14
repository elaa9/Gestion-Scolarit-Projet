import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq, desc } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ClaimsService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
        private readonly mailerService: MailerService,
    ) { }

    async create(studentId: string, data: { subject: string, service: string, message: string }) {
        const id = uuidv4();
        const date = new Date().toISOString();

        await this.db.insert(schema.claims as any).values({
            id,
            studentId,
            subject: data.subject,
            service: data.service,
            message: data.message,
            date: date,
            status: 'En cours',
            response: null,
        });

        // Notify Admins
        try {
            const admins = await (this.db.query as any).users.findMany({
                where: eq(schema.users.role as any, 'admin'),
            });

            // Get student info for the email
            const student = await (this.db.query as any).students.findFirst({
                where: eq(schema.students.id as any, studentId),
            });

            if (admins.length > 0 && student) {
                for (const admin of admins) {
                    await this.mailerService.sendMail({
                        to: admin.email,
                        subject: `New Reclamation from ${student.name}`,
                        html: `
                            <h3>New Reclamation Submitted</h3>
                            <p><strong>Student:</strong> ${student.name}</p>
                            <p><strong>Service:</strong> ${data.service}</p>
                            <p><strong>Subject:</strong> ${data.subject}</p>
                            <p><strong>Message:</strong></p>
                            <p>${data.message}</p>
                            <a href="http://localhost:5173/admin/reclamations">View in Dashboard</a>
                        `
                    });
                }
            }
        } catch (e) {
            console.error("Failed to send notification email", e);
        }

        return { message: 'Claim created successfully', id };
    }

    async findAll() {
        const claims = await (this.db.query as any).claims.findMany({
            // orderBy: [desc(schema.claims.date)] 
        });

        // Enrich with student name
        const claimsWithStudent = await Promise.all(claims.map(async (claim: any) => {
            const student = await (this.db.query as any).students.findFirst({
                where: eq(schema.students.id as any, claim.studentId)
            });
            return { ...claim, studentName: student?.name || 'Unknown' };
        }));

        // Sort by date desc
        return claimsWithStudent.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    async findByStudent(studentId: string) {
        const claims = await (this.db.query as any).claims.findMany({
            where: eq(schema.claims.studentId as any, studentId),
        });
        return claims.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    async update(id: string, data: { subject?: string, service?: string, message?: string }) {
        await this.db.update(schema.claims as any)
            .set(data)
            .where(eq(schema.claims.id as any, id));
        return { message: 'Claim updated successfully' };
    }

    async adminUpdate(id: string, status: string, response?: string) {
        await this.db.update(schema.claims as any)
            .set({ status, response })
            .where(eq(schema.claims.id as any, id));

        // Notify Student
        try {
            const claim = await (this.db.query as any).claims.findFirst({
                where: eq(schema.claims.id as any, id)
            });

            if (claim) {
                const student = await (this.db.query as any).students.findFirst({
                    where: eq(schema.students.id as any, claim.studentId)
                });

                if (student && student.email) {
                    await this.mailerService.sendMail({
                        to: student.email,
                        subject: `Reclamation Update: ${status}`,
                        html: `
                            <h3>Reclamation Status Updated</h3>
                            <p>Your reclamation "<strong>${claim.subject}</strong>" was updated.</p>
                            <p><strong>New Status:</strong> ${status}</p>
                            <p><strong>Response:</strong> ${response || 'None'}</p>
                        `
                    });
                }
            }
        } catch (e) {
            console.error("Failed to send student notification", e);
        }

        return { message: 'Status updated successfully' };
    }
}
