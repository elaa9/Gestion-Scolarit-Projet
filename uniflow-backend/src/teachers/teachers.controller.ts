import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { TeachersService } from './teachers.service';

@Controller('api')
export class TeachersController {
    constructor(private readonly teachersService: TeachersService) { }

    @Get('admin/teachers')
    async getAllTeachers() {
        return await this.teachersService.getAllTeachers();
    }

    @Get('admin/teachers/:id')
    async getTeacherById(@Param('id') id: string) {
        const teacher = await this.teachersService.getTeacherById(id);
        if (!teacher) throw new NotFoundException('Teacher not found');
        return teacher;
    }

    @Post('admin/teachers')
    async createTeacher(@Body() body: any) {
        return await this.teachersService.createTeacher(body);
    }

    @Put('admin/teachers/:id')
    async updateTeacher(@Param('id') id: string, @Body() updates: any) {
        const updated = await this.teachersService.updateTeacher(id, updates);
        if (!updated) throw new NotFoundException('Teacher not found');
        return updated;
    }

    @Delete('admin/teachers/:id')
    async deleteTeacher(@Param('id') id: string) {
        return await this.teachersService.deleteTeacher(id);
    }

    @Get('teacher-profile/:userId')
    async getProfile(@Param('userId') userId: string) {
        const teacher = await this.teachersService.getProfileByUserId(userId);
        if (!teacher) throw new NotFoundException('Teacher profile not found');
        return teacher;
    }

    @Get('teacher-dashboard/:id')
    async getDashboardStats(@Param('id') id: string) {
        return await this.teachersService.getDashboardStats(id);
    }
}
