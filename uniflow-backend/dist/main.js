/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../shared/schema.ts"
/*!***************************!*\
  !*** ../shared/schema.ts ***!
  \***************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.insertClaimSchema = exports.insertAbsenceSchema = exports.insertPaymentSchema = exports.insertScheduleSchema = exports.insertGradeSchema = exports.insertModuleSchema = exports.insertStudentSchema = exports.insertUserSchema = exports.claims = exports.absences = exports.payments = exports.schedule = exports.grades = exports.modules = exports.students = exports.users = void 0;
const mysql_core_1 = __webpack_require__(/*! drizzle-orm/mysql-core */ "drizzle-orm/mysql-core");
const drizzle_zod_1 = __webpack_require__(/*! drizzle-zod */ "drizzle-zod");
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    email: (0, mysql_core_1.varchar)("email", { length: 255 }).notNull().unique(),
    password: (0, mysql_core_1.text)("password").notNull(),
    role: (0, mysql_core_1.varchar)("role", { length: 50 }).notNull(),
    resetPasswordToken: (0, mysql_core_1.varchar)("reset_password_token", { length: 255 }),
    resetPasswordExpires: (0, mysql_core_1.varchar)("reset_password_expires", { length: 255 }),
});
exports.students = (0, mysql_core_1.mysqlTable)("students", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    userId: (0, mysql_core_1.varchar)("user_id", { length: 255 }).notNull(),
    name: (0, mysql_core_1.varchar)("name", { length: 255 }).notNull(),
    program: (0, mysql_core_1.varchar)("program", { length: 255 }).notNull(),
    level: (0, mysql_core_1.varchar)("level", { length: 255 }).notNull(),
    average: (0, mysql_core_1.varchar)("average", { length: 50 }),
    email: (0, mysql_core_1.varchar)("email", { length: 255 }),
    phone: (0, mysql_core_1.varchar)("phone", { length: 50 }),
    address: (0, mysql_core_1.text)("address"),
    birthDate: (0, mysql_core_1.varchar)("birth_date", { length: 50 }),
    enrollmentDate: (0, mysql_core_1.varchar)("enrollment_date", { length: 50 }),
});
exports.modules = (0, mysql_core_1.mysqlTable)("modules", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    code: (0, mysql_core_1.varchar)("code", { length: 50 }).notNull(),
    name: (0, mysql_core_1.varchar)("name", { length: 255 }).notNull(),
    coefficient: (0, mysql_core_1.varchar)("coefficient", { length: 50 }).notNull(),
    semester: (0, mysql_core_1.varchar)("semester", { length: 50 }).default("S1"),
});
exports.grades = (0, mysql_core_1.mysqlTable)("grades", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    studentId: (0, mysql_core_1.varchar)("student_id", { length: 255 }).notNull(),
    moduleId: (0, mysql_core_1.varchar)("module_id", { length: 255 }).notNull(),
    grade: (0, mysql_core_1.varchar)("grade", { length: 50 }).notNull(),
    maxGrade: (0, mysql_core_1.varchar)("max_grade", { length: 50 }).default("20"),
    status: (0, mysql_core_1.varchar)("status", { length: 50 }).notNull(),
    date: (0, mysql_core_1.varchar)("date", { length: 50 }).notNull(),
});
exports.schedule = (0, mysql_core_1.mysqlTable)("schedule", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    studentId: (0, mysql_core_1.varchar)("student_id", { length: 255 }).notNull(),
    dayOfWeek: (0, mysql_core_1.varchar)("day_of_week", { length: 50 }).notNull(),
    startTime: (0, mysql_core_1.varchar)("start_time", { length: 50 }).notNull(),
    endTime: (0, mysql_core_1.varchar)("end_time", { length: 50 }).notNull(),
    moduleId: (0, mysql_core_1.varchar)("module_id", { length: 255 }).notNull(),
    room: (0, mysql_core_1.varchar)("room", { length: 50 }).notNull(),
    professor: (0, mysql_core_1.varchar)("professor", { length: 255 }).notNull(),
    type: (0, mysql_core_1.varchar)("type", { length: 255 }).notNull(),
});
exports.payments = (0, mysql_core_1.mysqlTable)("payments", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    studentId: (0, mysql_core_1.varchar)("student_id", { length: 255 }).notNull(),
    type: (0, mysql_core_1.varchar)("type", { length: 255 }).notNull(),
    amount: (0, mysql_core_1.varchar)("amount", { length: 50 }).notNull(),
    dueDate: (0, mysql_core_1.varchar)("due_date", { length: 50 }).notNull(),
    status: (0, mysql_core_1.varchar)("status", { length: 50 }).notNull(),
    paidDate: (0, mysql_core_1.varchar)("paid_date", { length: 50 }),
});
exports.absences = (0, mysql_core_1.mysqlTable)("absences", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    studentId: (0, mysql_core_1.varchar)("student_id", { length: 255 }).notNull(),
    moduleId: (0, mysql_core_1.varchar)("module_id", { length: 255 }).notNull(),
    date: (0, mysql_core_1.varchar)("date", { length: 50 }).notNull(),
    startTime: (0, mysql_core_1.varchar)("start_time", { length: 50 }).notNull(),
    endTime: (0, mysql_core_1.varchar)("end_time", { length: 50 }).notNull(),
    justified: (0, mysql_core_1.varchar)("justified", { length: 50 }).default("false"),
    reason: (0, mysql_core_1.text)("reason"),
});
exports.claims = (0, mysql_core_1.mysqlTable)("claims", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    studentId: (0, mysql_core_1.varchar)("student_id", { length: 255 }).notNull(),
    subject: (0, mysql_core_1.varchar)("subject", { length: 255 }).notNull(),
    message: (0, mysql_core_1.text)("message").notNull(),
    date: (0, mysql_core_1.varchar)("date", { length: 50 }).notNull(),
    status: (0, mysql_core_1.varchar)("status", { length: 50 }).default("En cours"),
    response: (0, mysql_core_1.text)("response"),
});
exports.insertUserSchema = (0, drizzle_zod_1.createInsertSchema)(exports.users).pick({
    email: true,
    password: true,
    role: true,
});
exports.insertStudentSchema = (0, drizzle_zod_1.createInsertSchema)(exports.students);
exports.insertModuleSchema = (0, drizzle_zod_1.createInsertSchema)(exports.modules);
exports.insertGradeSchema = (0, drizzle_zod_1.createInsertSchema)(exports.grades);
exports.insertScheduleSchema = (0, drizzle_zod_1.createInsertSchema)(exports.schedule);
exports.insertPaymentSchema = (0, drizzle_zod_1.createInsertSchema)(exports.payments);
exports.insertAbsenceSchema = (0, drizzle_zod_1.createInsertSchema)(exports.absences);
exports.insertClaimSchema = (0, drizzle_zod_1.createInsertSchema)(exports.claims);


/***/ },

/***/ "./src/app.module.ts"
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const handlebars_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/handlebars.adapter */ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./src/database/database.module.ts");
const students_module_1 = __webpack_require__(/*! ./students/students.module */ "./src/students/students.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const modules_module_1 = __webpack_require__(/*! ./modules/modules.module */ "./src/modules/modules.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', 'server-nest/.env']
            }),
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (config) => {
                    const smtpHost = config.get('SMTP_HOST');
                    if (!smtpHost) {
                        console.warn('[MailerModule] SMTP_HOST not set. Emails will be logged to console.');
                        return {
                            transport: {
                                jsonTransport: true,
                            },
                            defaults: {
                                from: '"Uniflow" <noreply@uniflow.com>',
                            },
                            template: {
                                dir: process.cwd() + '/templates/',
                                adapter: new handlebars_adapter_1.HandlebarsAdapter(),
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
                            adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                            options: {
                                strict: true,
                            },
                        },
                    };
                },
                inject: [config_1.ConfigService],
            }),
            database_module_1.DatabaseModule,
            students_module_1.StudentsModule,
            auth_module_1.AuthModule,
            modules_module_1.ModulesModule,
        ],
    })
], AppModule);


/***/ },

/***/ "./src/auth/auth.controller.ts"
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async login(body, res) {
        const { email, password } = body;
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        res.setHeader('Cache-Control', 'no-cache');
        return res.json(user);
    }
    async forgotPassword(body) {
        return this.authService.forgotPassword(body.email);
    }
    async resetPassword(body) {
        return this.authService.resetPassword(body.token, body.newPass);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ },

/***/ "./src/auth/auth.module.ts"
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ },

/***/ "./src/auth/auth.service.ts"
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_provider_1 = __webpack_require__(/*! ../database/database.provider */ "./src/database/database.provider.ts");
const mysql2_1 = __webpack_require__(/*! drizzle-orm/mysql2 */ "drizzle-orm/mysql2");
const schema = __importStar(__webpack_require__(/*! @shared/schema */ "../shared/schema.ts"));
const drizzle_orm_1 = __webpack_require__(/*! drizzle-orm */ "drizzle-orm");
const bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const crypto = __importStar(__webpack_require__(/*! crypto */ "crypto"));
let AuthService = class AuthService {
    db;
    mailerService;
    constructor(db, mailerService) {
        this.db = db;
        this.mailerService = mailerService;
    }
    async validateUser(email, pass) {
        console.log(`[BACKEND DEBUG] validateUser called for: ${email}`);
        const user = await this.db.query.users.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.users.email, email),
        });
        if (!user) {
            console.log(`[BACKEND DEBUG] User NOT found: ${email}`);
            return null;
        }
        const isMatch = await bcrypt_1.default.compare(pass, user.password);
        console.log(`[BACKEND DEBUG] Password match for ${email}: ${isMatch}`);
        if (isMatch) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async forgotPassword(email) {
        const user = await this.db.query.users.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.users.email, email),
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const token = crypto.randomBytes(32).toString('hex');
        const expires = Date.now() + 900000;
        await this.db.update(schema.users)
            .set({
            resetPasswordToken: token,
            resetPasswordExpires: expires.toString()
        })
            .where((0, drizzle_orm_1.eq)(schema.users.id, user.id));
        const resetLink = `http://localhost:5173/reset-password?token=${token}`;
        console.log('\n=================================================================');
        console.log('[PASSWORD RESET DEBUG] Starting password reset flow for:', email);
        console.log('[PASSWORD RESET DEBUG] Token generated:', token);
        console.log('[PASSWORD RESET DEBUG] FULL RESET LINK BELOW:');
        console.log(resetLink);
        console.log('=================================================================\n');
        try {
            console.log('[PASSWORD RESET DEBUG] Attempting to send email via MailerService...');
            await this.mailerService.sendMail({
                to: user.email,
                subject: 'Réinitialisation de mot de passe - Uniflow',
                template: 'reset-password',
                context: {
                    resetLink: resetLink,
                },
                attachments: [
                    {
                        filename: 'uniflow.png',
                        path: process.cwd() + '/templates/uniflow.png',
                        cid: 'uniflow_logo'
                    }
                ]
            });
            console.log('[PASSWORD RESET DEBUG] Email sent successfully (or logged if mock transport).');
        }
        catch (e) {
            console.error('[BACKEND ERROR] Failed to send email via MailerService:', e);
            console.error('[BACKEND ERROR] Stack:', e instanceof Error ? e.stack : String(e));
        }
        const isDevMode = !process.env.SMTP_HOST;
        return {
            message: 'Password reset email sent',
            ...(isDevMode ? { devToken: token, devLink: resetLink } : {})
        };
    }
    async resetPassword(token, newPass) {
        const user = await this.db.query.users.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.users.resetPasswordToken, token),
        });
        if (!user) {
            throw new common_1.BadRequestException('Invalid token');
        }
        const now = Date.now();
        const expires = parseInt(user.resetPasswordExpires || '0');
        if (now > expires) {
            throw new common_1.BadRequestException('Token expired');
        }
        const hashedPassword = await bcrypt_1.default.hash(newPass, 10);
        await this.db.update(schema.users)
            .set({
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null,
        })
            .where((0, drizzle_orm_1.eq)(schema.users.id, user.id));
        return { message: 'Password successfully updated' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_provider_1.DRIZZLE)),
    __metadata("design:paramtypes", [typeof (_a = typeof mysql2_1.MySql2Database !== "undefined" && mysql2_1.MySql2Database) === "function" ? _a : Object, typeof (_b = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _b : Object])
], AuthService);


/***/ },

/***/ "./src/database/database.module.ts"
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_provider_1 = __webpack_require__(/*! ./database.provider */ "./src/database/database.provider.ts");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [database_provider_1.DrizzleProvider],
        exports: [database_provider_1.DRIZZLE],
    })
], DatabaseModule);


/***/ },

/***/ "./src/database/database.provider.ts"
/*!*******************************************!*\
  !*** ./src/database/database.provider.ts ***!
  \*******************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrizzleProvider = exports.DRIZZLE = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mysql2_1 = __webpack_require__(/*! drizzle-orm/mysql2 */ "drizzle-orm/mysql2");
const mysql = __importStar(__webpack_require__(/*! mysql2/promise */ "mysql2/promise"));
const schema = __importStar(__webpack_require__(/*! @shared/schema */ "../shared/schema.ts"));
exports.DRIZZLE = 'DRIZZLE';
exports.DrizzleProvider = {
    provide: exports.DRIZZLE,
    useFactory: async (configService) => {
        const databaseUrl = configService.get('DATABASE_URL');
        if (!databaseUrl) {
            throw new Error('DATABASE_URL is not defined in the environment. Please check your .env file.');
        }
        const pool = await mysql.createPool({
            uri: databaseUrl,
        });
        return (0, mysql2_1.drizzle)(pool, { schema, mode: 'default' });
    },
    inject: [config_1.ConfigService],
};


/***/ },

/***/ "./src/modules/modules.controller.ts"
/*!*******************************************!*\
  !*** ./src/modules/modules.controller.ts ***!
  \*******************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModulesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const modules_service_1 = __webpack_require__(/*! ./modules.service */ "./src/modules/modules.service.ts");
let ModulesController = class ModulesController {
    modulesService;
    constructor(modulesService) {
        this.modulesService = modulesService;
    }
    async findAll() {
        return await this.modulesService.findAll();
    }
};
exports.ModulesController = ModulesController;
__decorate([
    (0, common_1.Get)('modules'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "findAll", null);
exports.ModulesController = ModulesController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [typeof (_a = typeof modules_service_1.ModulesService !== "undefined" && modules_service_1.ModulesService) === "function" ? _a : Object])
], ModulesController);


/***/ },

/***/ "./src/modules/modules.module.ts"
/*!***************************************!*\
  !*** ./src/modules/modules.module.ts ***!
  \***************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModulesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const modules_service_1 = __webpack_require__(/*! ./modules.service */ "./src/modules/modules.service.ts");
const modules_controller_1 = __webpack_require__(/*! ./modules.controller */ "./src/modules/modules.controller.ts");
let ModulesModule = class ModulesModule {
};
exports.ModulesModule = ModulesModule;
exports.ModulesModule = ModulesModule = __decorate([
    (0, common_1.Module)({
        controllers: [modules_controller_1.ModulesController],
        providers: [modules_service_1.ModulesService],
    })
], ModulesModule);


/***/ },

/***/ "./src/modules/modules.service.ts"
/*!****************************************!*\
  !*** ./src/modules/modules.service.ts ***!
  \****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModulesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_provider_1 = __webpack_require__(/*! ../database/database.provider */ "./src/database/database.provider.ts");
const mysql2_1 = __webpack_require__(/*! drizzle-orm/mysql2 */ "drizzle-orm/mysql2");
let ModulesService = class ModulesService {
    db;
    constructor(db) {
        this.db = db;
    }
    async findAll() {
        return await this.db.query.modules.findMany();
    }
};
exports.ModulesService = ModulesService;
exports.ModulesService = ModulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_provider_1.DRIZZLE)),
    __metadata("design:paramtypes", [typeof (_a = typeof mysql2_1.MySql2Database !== "undefined" && mysql2_1.MySql2Database) === "function" ? _a : Object])
], ModulesService);


/***/ },

/***/ "./src/students/students.controller.ts"
/*!*********************************************!*\
  !*** ./src/students/students.controller.ts ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const students_service_1 = __webpack_require__(/*! ./students.service */ "./src/students/students.service.ts");
let StudentsController = class StudentsController {
    studentsService;
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    async getProfile(userId) {
        const student = await this.studentsService.getProfileByUserId(userId);
        if (!student)
            throw new common_1.NotFoundException('Student profile not found');
        return student;
    }
    async getGrades(id) {
        return await this.studentsService.getGrades(id);
    }
    async getSchedule(id) {
        return await this.studentsService.getSchedule(id);
    }
    async getPayments(id) {
        return await this.studentsService.getPayments(id);
    }
    async getAbsences(id) {
        return await this.studentsService.getAbsences(id);
    }
    async getClaims(id) {
        return await this.studentsService.getClaims(id);
    }
    async createClaim(id, body) {
        return await this.studentsService.createClaim(id, body);
    }
    async updateProfile(id, updates) {
        const updated = await this.studentsService.updateProfile(id, updates);
        if (!updated)
            throw new common_1.NotFoundException('Student not found');
        return updated;
    }
};
exports.StudentsController = StudentsController;
__decorate([
    (0, common_1.Get)('student-profile/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('student/:id/grades'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getGrades", null);
__decorate([
    (0, common_1.Get)('student/:id/schedule'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getSchedule", null);
__decorate([
    (0, common_1.Get)('student/:id/payments'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getPayments", null);
__decorate([
    (0, common_1.Get)('student/:id/absences'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAbsences", null);
__decorate([
    (0, common_1.Get)('student/:id/claims'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getClaims", null);
__decorate([
    (0, common_1.Post)('student/:id/claims'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "createClaim", null);
__decorate([
    (0, common_1.Put)('student/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "updateProfile", null);
exports.StudentsController = StudentsController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [typeof (_a = typeof students_service_1.StudentsService !== "undefined" && students_service_1.StudentsService) === "function" ? _a : Object])
], StudentsController);


/***/ },

/***/ "./src/students/students.module.ts"
/*!*****************************************!*\
  !*** ./src/students/students.module.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const students_service_1 = __webpack_require__(/*! ./students.service */ "./src/students/students.service.ts");
const students_controller_1 = __webpack_require__(/*! ./students.controller */ "./src/students/students.controller.ts");
let StudentsModule = class StudentsModule {
};
exports.StudentsModule = StudentsModule;
exports.StudentsModule = StudentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [students_controller_1.StudentsController],
        providers: [students_service_1.StudentsService],
    })
], StudentsModule);


/***/ },

/***/ "./src/students/students.service.ts"
/*!******************************************!*\
  !*** ./src/students/students.service.ts ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_provider_1 = __webpack_require__(/*! ../database/database.provider */ "./src/database/database.provider.ts");
const mysql2_1 = __webpack_require__(/*! drizzle-orm/mysql2 */ "drizzle-orm/mysql2");
const schema = __importStar(__webpack_require__(/*! @shared/schema */ "../shared/schema.ts"));
const drizzle_orm_1 = __webpack_require__(/*! drizzle-orm */ "drizzle-orm");
let StudentsService = class StudentsService {
    db;
    constructor(db) {
        this.db = db;
    }
    async getProfileByUserId(userId) {
        return await this.db.query.students.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.students.userId, userId),
        });
    }
    async getGrades(studentId) {
        return await this.db.query.grades.findMany({
            where: (0, drizzle_orm_1.eq)(schema.grades.studentId, studentId),
        });
    }
    async getSchedule(studentId) {
        return await this.db.query.schedule.findMany({
            where: (0, drizzle_orm_1.eq)(schema.schedule.studentId, studentId),
        });
    }
    async getPayments(studentId) {
        return await this.db.query.payments.findMany({
            where: (0, drizzle_orm_1.eq)(schema.payments.studentId, studentId),
        });
    }
    async getAbsences(studentId) {
        return await this.db.query.absences.findMany({
            where: (0, drizzle_orm_1.eq)(schema.absences.studentId, studentId),
        });
    }
    async getClaims(studentId) {
        return await this.db.query.claims.findMany({
            where: (0, drizzle_orm_1.eq)(schema.claims.studentId, studentId),
        });
    }
    async createClaim(studentId, claimData) {
        await this.db.insert(schema.claims).values({
            studentId,
            subject: claimData.subject,
            message: claimData.message,
            date: new Date().toISOString().split('T')[0],
            status: 'En cours',
            response: null,
        });
        return { message: 'Claim created successfully' };
    }
    async updateProfile(studentId, updates) {
        await this.db.update(schema.students)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema.students.id, studentId));
        return await this.db.query.students.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.students.id, studentId),
        });
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_provider_1.DRIZZLE)),
    __metadata("design:paramtypes", [typeof (_a = typeof mysql2_1.MySql2Database !== "undefined" && mysql2_1.MySql2Database) === "function" ? _a : Object])
], StudentsService);


/***/ },

/***/ "@nestjs-modules/mailer"
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
(module) {

module.exports = require("@nestjs-modules/mailer");

/***/ },

/***/ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter"
/*!**************************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/handlebars.adapter" ***!
  \**************************************************************************/
(module) {

module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

/***/ },

/***/ "@nestjs/common"
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/common");

/***/ },

/***/ "@nestjs/config"
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/config");

/***/ },

/***/ "@nestjs/core"
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
(module) {

module.exports = require("@nestjs/core");

/***/ },

/***/ "bcrypt"
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
(module) {

module.exports = require("bcrypt");

/***/ },

/***/ "crypto"
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
(module) {

module.exports = require("crypto");

/***/ },

/***/ "drizzle-orm"
/*!******************************!*\
  !*** external "drizzle-orm" ***!
  \******************************/
(module) {

module.exports = require("drizzle-orm");

/***/ },

/***/ "drizzle-orm/mysql-core"
/*!*****************************************!*\
  !*** external "drizzle-orm/mysql-core" ***!
  \*****************************************/
(module) {

module.exports = require("drizzle-orm/mysql-core");

/***/ },

/***/ "drizzle-orm/mysql2"
/*!*************************************!*\
  !*** external "drizzle-orm/mysql2" ***!
  \*************************************/
(module) {

module.exports = require("drizzle-orm/mysql2");

/***/ },

/***/ "drizzle-zod"
/*!******************************!*\
  !*** external "drizzle-zod" ***!
  \******************************/
(module) {

module.exports = require("drizzle-zod");

/***/ },

/***/ "mysql2/promise"
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
(module) {

module.exports = require("mysql2/promise");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

})();

/******/ })()
;