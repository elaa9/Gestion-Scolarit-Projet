import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ModulesService } from './modules.service';

@Controller('api/modules')
export class ModulesController {
    constructor(private readonly modulesService: ModulesService) { }

    @Get()
    async findAll() {
        return await this.modulesService.findAll();
    }

    @Post()
    async create(@Body() data: any) {
        return await this.modulesService.create(data);
    }

    @Post(':id') // Using Post with ID for updates
    async update(@Param('id') id: string, @Body() data: any) {
        return await this.modulesService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.modulesService.delete(id);
    }
}
