import { Controller, Get, Post, Body, Patch, Param, NotFoundException } from '@nestjs/common';
import { ClaimsService } from './claims.service';

@Controller('api/reclamations')
export class ClaimsController {
    constructor(private readonly claimsService: ClaimsService) { }

    @Post()
    create(@Body() createClaimDto: { studentId: string; subject: string; service: string; message: string }) {
        if (!createClaimDto.studentId) {
            throw new NotFoundException('Student ID is required');
        }
        return this.claimsService.create(createClaimDto.studentId, createClaimDto);
    }

    // Admin: Get all claims
    @Get()
    findAll() {
        return this.claimsService.findAll();
    }

    // Student: Get my claims
    @Get('student/:studentId')
    findByStudent(@Param('studentId') studentId: string) {
        return this.claimsService.findByStudent(studentId);
    }

    // Student: Update claim content (if pending)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateClaimDto: { subject?: string; service?: string; message?: string }) {
        return this.claimsService.update(id, updateClaimDto);
    }

    // Admin: Update status and response
    @Patch(':id/status')
    updateStatus(@Param('id') id: string, @Body() statusDto: { status: string; response?: string }) {
        return this.claimsService.adminUpdate(id, statusDto.status, statusDto.response);
    }
}
