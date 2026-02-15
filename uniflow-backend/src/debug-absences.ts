import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DRIZZLE } from './database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const db = app.get<MySql2Database<typeof schema>>(DRIZZLE);

    const absences = await (db.query as any).absences.findMany();
    console.log('Total Absences in DB:', absences.length);
    if (absences.length > 0) {
        console.log('Sample Absences:', absences.slice(0, 5));
    }

    await app.close();
}
bootstrap();
