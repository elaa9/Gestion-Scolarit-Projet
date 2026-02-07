import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DRIZZLE } from './database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const db = app.get<MySql2Database<typeof schema>>(DRIZZLE);

    const args = process.argv.slice(2);
    if (args.length < 3) {
        console.log('Usage: npx ts-node -r tsconfig-paths/register src/create-user.ts <email> <password> <role> [name]');
        console.log('Roles: admin, etudiant, enseignant');
        process.exit(1);
    }

    const [email, password, role, name] = args;

    console.log(`Creating user...`);
    console.log(`Email: ${email}`);
    console.log(`Role: ${role}`);

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();

    try {
        await (db.insert(schema.users as any) as any).values({
            id: userId,
            email,
            password: hashedPassword,
            role,
        });

        if (role === 'etudiant' && name) {
            await (db.insert(schema.students as any) as any).values({
                id: uuidv4(),
                userId: userId,
                name: name,
                program: 'N/A', // Default values
                level: 'N/A',
                email: email,
            });
            console.log(`Linked student profile created for ${name}`);
        }

        console.log('User created successfully!');
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        await app.close();
    }
}

bootstrap();
