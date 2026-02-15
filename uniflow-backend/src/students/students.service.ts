import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class StudentsService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
        private readonly mailerService: MailerService,
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
        const student = await this.getStudentById(studentId);
        if (!student || !student.classId) return [];

        return await (this.db.query as any).schedules.findMany({
            where: eq(schema.schedules.classId as any, student.classId)
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

    // Admin methods
    async getAllStudents() {
        return await (this.db.query as any).students.findMany();
    }

    async getStudentById(id: string) {
        return await (this.db.query as any).students.findFirst({
            where: eq(schema.students.id as any, id),
        });
    }

    async deleteStudent(id: string) {
        // Find student to get userId
        const student = await this.getStudentById(id);
        if (!student) return { message: 'Student not found' };

        // Delete student record
        await this.db.delete(schema.students as any)
            .where(eq(schema.students.id as any, id));

        // Delete associated user record
        await this.db.delete(schema.users as any)
            .where(eq(schema.users.id as any, student.userId));

        return { message: 'Student and associated user deleted successfully' };
    }

    async createStudent(data: any) {
        const { email, password, name, program, level, phone, address } = data;

        // Check if user exists
        const existingUser = await (this.db.query as any).users.findFirst({
            where: eq(schema.users.email as any, email),
        });

        if (existingUser) {
            throw new BadRequestException('User with this email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();
        const studentId = uuidv4();

        // Create User
        await (this.db.insert(schema.users as any) as any).values({
            id: userId,
            email,
            password: hashedPassword,
            role: 'etudiant',
        });

        // Create Student Profile
        await (this.db.insert(schema.students as any) as any).values({
            id: studentId,
            userId: userId,
            name: name,
            program: program || 'N/A',
            level: level || 'N/A',
            classId: data.classId || null, // Added classId
            email: email,
            phone: phone || null,
            address: address || null,
            enrollmentDate: new Date().toISOString().split('T')[0],
        });

        // Send confirmation email
        try {
            await this.mailerService.sendMail({
                to: email,
                subject: 'Bienvenue chez Uniflow - Votre compte étudiant',
                template: 'account-confirmation',
                context: {
                    name: name,
                    email: email,
                    password: password,
                    role: 'Étudiant',
                    loginLink: 'http://localhost:5173',
                },
                attachments: [
                    {
                        filename: 'uniflow.png',
                        path: process.cwd() + '/templates/uniflow.png',
                        cid: 'uniflow_logo'
                    }
                ]
            });
            console.log(`[StudentsService] Confirmation email sent to ${email}`);
        } catch (error) {
            console.error(`[StudentsService] Failed to send confirmation email to ${email}:`, error);
        }

        return { message: 'Student created successfully', studentId, userId };
    }

    // --- GRADES ---
    async addGrade(studentId: string, data: Omit<schema.Grade, 'id' | 'studentId'>) {
        const id = uuidv4();
        await (this.db.insert(schema.grades as any) as any).values({
            id,
            studentId,
            ...data,
        });
        return { message: 'Grade added successfully', id };
    }

    async updateGrade(id: string, updates: Partial<schema.Grade>) {
        await this.db.update(schema.grades as any)
            .set(updates)
            .where(eq(schema.grades.id as any, id));
        return { message: 'Grade updated successfully' };
    }

    async getGradeById(id: string) {
        return await (this.db.query as any).grades.findFirst({
            where: eq(schema.grades.id as any, id),
        });
    }

    async deleteGrade(id: string) {
        await this.db.delete(schema.grades as any)
            .where(eq(schema.grades.id as any, id));
        return { message: 'Grade deleted successfully' };
    }

    // --- SCHEDULE (OLD METHODS REMOVED) ---

    // --- PAYMENTS ---
    async addPayment(studentId: string, data: Omit<schema.Payment, 'id' | 'studentId'>) {
        const id = uuidv4();
        await (this.db.insert(schema.payments as any) as any).values({
            id,
            studentId,
            ...data,
        });
        return { message: 'Payment added successfully', id };
    }

    async updatePayment(id: string, updates: Partial<schema.Payment>) {
        await this.db.update(schema.payments as any)
            .set(updates)
            .where(eq(schema.payments.id as any, id));
        return { message: 'Payment updated successfully' };
    }

    async getPaymentById(id: string) {
        return await (this.db.query as any).payments.findFirst({
            where: eq(schema.payments.id as any, id),
        });
    }

    async deletePayment(id: string) {
        await this.db.delete(schema.payments as any)
            .where(eq(schema.payments.id as any, id));
        return { message: 'Payment deleted successfully' };
    }

    // --- ABSENCES ---
    async addAbsence(studentId: string, data: Omit<schema.Absence, 'id' | 'studentId'>) {
        const id = uuidv4();
        await (this.db.insert(schema.absences as any) as any).values({
            id,
            studentId,
            ...data,
        });
        return { message: 'Absence added successfully', id };
    }

    async updateAbsence(id: string, updates: Partial<schema.Absence>) {
        await this.db.update(schema.absences as any)
            .set(updates)
            .where(eq(schema.absences.id as any, id));
        return { message: 'Absence updated successfully' };
    }

    async getAbsenceById(id: string) {
        return await (this.db.query as any).absences.findFirst({
            where: eq(schema.absences.id as any, id),
        });
    }

    async deleteAbsence(id: string) {
        await this.db.delete(schema.absences as any)
            .where(eq(schema.absences.id as any, id));
        return { message: 'Absence deleted successfully' };
    }

    // --- CLAIMS ---
    async updateClaim(id: string, updates: Partial<schema.Claim>) {
        await this.db.update(schema.claims as any)
            .set(updates)
            .where(eq(schema.claims.id as any, id));
        return { message: 'Claim updated successfully' };
    }

    async getClaimById(id: string) {
        return await (this.db.query as any).claims.findFirst({
            where: eq(schema.claims.id as any, id),
        });
    }

    async deleteClaim(id: string) {
        await this.db.delete(schema.claims as any)
            .where(eq(schema.claims.id as any, id));
        return { message: 'Claim deleted successfully' };
    }

    // --- SCHEDULE ---
    async addSchedule(studentId: string, data: any) {
        const student = await (this.db.query as any).students.findFirst({
            where: eq(schema.students.id as any, studentId),
        });
        if (!student || !student.classId) return { message: 'Student or class not found' };

        const id = uuidv4();
        await (this.db.insert(schema.schedules as any) as any).values({
            id,
            classId: student.classId,
            moduleId: data.moduleId,
            teacherId: data.teacherId || null,
            dayOfWeek: data.dayOfWeek,
            startTime: data.startTime,
            endTime: data.endTime,
            room: data.room,
            type: data.type || 'Cours',
        });
        return { message: 'Schedule added successfully', id };
    }

    async deleteSchedule(id: string) {
        await this.db.delete(schema.schedules as any)
            .where(eq(schema.schedules.id as any, id));
        return { message: 'Schedule deleted successfully' };
    }
}
