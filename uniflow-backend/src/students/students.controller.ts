import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
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

    // Admin Endpoints
    @Get('admin/students')
    async getAllStudents() {
        return await this.studentsService.getAllStudents();
    }

    @Post('admin/students')
    async createStudent(@Body() body: any) {
        return await this.studentsService.createStudent(body);
    }

    @Get('admin/students/:id')
    async getStudentById(@Param('id') id: string) {
        return await this.studentsService.getStudentById(id);
    }

    @Delete('admin/students/:id')
    async deleteStudent(@Param('id') id: string) {
        return await this.studentsService.deleteStudent(id);
    }

    // Admin views of student data
    @Get('admin/students/:id/grades')
    async getAdminGrades(@Param('id') id: string) {
        return await this.studentsService.getGrades(id);
    }

    @Get('admin/students/:id/schedule')
    async getAdminSchedule(@Param('id') id: string) {
        return await this.studentsService.getSchedule(id);
    }

    @Post('admin/students/:id/schedule')
    async addSchedule(@Param('id') id: string, @Body() body: any) {
        return await this.studentsService.addSchedule(id, body);
    }

    @Delete('admin/schedule/:id')
    async deleteSchedule(@Param('id') id: string) {
        return await this.studentsService.deleteSchedule(id);
    }

    @Get('admin/students/:id/payments')
    async getAdminPayments(@Param('id') id: string) {
        return await this.studentsService.getPayments(id);
    }

    @Get('admin/students/:id/absences')
    async getAdminAbsences(@Param('id') id: string) {
        return await this.studentsService.getAbsences(id);
    }

    @Get('admin/students/:id/claims')
    async getAdminClaims(@Param('id') id: string) {
        return await this.studentsService.getClaims(id);
    }

    // --- GRADES CRUD ---
    @Post('admin/students/:id/grades')
    async addGrade(@Param('id') id: string, @Body() body: any) {
        return await this.studentsService.addGrade(id, body);
    }

    @Put('admin/grades/:gradeId')
    async updateGrade(@Param('gradeId') gradeId: string, @Body() body: any) {
        return await this.studentsService.updateGrade(gradeId, body);
    }

    @Delete('admin/grades/:gradeId')
    async deleteGrade(@Param('gradeId') gradeId: string) {
        return await this.studentsService.deleteGrade(gradeId);
    }

    @Get('admin/grades/:gradeId')
    async getGrade(@Param('gradeId') gradeId: string) {
        const grade = await this.studentsService.getGradeById(gradeId);
        if (!grade) throw new NotFoundException('Grade not found');
        return grade;
    }

    // --- PAYMENTS CRUD ---
    @Post('admin/students/:id/payments')
    async addPayment(@Param('id') id: string, @Body() body: any) {
        return await this.studentsService.addPayment(id, body);
    }

    @Put('admin/payments/:paymentId')
    async updatePayment(@Param('paymentId') paymentId: string, @Body() body: any) {
        return await this.studentsService.updatePayment(paymentId, body);
    }

    @Delete('admin/payments/:paymentId')
    async deletePayment(@Param('paymentId') paymentId: string) {
        return await this.studentsService.deletePayment(paymentId);
    }

    @Get('admin/payments/:paymentId')
    async getPayment(@Param('paymentId') paymentId: string) {
        const payment = await this.studentsService.getPaymentById(paymentId);
        if (!payment) throw new NotFoundException('Payment not found');
        return payment;
    }

    // --- ABSENCES CRUD ---
    @Post('admin/students/:id/absences')
    async addAbsence(@Param('id') id: string, @Body() body: any) {
        return await this.studentsService.addAbsence(id, body);
    }

    @Put('admin/absences/:absenceId')
    async updateAbsence(@Param('absenceId') absenceId: string, @Body() body: any) {
        return await this.studentsService.updateAbsence(absenceId, body);
    }

    @Delete('admin/absences/:absenceId')
    async deleteAbsence(@Param('absenceId') absenceId: string) {
        return await this.studentsService.deleteAbsence(absenceId);
    }

    @Get('admin/absences/:absenceId')
    async getAbsence(@Param('absenceId') absenceId: string) {
        const absence = await this.studentsService.getAbsenceById(absenceId);
        if (!absence) throw new NotFoundException('Absence not found');
        return absence;
    }

    // --- CLAIMS CRUD ---
    // (Claims are usually created by students, but admin might want to delete or update response)
    @Put('admin/claims/:claimId')
    async updateClaim(@Param('claimId') claimId: string, @Body() body: any) {
        return await this.studentsService.updateClaim(claimId, body);
    }

    @Delete('admin/claims/:claimId')
    async deleteClaim(@Param('claimId') claimId: string) {
        return await this.studentsService.deleteClaim(claimId);
    }

    @Get('admin/claims/:claimId')
    async getClaim(@Param('claimId') claimId: string) {
        const claim = await this.studentsService.getClaimById(claimId);
        if (!claim) throw new NotFoundException('Claim not found');
        return claim;
    }
}
