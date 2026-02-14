import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq, desc } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

const TOTAL_TUITION = 9000; // Example total tuition

@Injectable()
export class PaymentsService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async setPlan(studentId: string, plan: string) {
        if (!['Totale', '3 tranches', '8 tranches'].includes(plan)) {
            throw new Error('Invalid plan');
        }
        await this.db.update(schema.students as any)
            .set({ paymentPlan: plan })
            .where(eq(schema.students.id as any, studentId));
        return { message: 'Plan set successfully' };
    }

    async addPayment(data: { studentId: string; amount: number; type: string; date: string }) {
        const id = uuidv4();
        await this.db.insert(schema.payments as any).values({
            id,
            studentId: data.studentId,
            type: data.type || 'Espece',
            amount: data.amount.toString(),
            dueDate: new Date().toISOString(), // Optional if not tracking due dates per payment
            status: 'Payé',
            paidDate: data.date || new Date().toISOString(),
        });
        return { message: 'Payment recorded', id };
    }

    async getStudentStatus(studentId: string) {
        const student = await (this.db.query as any).students.findFirst({
            where: eq(schema.students.id as any, studentId)
        });

        if (!student) throw new NotFoundException('Student not found');

        const payments = await (this.db.query as any).payments.findMany({
            where: eq(schema.payments.studentId as any, studentId)
        });

        // Calculate totals
        const totalPaid = payments.reduce((sum: number, p: any) => sum + parseFloat(p.amount), 0);
        let remaining = TOTAL_TUITION - totalPaid;
        let planDetails = this.getPlanDetails(student.paymentPlan, TOTAL_TUITION);

        return {
            studentId,
            plan: student.paymentPlan,
            totalTuition: TOTAL_TUITION,
            totalPaid,
            remaining,
            progress: (totalPaid / TOTAL_TUITION) * 100,
            payments: payments.sort((a: any, b: any) => new Date(b.paidDate).getTime() - new Date(a.paidDate).getTime()),
            planDetails
        };
    }

    private getPlanDetails(plan: string, total: number) {
        if (!plan) return null;
        if (plan === 'Totale') return { installments: 1, amountPerInstallment: total };
        if (plan === '3 tranches') return { installments: 3, amountPerInstallment: total / 3 };
        if (plan === '8 tranches') return { installments: 8, amountPerInstallment: total / 8 };
        return null;
    }
}
