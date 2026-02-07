import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Controller('api/schedules')
export class SchedulesController {
    constructor(private readonly schedulesService: SchedulesService) { }

    @Get()
    async findAll(
        @Query('classId') classId?: string,
        @Query('teacherId') teacherId?: string
    ) {
        if (classId) {
            return await this.schedulesService.findByClass(classId);
        }
        if (teacherId) {
            return await this.schedulesService.findByTeacher(teacherId);
        }
        return await this.schedulesService.findAll();
    }

    @Post()
    async create(@Body() data: any) {
        return await this.schedulesService.create(data);
    }

    @Post(':id')
    async update(@Param('id') id: string, @Body() data: any) {
        return await this.schedulesService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.schedulesService.delete(id);
    }
}
