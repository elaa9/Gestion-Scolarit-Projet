import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
    imports: [MailerModule],
    controllers: [StudentsController],
    providers: [StudentsService],
})
export class StudentsModule { }
