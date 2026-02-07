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
            ADD COLUMN reset_password_token VARCHAR(255),
            ADD COLUMN reset_password_expires VARCHAR(255);
        `);
        console.log('Successfully added columns reset_password_token and reset_password_expires to users table.');
    } catch (error: any) {
        if (error.code === 'ER_DUP_FIELDNAME') {
            console.log('Columns already exist in users table.');
        } else {
            console.error('Migration failed:', error);
        }
    } finally {
        await app.close();
    }
}

bootstrap();
