import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './students/students.module';
import { AuthModule } from './auth/auth.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', 'server-nest/.env']
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        const smtpHost = config.get('SMTP_HOST');

        if (!smtpHost) {
          console.warn('[MailerModule] SMTP_HOST not set. Emails will be logged to console.');
          return {
            transport: {
              jsonTransport: true, // Log to console
            },
            defaults: {
              from: '"Uniflow" <noreply@uniflow.com>',
            },
            template: {
              dir: process.cwd() + '/templates/',
              adapter: new HandlebarsAdapter(),
              options: {
                strict: true,
              },
            },
          };
        }

        return {
          transport: {
            host: smtpHost,
            port: config.get('SMTP_PORT'),
            secure: false,
            auth: {
              user: config.get('SMTP_USER'),
              pass: config.get('SMTP_PASS'),
            },
          },
          defaults: {
            from: `"Uniflow" <${config.get('SMTP_USER')}>`,
          },
          template: {
            dir: process.cwd() + '/templates/',
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
      inject: [ConfigService],
    }),
    DatabaseModule,
    StudentsModule,
    AuthModule,
    ModulesModule,
  ],
})
export class AppModule { }
