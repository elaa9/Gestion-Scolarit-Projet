import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('api/classes')
export class ClassesController {
    constructor(private readonly classesService: ClassesService) { }

    @Get()
    async findAll(
        @Query('departmentId') departmentId?: string,
        @Query('level') level?: string
    ) {
        return await this.classesService.findAll(departmentId, level);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.classesService.findOne(id);
    }

    @Post()
    async create(@Body() data: any) {
        return await this.classesService.create(data);
    }

    @Post(':id') // Update
    async update(@Param('id') id: string, @Body() data: any) {
        return await this.classesService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.classesService.delete(id);
    }
}
