import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AbsencesService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async getByStudent(studentId: string) {
        return await (this.db.query as any).absences.findMany({
            where: eq(schema.absences.studentId as any, studentId),
            orderBy: (absences: any, { desc }: any) => [desc(absences.date)]
        });
    }

    async getStudentsByClass(classId: string) {
        return await (this.db.query as any).students.findMany({
            where: eq(schema.students.classId as any, classId)
        });
    }

    async recordAbsences(data: {
        classId: string;
        moduleId: string;
        date: string;
        startTime: string;
        endTime: string;
        absentStudentIds: string[];
    }) {
        const { absentStudentIds, moduleId, date, startTime, endTime } = data;

        // First, delete existing entries for this specific session to avoid duplicates if re-submitting
        await (this.db.delete(schema.absences as any) as any)
            .where(
                and(
                    eq(schema.absences.moduleId as any, moduleId),
                    eq(schema.absences.date as any, date),
                    eq(schema.absences.startTime as any, startTime),
                    eq(schema.absences.endTime as any, endTime)
                )
            );

        if (absentStudentIds.length === 0) return { count: 0 };

        const records = absentStudentIds.map(studentId => ({
            id: uuidv4(),
            studentId,
            moduleId,
            date,
            startTime,
            endTime,
            justified: 'false'
        }));

        await (this.db.insert(schema.absences as any) as any).values(records);

        return { count: records.length };
    }

    async getAbsencesForSession(moduleId: string, date: string, startTime: string) {
        return await (this.db.query as any).absences.findMany({
            where: and(
                eq(schema.absences.moduleId as any, moduleId),
                eq(schema.absences.date as any, date),
                eq(schema.absences.startTime as any, startTime)
            )
        });
    }
}
