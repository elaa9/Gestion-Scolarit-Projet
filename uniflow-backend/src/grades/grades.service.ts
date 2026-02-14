import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GradesService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async getStudentsWithGrades(classId: string, moduleId: string) {
        // Get all students in the class
        const students = await (this.db.query as any).students.findMany({
            where: eq(schema.students.classId as any, classId)
        });

        // Get all grades for this module and these students
        const grades = await (this.db.query as any).grades.findMany({
            where: eq(schema.grades.moduleId as any, moduleId)
        });

        // Merge grades with students
        return students.map((student: any) => {
            const studentGrade = grades.find((g: any) => g.studentId === student.id);
            return {
                ...student,
                grade: studentGrade || null
            };
        });
    }

    async saveGrade(data: { studentId: string; moduleId: string; grade: string; maxGrade: string; status: string }) {
        const { studentId, moduleId, grade, maxGrade, status } = data;

        // Check if grade exists
        const existing = await (this.db.query as any).grades.findFirst({
            where: and(
                eq(schema.grades.studentId as any, studentId),
                eq(schema.grades.moduleId as any, moduleId)
            )
        });

        if (existing) {
            await (this.db.update(schema.grades as any) as any)
                .set({ grade, maxGrade, status })
                .where(eq(schema.grades.id as any, existing.id));
            return { id: existing.id, ...data };
        } else {
            const id = uuidv4();
            await (this.db.insert(schema.grades as any) as any).values({
                id,
                studentId,
                moduleId,
                grade,
                maxGrade,
                status
            });
            return { id, ...data };
        }
    }
}
