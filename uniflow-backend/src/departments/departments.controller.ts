import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';

@Controller('api/departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) { }

    @Get()
    getAllDepartments() {
        return this.departmentsService.getAllDepartments();
    }

    @Get('specialties')
    getAllSpecialties() {
        return this.departmentsService.getAllSpecialties();
    }

    @Get(':id/specialties')
    getSpecialtiesByDepartment(@Param('id') id: string) {
        return this.departmentsService.getSpecialtiesByDepartment(id);
    }

    @Post()
    createDepartment(@Body() data: { name: string; code: string }) {
        return this.departmentsService.createDepartment(data);
    }

    @Post('specialties')
    createSpecialty(@Body() data: { name: string; departmentId: string }) {
        return this.departmentsService.createSpecialty(data);
    }

    @Delete(':id')
    deleteDepartment(@Param('id') id: string) {
        return this.departmentsService.deleteDepartment(id);
    }

    @Delete('specialties/:id')
    deleteSpecialty(@Param('id') id: string) {
        return this.departmentsService.deleteSpecialty(id);
    }

    @Post(':id') // Using Post for updates if Patch is not preferred, but let's use Post or Patch
    updateDepartment(@Param('id') id: string, @Body() data: any) {
        return this.departmentsService.updateDepartment(id, data);
    }

    @Post('specialties/:id')
    updateSpecialty(@Param('id') id: string, @Body() data: any) {
        return this.departmentsService.updateSpecialty(id, data);
    }
}
