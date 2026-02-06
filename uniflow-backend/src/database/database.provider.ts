import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';
import * as schema from '@shared/schema';

export const DRIZZLE = 'DRIZZLE';

export const DrizzleProvider: FactoryProvider = {
    provide: DRIZZLE,
    useFactory: async (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('DATABASE_URL');

        if (!databaseUrl) {
            throw new Error('DATABASE_URL is not defined in the environment. Please check your .env file.');
        }

        const pool = await mysql.createPool({
            uri: databaseUrl,
        });
        return drizzle(pool, { schema, mode: 'default' });
    },
    inject: [ConfigService],
};
