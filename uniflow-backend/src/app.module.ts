import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './students/students.module';
import { AuthModule } from './auth/auth.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', 'server-nest/.env']
    }),
    DatabaseModule,
    StudentsModule,
    AuthModule,
    ModulesModule,
  ],
})
export class AppModule { }
