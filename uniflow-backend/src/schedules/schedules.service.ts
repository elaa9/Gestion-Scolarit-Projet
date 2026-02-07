import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SchedulesService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async findAll() {
        return await (this.db.query as any).schedules.findMany();
    }

    async findByClass(classId: string) {
        return await (this.db.query as any).schedules.findMany({
            where: eq(schema.schedules.classId as any, classId)
        });
    }

    async findByTeacher(teacherId: string) {
        return await (this.db.query as any).schedules.findMany({
            where: eq(schema.schedules.teacherId as any, teacherId)
        });
    }

    async create(data: any) {
        const id = uuidv4();
        await (this.db.insert(schema.schedules as any) as any).values({
            id,
            ...data
        });
        return { id, ...data };
    }

    async update(id: string, data: any) {
        await (this.db.update(schema.schedules as any) as any)
            .set(data)
            .where(eq(schema.schedules.id as any, id));
        return { id, ...data };
    }

    async delete(id: string) {
        await (this.db.delete(schema.schedules as any) as any)
            .where(eq(schema.schedules.id as any, id));
        return { message: 'Schedule item deleted' };
    }
}
