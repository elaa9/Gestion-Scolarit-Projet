import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DepartmentsService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async getAllDepartments() {
        return await (this.db.query as any).departments.findMany();
    }

    async getSpecialtiesByDepartment(departmentId: string) {
        return await (this.db.query as any).specialties.findMany({
            where: eq(schema.specialties.departmentId as any, departmentId),
        });
    }

    async getAllSpecialties() {
        return await (this.db.query as any).specialties.findMany();
    }

    async createDepartment(data: { name: string; code: string }) {
        console.log('Creating department:', data);
        const id = uuidv4();
        try {
            await (this.db.insert(schema.departments as any) as any).values({
                id,
                name: data.name,
                code: data.code,
            });
            console.log('Department created with ID:', id);
            return { id, ...data };
        } catch (error) {
            console.error('Failed to create department:', error);
            throw error;
        }
    }

    async createSpecialty(data: { name: string; departmentId: string }) {
        const id = uuidv4();
        await (this.db.insert(schema.specialties as any) as any).values({
            id,
            name: data.name,
            departmentId: data.departmentId,
        });
        return { id, ...data };
    }

    async deleteDepartment(id: string) {
        await this.db.delete(schema.departments as any).where(eq(schema.departments.id as any, id));
        return { message: 'Department deleted' };
    }

    async deleteSpecialty(id: string) {
        await this.db.delete(schema.specialties as any).where(eq(schema.specialties.id as any, id));
        return { message: 'Specialty deleted' };
    }

    async updateDepartment(id: string, data: { name?: string; code?: string }) {
        await this.db.update(schema.departments as any)
            .set(data)
            .where(eq(schema.departments.id as any, id));
        return { id, ...data };
    }

    async updateSpecialty(id: string, data: { name?: string; departmentId?: string }) {
        await this.db.update(schema.specialties as any)
            .set(data)
            .where(eq(schema.specialties.id as any, id));
        return { id, ...data };
    }
}
