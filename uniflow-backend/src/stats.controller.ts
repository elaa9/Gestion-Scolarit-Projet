import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('api/admin/stats')
export class StatsController {
    constructor(private readonly statsService: StatsService) { }

    @Get('summary')
    async getSummary() {
        return this.statsService.getAdminStats();
    }

    @Get('recent-claims')
    async getRecentClaims() {
        return this.statsService.getRecentClaims();
    }

    @Get('departments')
    async getDepartments() {
        return this.statsService.getDepartmentSummary();
    }
}
