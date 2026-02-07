import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TeachersService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
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
}
