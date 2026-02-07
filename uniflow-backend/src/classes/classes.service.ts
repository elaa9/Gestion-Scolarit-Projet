import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ClassesService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async findAll(departmentId?: string, level?: string) {
        if (departmentId && level) {
            return await (this.db.query as any).classes.findMany({
                where: and(
                    eq(schema.classes.departmentId as any, departmentId),
                    eq(schema.classes.level as any, level)
                )
            });
        }
        if (departmentId) {
            return await (this.db.query as any).classes.findMany({
                where: eq(schema.classes.departmentId as any, departmentId)
            });
        }
        return await (this.db.query as any).classes.findMany();
    }

    async findOne(id: string) {
        return await (this.db.query as any).classes.findFirst({
            where: eq(schema.classes.id as any, id)
        });
    }

    async create(data: any) {
        const id = uuidv4();
        await (this.db.insert(schema.classes as any) as any).values({
            id,
            ...data
        });
        return { id, ...data };
    }

    async update(id: string, data: any) {
        await (this.db.update(schema.classes as any) as any)
            .set(data)
            .where(eq(schema.classes.id as any, id));
        return { id, ...data };
    }

    async delete(id: string) {
        await (this.db.delete(schema.classes as any) as any)
            .where(eq(schema.classes.id as any, id));
        return { message: 'Class deleted' };
    }
}
