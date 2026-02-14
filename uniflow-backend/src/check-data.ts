import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DRIZZLE } from './database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const db = app.get<MySql2Database<typeof schema>>(DRIZZLE);

    const classes = await (db.query as any).classes.findMany();
    const students = await (db.query as any).students.findMany();

    console.log('Classes found:', classes.map((c: any) => ({ id: c.id, name: c.name })));
    console.log('Students found:', students.map((s: any) => ({ id: s.id, name: s.name, classId: s.classId })));

    await app.close();
}
bootstrap();
