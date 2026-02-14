import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DRIZZLE } from './database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const db = app.get<MySql2Database<typeof schema>>(DRIZZLE);

    const classes = await (db.query as any).classes.findMany();
    const targetClass = classes.find((c: any) => c.name.includes('Logiciel'));

    if (targetClass) {
        console.log(`Found class: ${targetClass.name} (ID: ${targetClass.id})`);
        const students = await (db.query as any).students.findMany();

        for (const student of students) {
            await db.update(schema.students as any)
                .set({ classId: targetClass.id })
                .where(eq(schema.students.id as any, student.id));
            console.log(`Assigned student ${student.name} to class ${targetClass.name}`);
        }
    } else {
        console.log('Class Génie Logiciel not found');
    }

    await app.close();
}
bootstrap();
