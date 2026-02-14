import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AbsencesService } from './absences.service';

@Controller('api/absences')
export class AbsencesController {
    constructor(private readonly absencesService: AbsencesService) { }

    @Get('student/:id')
    getStudentAbsences(@Param('id') studentId: string) {
        return this.absencesService.getByStudent(studentId);
    }

    @Get('class/:classId/students')
    getClassStudents(@Param('classId') classId: string) {
        return this.absencesService.getStudentsByClass(classId);
    }

    @Get('session')
    getSessionAbsences(
        @Query('moduleId') moduleId: string,
        @Query('date') date: string,
        @Query('startTime') startTime: string,
    ) {
        return this.absencesService.getAbsencesForSession(moduleId, date, startTime);
    }

    @Post('record')
    recordAbsences(@Body() data: {
        classId: string;
        moduleId: string;
        date: string;
        startTime: string;
        endTime: string;
        absentStudentIds: string[];
    }) {
        return this.absencesService.recordAbsences(data);
    }
}
