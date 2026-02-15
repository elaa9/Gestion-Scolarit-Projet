
import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

async function check() {
    const databaseUrl = process.env.DATABASE_URL?.replace('localhost', '127.0.0.1') || '';
    console.log('Connecting to:', databaseUrl);
    try {
        const connection = await mysql.createConnection(databaseUrl as string);
        console.log('Successfully connected to database.');
        const [rows] = await connection.query('SHOW TABLES');
        console.log('Tables in database:', rows);
        await connection.end();
    } catch (error) {
        console.error('Failed to connect to database:', error);
    }
}

check();
