import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AbsencesController } from './absences.controller';
import { AbsencesService } from './absences.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AbsencesController],
    providers: [AbsencesService],
    exports: [AbsencesService],
})
export class AbsencesModule { }
