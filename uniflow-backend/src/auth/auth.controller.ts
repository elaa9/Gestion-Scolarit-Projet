import { Controller, Post, Body, UnauthorizedException, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response } from 'express';

@Controller('api')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() body: any, @Res() res: Response) {
        const { email, password } = body;
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        res.setHeader('Cache-Control', 'no-cache');
        return res.json(user);
    }

    @Post('forgot-password')
    async forgotPassword(@Body() body: { email: string }) {
        return this.authService.forgotPassword(body.email);
    }

    @Post('reset-password')
    async resetPassword(@Body() body: { token: string; newPass: string }) {
        return this.authService.resetPassword(body.token, body.newPass);
    }
}
