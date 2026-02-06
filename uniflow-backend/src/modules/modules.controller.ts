import { Controller, Get } from '@nestjs/common';
import { ModulesService } from './modules.service';

@Controller('api')
export class ModulesController {
    constructor(private readonly modulesService: ModulesService) { }

    @Get('modules')
    async findAll() {
        return await this.modulesService.findAll();
    }
}
