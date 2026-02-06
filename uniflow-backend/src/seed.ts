import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DRIZZLE } from './database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import bcrypt from 'bcrypt';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const db = app.get<MySql2Database<typeof schema>>(DRIZZLE);

    console.log('Seeding database from backend...');

    const hashedPassword = await bcrypt.hash('admin123', 10);
    await (db.insert(schema.users as any) as any).values({
        id: 'admin-1',
        email: 'admin@uniflow.com',
        password: hashedPassword,
        role: 'admin',
    }).onDuplicateKeyUpdate({ set: { email: 'admin@uniflow.com' } });

    const studentHashedPassword = await bcrypt.hash('student1337', 10);
    await (db.insert(schema.users as any) as any).values({
        id: 'student-user-1',
        email: 'etudiant@uniflow.com',
        password: studentHashedPassword,
        role: 'etudiant',
    }).onDuplicateKeyUpdate({ set: { email: 'etudiant@uniflow.com' } });

    await (db.insert(schema.students as any) as any).values({
        id: 'student-1',
        userId: 'student-user-1',
        name: 'Jean Dupont',
        program: 'Génie Informatique',
        level: '3ème Année',
        average: '15.5',
        email: 'jean.dupont@test.com',
        phone: '0612345678',
        address: '123 Rue de la Paix, Paris',
        birthDate: '2002-05-15',
        enrollmentDate: '2021-09-01',
    }).onDuplicateKeyUpdate({ set: { name: 'Jean Dupont' } });

    console.log('Seeding completed!');
    await app.close();
}
bootstrap();
