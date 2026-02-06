import { Controller, Get, Post, Put, Body, Param, NotFoundException } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('api')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) { }

    @Get('student-profile/:userId')
    async getProfile(@Param('userId') userId: string) {
        const student = await this.studentsService.getProfileByUserId(userId);
        if (!student) throw new NotFoundException('Student profile not found');
        return student;
    }

    @Get('student/:id/grades')
    async getGrades(@Param('id') id: string) {
        return await this.studentsService.getGrades(id);
    }

    @Get('student/:id/schedule')
    async getSchedule(@Param('id') id: string) {
        return await this.studentsService.getSchedule(id);
    }

    @Get('student/:id/payments')
    async getPayments(@Param('id') id: string) {
        return await this.studentsService.getPayments(id);
    }

    @Get('student/:id/absences')
    async getAbsences(@Param('id') id: string) {
        return await this.studentsService.getAbsences(id);
    }

    @Get('student/:id/claims')
    async getClaims(@Param('id') id: string) {
        return await this.studentsService.getClaims(id);
    }

    @Post('student/:id/claims')
    async createClaim(@Param('id') id: string, @Body() body: { subject: string; message: string }) {
        return await this.studentsService.createClaim(id, body);
    }

    @Put('student/:id')
    async updateProfile(@Param('id') id: string, @Body() updates: any) {
        const updated = await this.studentsService.updateProfile(id, updates);
        if (!updated) throw new NotFoundException('Student not found');
        return updated;
    }
}
