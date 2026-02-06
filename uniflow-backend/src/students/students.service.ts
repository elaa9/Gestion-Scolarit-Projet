import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class StudentsService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async getProfileByUserId(userId: string) {
        return await (this.db.query as any).students.findFirst({
            where: eq(schema.students.userId as any, userId),
        });
    }

    async getGrades(studentId: string) {
        return await (this.db.query as any).grades.findMany({
            where: eq(schema.grades.studentId as any, studentId),
        });
    }

    async getSchedule(studentId: string) {
        return await (this.db.query as any).schedule.findMany({
            where: eq(schema.schedule.studentId as any, studentId),
        });
    }

    async getPayments(studentId: string) {
        return await (this.db.query as any).payments.findMany({
            where: eq(schema.payments.studentId as any, studentId),
        });
    }

    async getAbsences(studentId: string) {
        return await (this.db.query as any).absences.findMany({
            where: eq(schema.absences.studentId as any, studentId),
        });
    }

    async getClaims(studentId: string) {
        return await (this.db.query as any).claims.findMany({
            where: eq(schema.claims.studentId as any, studentId),
        });
    }

    async createClaim(studentId: string, claimData: { subject: string; message: string }) {
        await this.db.insert(schema.claims as any).values({
            studentId,
            subject: claimData.subject,
            message: claimData.message,
            date: new Date().toISOString().split('T')[0],
            status: 'En cours',
            response: null,
        } as any);
        return { message: 'Claim created successfully' };
    }

    async updateProfile(studentId: string, updates: Partial<schema.Student>) {
        await this.db.update(schema.students as any)
            .set(updates)
            .where(eq(schema.students.id as any, studentId));

        return await (this.db.query as any).students.findFirst({
            where: eq(schema.students.id as any, studentId),
        });
    }
}
