import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DRIZZLE } from './database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { sql } from 'drizzle-orm';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const db = app.get<MySql2Database<any>>(DRIZZLE);

    console.log('Running manual migration...');

    try {
        await db.execute(sql`
            ALTER TABLE users 
            ADD COLUMN IF NOT EXISTS reset_password_token VARCHAR(255),
            ADD COLUMN IF NOT EXISTS reset_password_expires VARCHAR(255);
        `);
        console.log('Checked users table columns.');

        await db.execute(sql`
            CREATE TABLE IF NOT EXISTS teachers (
                id VARCHAR(255) PRIMARY KEY,
                user_id VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                department TEXT NOT NULL,
                specialty TEXT NOT NULL,
                email VARCHAR(255),
                phone VARCHAR(50),
                status VARCHAR(50) DEFAULT 'Actif'
            )
        `);
        console.log('Teachers table is ready.');

        await db.execute(sql`
            ALTER TABLE teachers 
            MODIFY COLUMN department TEXT NOT NULL,
            MODIFY COLUMN specialty TEXT NOT NULL;
        `);
        console.log('Modified teachers table columns to TEXT.');

        await db.execute(sql`
            CREATE TABLE IF NOT EXISTS departments (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                code VARCHAR(50) NOT NULL
            )
        `);

        await db.execute(sql`
            CREATE TABLE IF NOT EXISTS specialties (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                department_id VARCHAR(255) NOT NULL
            )
        `);
        console.log('Departments and Specialties tables are ready.');

        await db.execute(sql`
            CREATE TABLE IF NOT EXISTS modules_to_departments (
                module_id VARCHAR(255) NOT NULL,
                department_id VARCHAR(255) NOT NULL,
                PRIMARY KEY (module_id, department_id)
            )
        `);

        try {
            await db.execute(sql`ALTER TABLE modules DROP COLUMN department_id`);
        } catch (e) { }

        console.log('Modules and many-to-many relationship tables are ready.');

        // Seed initial data if tables are empty
        const [deptCount] = await db.execute(sql`SELECT COUNT(*) as count FROM departments`) as any;
        if (deptCount[0].count === 0) {
            const depts = [
                { id: '1', name: 'Génie Informatique', code: 'GI' },
                { id: '2', name: 'Génie Civil', code: 'GC' },
                { id: '3', name: 'Génie Électrique', code: 'GE' },
                { id: '4', name: 'Génie Mécanique', code: 'GM' },
                { id: '5', name: 'Génie Industriel', code: 'GIND' },
                { id: '6', name: 'Management', code: 'MGT' }
            ];
            for (const d of depts) {
                await db.execute(sql`INSERT INTO departments (id, name, code) VALUES (${d.id}, ${d.name}, ${d.code})`);
            }

            const specs = [
                { id: '101', name: 'Développement Web', department_id: '1' },
                { id: '102', name: 'Intelligence Artificielle', department_id: '1' },
                { id: '103', name: 'Réseaux & Sécurité', department_id: '1' },
                { id: '201', name: 'Structures & Matériaux', department_id: '2' },
                { id: '301', name: 'Électronique de puissance', department_id: '3' },
                { id: '601', name: 'Ressources Humaines', department_id: '6' }
            ];
            for (const s of specs) {
                await db.execute(sql`INSERT INTO specialties (id, name, department_id) VALUES (${s.id}, ${s.name}, ${s.department_id})`);
            }
            console.log('Seeded departments and specialties.');
        }

        await db.execute(sql`DROP TABLE IF EXISTS schedules`);

        await db.execute(sql`
            CREATE TABLE IF NOT EXISTS classes (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                department_id VARCHAR(255) NOT NULL,
                level VARCHAR(50) NOT NULL
            )
        `);

        await db.execute(sql`
            CREATE TABLE IF NOT EXISTS schedules (
                id VARCHAR(255) PRIMARY KEY,
                class_id VARCHAR(255) NOT NULL,
                module_id VARCHAR(255) NOT NULL,
                teacher_id VARCHAR(255) NOT NULL,
                day_of_week VARCHAR(50) NOT NULL,
                start_time VARCHAR(50) NOT NULL,
                end_time VARCHAR(50) NOT NULL,
                room VARCHAR(50) NOT NULL,
                type VARCHAR(50) NOT NULL
            )
        `);

        // Add class_id to students if not exists
        try {
            await db.execute(sql`ALTER TABLE students ADD COLUMN class_id VARCHAR(255)`);
            console.log('Added class_id column to students.');
        } catch (e) {
            // Probably already exists
        }

        try {
            await db.execute(sql`DROP TABLE IF EXISTS schedule`);
        } catch (e) { }

        await db.execute(sql`ALTER TABLE teachers ADD COLUMN IF NOT EXISTS assigned_classes TEXT`);
        console.log('Migration complete: Classes and updated students/teachers tables are ready.');

    } catch (error: any) {
        console.error('Migration failed:', error);
    } finally {
        await app.close();
    }
}

bootstrap();
