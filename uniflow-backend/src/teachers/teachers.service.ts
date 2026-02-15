import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq, and, sql, desc, inArray } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

@Injectable()
export class TeachersService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
        private readonly mailerService: MailerService,
    ) { }

    async getAllTeachers() {
        return await (this.db.query as any).teachers.findMany();
    }

    async getTeacherById(id: string) {
        return await (this.db.query as any).teachers.findFirst({
            where: eq(schema.teachers.id as any, id),
        });
    }

    async getProfileByUserId(userId: string) {
        return await (this.db.query as any).teachers.findFirst({
            where: eq(schema.teachers.userId as any, userId),
        });
    }

    async createTeacher(data: any) {
        const { email, password, name, department, specialty, phone } = data;

        const existingUser = await (this.db.query as any).users.findFirst({
            where: eq(schema.users.email as any, email),
        });

        if (existingUser) {
            throw new BadRequestException('User with this email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();
        const teacherId = uuidv4();

        await (this.db.insert(schema.users as any) as any).values({
            id: userId,
            email,
            password: hashedPassword,
            role: 'enseignant',
        });

        await (this.db.insert(schema.teachers as any) as any).values({
            id: teacherId,
            userId: userId,
            name,
            department: department || 'N/A',
            specialty: specialty || 'N/A',
            assignedClasses: data.assignedClasses || null, // Added assignedClasses
            email,
            phone: phone || null,
            status: 'Actif',
        });

        // Send confirmation email
        try {
            await this.mailerService.sendMail({
                to: email,
                subject: 'Bienvenue chez Uniflow - Votre compte enseignant',
                template: 'account-confirmation',
                context: {
                    name: name,
                    email: email,
                    password: password,
                    role: 'Enseignant',
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
            console.log(`[TeachersService] Confirmation email sent to ${email}`);
        } catch (error) {
            console.error(`[TeachersService] Failed to send confirmation email to ${email}:`, error);
        }

        return { message: 'Teacher created successfully', teacherId, userId };
    }

    async updateTeacher(id: string, updates: Partial<schema.Teacher>) {
        await this.db.update(schema.teachers as any)
            .set(updates)
            .where(eq(schema.teachers.id as any, id));

        return await this.getTeacherById(id);
    }

    async deleteTeacher(id: string) {
        // Find teacher to get userId
        const teacher = await this.getTeacherById(id);
        if (!teacher) return { message: 'Teacher not found' };

        await this.db.delete(schema.teachers as any).where(eq(schema.teachers.id as any, id));
        await this.db.delete(schema.users as any).where(eq(schema.users.id as any, teacher.userId));

        return { message: 'Teacher and associated user deleted successfully' };
    }

    async getDashboardStats(teacherId: string) {
        // 1. Get Teacher's Schedule Items
        const schedules = await (this.db.query as any).schedules.findMany({
            where: eq(schema.schedules.teacherId as any, teacherId)
        });

        const classIds = [...new Set(schedules.map((s: any) => s.classId))];
        const moduleIds = [...new Set(schedules.map((s: any) => s.moduleId))];

        // 2. Count Students
        let studentsCount = 0;
        if (classIds.length > 0) {
            const students = await (this.db.query as any).students.findMany({
                where: inArray(schema.students.classId as any, classIds)
            });
            studentsCount = students.length;
        }

        // 3. Success Rate (Grades >= 10 for teacher's modules)
        let successRate = 'N/A';
        if (moduleIds.length > 0) {
            const grades = await (this.db.query as any).grades.findMany({
                where: inArray(schema.grades.moduleId as any, moduleIds)
            });
            if (grades.length > 0) {
                const passed = grades.filter((g: any) => parseFloat(g.grade) >= 10).length;
                successRate = `${Math.round((passed / grades.length) * 100)}%`;
            }
        }

        // 4. Pending Absences (Not justified for teacher's modules)
        let pendingAbsences = 0;
        if (moduleIds.length > 0) {
            const absences = await (this.db.query as any).absences.findMany({
                where: and(
                    inArray(schema.absences.moduleId as any, moduleIds),
                    eq(schema.absences.justified as any, 'false')
                )
            });
            pendingAbsences = absences.length;
        }

        // 5. Today's Schedule
        const todayFr = format(new Date(), 'EEEE', { locale: fr });
        const capitalizedToday = todayFr.charAt(0).toUpperCase() + todayFr.slice(1);

        const sessionsForToday = schedules.filter((s: any) => s.dayOfWeek === capitalizedToday);

        // Enrich sessions with module and class names
        const enrichedToday = await Promise.all(sessionsForToday.map(async (s: any) => {
            const mod = await (this.db.query as any).modules.findFirst({ where: eq(schema.modules.id as any, s.moduleId) });
            const cl = await (this.db.query as any).classes.findFirst({ where: eq(schema.classes.id as any, s.classId) });
            return {
                time: `${s.startTime} - ${s.endTime}`,
                subject: mod?.name || 'Inconnu',
                room: s.room || 'N/A',
                type: s.type,
                className: cl?.name || 'Inconnue'
            };
        }));

        // 6. Recent Absences
        let recentAbsList: any[] = [];
        if (moduleIds.length > 0) {
            const rawRecent = await (this.db.query as any).absences.findMany({
                where: inArray(schema.absences.moduleId as any, moduleIds),
                limit: 5,
                orderBy: [desc(schema.absences.date as any)]
            });

            recentAbsList = await Promise.all(rawRecent.map(async (a: any) => {
                const st = await (this.db.query as any).students.findFirst({ where: eq(schema.students.id as any, a.studentId) });
                const mod = await (this.db.query as any).modules.findFirst({ where: eq(schema.modules.id as any, a.moduleId) });
                return {
                    student: st?.name || 'Inconnu',
                    course: mod?.name || 'Inconnu',
                    date: a.date,
                    status: a.justified === 'true' ? 'Justifiée' : 'Non justifiée'
                };
            }));
        }

        return {
            stats: [
                { label: 'Étudiants encadrés', value: studentsCount.toString(), color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Modules actifs', value: moduleIds.length.toString(), color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Taux de réussite', value: successRate, color: 'text-purple-600', bg: 'bg-purple-50' },
                { label: 'Absences à traiter', value: pendingAbsences.toString(), color: 'text-orange-600', bg: 'bg-orange-50' }
            ],
            todaySchedule: enrichedToday,
            recentAbsences: recentAbsList
        };
    }
}
