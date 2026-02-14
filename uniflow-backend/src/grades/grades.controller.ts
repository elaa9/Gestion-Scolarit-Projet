import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { GradesService } from './grades.service';

@Controller('api/grades')
export class GradesController {
    constructor(private readonly gradesService: GradesService) { }

    @Get('class-module')
    async getStudentsWithGrades(
        @Query('classId') classId: string,
        @Query('moduleId') moduleId: string
    ) {
        return this.gradesService.getStudentsWithGrades(classId, moduleId);
    }

    @Post('save')
    async saveGrade(@Body() data: any) {
        return this.gradesService.saveGrade(data);
    }
}
