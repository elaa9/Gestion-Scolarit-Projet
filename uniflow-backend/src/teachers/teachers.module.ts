import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [TeachersService],
    controllers: [TeachersController],
    exports: [TeachersService],
})
export class TeachersModule { }
