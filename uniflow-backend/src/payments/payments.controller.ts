import { Controller, Get, Post, Body, Param, NotFoundException, BadRequestException } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('api/payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }

    // Set payment plan
    @Post('student/:studentId/plan')
    async setPlan(@Param('studentId') studentId: string, @Body() body: { plan: string }) {
        if (!body.plan) throw new BadRequestException('Plan is required');
        return this.paymentsService.setPlan(studentId, body.plan);
    }

    // Admin: Add payment
    @Post()
    async addPayment(@Body() body: { studentId: string; amount: number; type: string; date: string }) {
        if (!body.studentId || !body.amount) throw new BadRequestException('Missing required fields');
        return this.paymentsService.addPayment(body);
    }

    // Get payments and status for student
    @Get('student/:studentId')
    async getStudentPayments(@Param('studentId') studentId: string) {
        return this.paymentsService.getStudentStatus(studentId);
    }
}
