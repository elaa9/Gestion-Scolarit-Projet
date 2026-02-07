import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ModulesService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async findAll() {
        const modules = await (this.db.query as any).modules.findMany();
        const relations = await (this.db.query as any).modulesToDepartments.findMany();

        return modules.map((mod: any) => ({
            ...mod,
            departmentIds: relations
                .filter((r: any) => r.moduleId === mod.id)
                .map((r: any) => r.departmentId)
        }));
    }

    async create(data: any) {
        const id = uuidv4();
        const { departmentIds, ...moduleData } = data;

        await (this.db.insert(schema.modules as any) as any).values({
            id,
            ...moduleData
        });

        if (departmentIds && Array.isArray(departmentIds)) {
            for (const deptId of departmentIds) {
                await (this.db.insert(schema.modulesToDepartments as any) as any).values({
                    moduleId: id,
                    departmentId: deptId
                });
            }
        }

        return { id, ...data };
    }

    async update(id: string, data: any) {
        const { departmentIds, ...moduleData } = data;

        await (this.db.update(schema.modules as any) as any)
            .set(moduleData)
            .where(eq(schema.modules.id as any, id));

        if (departmentIds && Array.isArray(departmentIds)) {
            // Remove old relations
            await (this.db.delete(schema.modulesToDepartments as any) as any)
                .where(eq(schema.modulesToDepartments.moduleId as any, id));

            // Add new ones
            for (const deptId of departmentIds) {
                await (this.db.insert(schema.modulesToDepartments as any) as any).values({
                    moduleId: id,
                    departmentId: deptId
                });
            }
        }

        return { id, ...data };
    }

    async delete(id: string) {
        // Delete relations first
        await (this.db.delete(schema.modulesToDepartments as any) as any)
            .where(eq(schema.modulesToDepartments.moduleId as any, id));

        await (this.db.delete(schema.modules as any) as any)
            .where(eq(schema.modules.id as any, id));

        return { message: 'Module deleted' };
    }
}
