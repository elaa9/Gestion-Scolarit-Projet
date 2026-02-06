import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from '../database/database.provider';
import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from '@shared/schema';

@Injectable()
export class ModulesService {
    constructor(
        @Inject(DRIZZLE) private db: MySql2Database<typeof schema>,
    ) { }

    async findAll() {
        return await (this.db.query as any).modules.findMany();
    }
}
