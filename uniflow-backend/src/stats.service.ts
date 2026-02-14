import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from './database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { sql, eq, count } from 'drizzle-orm';

@Injectable()
export class StatsService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async getAdminStats() {
        console.log('DEBUG: Fetching stats from database...');

        // Count by role in users table (Source of Truth for accounts)
        const [studentUserCount] = await this.db.select({ value: count() })
            .from(schema.users as any)
            .where(eq(schema.users.role as any, 'etudiant'));

        const [teacherUserCount] = await this.db.select({ value: count() })
            .from(schema.users as any)
            .where(eq(schema.users.role as any, 'enseignant'));

        const [claimCount] = await this.db.select({ value: count() })
            .from(schema.claims as any)
            .where(eq(schema.claims.status as any, 'En cours'));

        const payments = await this.db.select().from(schema.payments as any);
        const totalPendingAmount = payments.reduce((sum: number, p: any) => {
            const amount = parseFloat(p.amount.toString().replace(/[^0-9.]/g, '')) || 0;
            return sum + (p.status !== 'Payé' ? amount : 0);
        }, 0);

        console.log('DEBUG: Stats results:', {
            students: studentUserCount.value,
            teachers: teacherUserCount.value,
            claims: claimCount.value,
            payments: totalPendingAmount
        });

        return {
            students: studentUserCount.value,
            teachers: teacherUserCount.value,
            pendingClaims: claimCount.value,
            pendingPayments: totalPendingAmount
        };
    }

    async getRecentClaims() {
        const claims = await (this.db.query as any).claims.findMany({
            orderBy: [sql`date DESC`],
            limit: 5,
        });

        return await Promise.all(claims.map(async (claim: any) => {
            const student = await (this.db.query as any).students.findFirst({
                where: eq(schema.students.id as any, claim.studentId)
            });
            return { ...claim, studentName: student?.name || 'Inconnu' };
        }));
    }

    async getDepartmentSummary() {
        console.log('DEBUG: Fetching departments...');
        const deps = await this.db.select().from(schema.departments as any);
        console.log('DEBUG: Found departments:', deps.length);

        const results: any[] = [];
        for (const dep of deps as any) {
            const [studentCount] = await this.db.select({ value: count() })
                .from(schema.students as any)
                .where(sql`program LIKE ${'%' + dep.name + '%'}`);

            const [teacherCount] = await this.db.select({ value: count() })
                .from(schema.teachers as any)
                .where(sql`department LIKE ${'%' + dep.name + '%'}`);

            results.push({
                name: dep.name,
                students: studentCount.value,
                teachers: teacherCount.value
            });
        }
        console.log('DEBUG: Department summary results:', results);
        return results;
    }
}
