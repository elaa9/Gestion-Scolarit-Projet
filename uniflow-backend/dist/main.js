/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../shared/schema.ts"
/*!***************************!*\
  !*** ../shared/schema.ts ***!
  \***************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.insertModuleDepartmentSchema = exports.insertSpecialtySchema = exports.insertDepartmentSchema = exports.insertClaimSchema = exports.insertAbsenceSchema = exports.insertPaymentSchema = exports.insertScheduleSchema = exports.insertGradeSchema = exports.insertModuleSchema = exports.insertTeacherSchema = exports.insertStudentSchema = exports.insertUserSchema = exports.specialties = exports.departments = exports.teachers = exports.claims = exports.absences = exports.payments = exports.schedule = exports.grades = exports.modulesToDepartments = exports.modules = exports.students = exports.users = void 0;
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
exports.modulesToDepartments = (0, mysql_core_1.mysqlTable)("modules_to_departments", {
    moduleId: (0, mysql_core_1.varchar)("module_id", { length: 255 }).notNull(),
    departmentId: (0, mysql_core_1.varchar)("department_id", { length: 255 }).notNull(),
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
exports.teachers = (0, mysql_core_1.mysqlTable)("teachers", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    userId: (0, mysql_core_1.varchar)("user_id", { length: 255 }).notNull(),
    name: (0, mysql_core_1.varchar)("name", { length: 255 }).notNull(),
    department: (0, mysql_core_1.text)("department").notNull(),
    specialty: (0, mysql_core_1.text)("specialty").notNull(),
    email: (0, mysql_core_1.varchar)("email", { length: 255 }),
    phone: (0, mysql_core_1.varchar)("phone", { length: 50 }),
    status: (0, mysql_core_1.varchar)("status", { length: 50 }).default("Actif"),
});
exports.departments = (0, mysql_core_1.mysqlTable)("departments", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    name: (0, mysql_core_1.varchar)("name", { length: 255 }).notNull(),
    code: (0, mysql_core_1.varchar)("code", { length: 50 }).notNull(),
});
exports.specialties = (0, mysql_core_1.mysqlTable)("specialties", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    name: (0, mysql_core_1.varchar)("name", { length: 255 }).notNull(),
    departmentId: (0, mysql_core_1.varchar)("department_id", { length: 255 }).notNull(),
});
exports.insertUserSchema = (0, drizzle_zod_1.createInsertSchema)(exports.users).pick({
    email: true,
    password: true,
    role: true,
});
exports.insertStudentSchema = (0, drizzle_zod_1.createInsertSchema)(exports.students);
exports.insertTeacherSchema = (0, drizzle_zod_1.createInsertSchema)(exports.teachers);
exports.insertModuleSchema = (0, drizzle_zod_1.createInsertSchema)(exports.modules);
exports.insertGradeSchema = (0, drizzle_zod_1.createInsertSchema)(exports.grades);
exports.insertScheduleSchema = (0, drizzle_zod_1.createInsertSchema)(exports.schedule);
exports.insertPaymentSchema = (0, drizzle_zod_1.createInsertSchema)(exports.payments);
exports.insertAbsenceSchema = (0, drizzle_zod_1.createInsertSchema)(exports.absences);
exports.insertClaimSchema = (0, drizzle_zod_1.createInsertSchema)(exports.claims);
exports.insertDepartmentSchema = (0, drizzle_zod_1.createInsertSchema)(exports.departments);
exports.insertSpecialtySchema = (0, drizzle_zod_1.createInsertSchema)(exports.specialties);
exports.insertModuleDepartmentSchema = (0, drizzle_zod_1.createInsertSchema)(exports.modulesToDepartments);


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
const teachers_module_1 = __webpack_require__(/*! ./teachers/teachers.module */ "./src/teachers/teachers.module.ts");
const departments_module_1 = __webpack_require__(/*! ./departments/departments.module */ "./src/departments/departments.module.ts");
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
            teachers_module_1.TeachersModule,
            departments_module_1.DepartmentsModule,
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

/***/ "./src/departments/departments.controller.ts"
/*!***************************************************!*\
  !*** ./src/departments/departments.controller.ts ***!
  \***************************************************/
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
exports.DepartmentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const departments_service_1 = __webpack_require__(/*! ./departments.service */ "./src/departments/departments.service.ts");
let DepartmentsController = class DepartmentsController {
    departmentsService;
    constructor(departmentsService) {
        this.departmentsService = departmentsService;
    }
    getAllDepartments() {
        return this.departmentsService.getAllDepartments();
    }
    getAllSpecialties() {
        return this.departmentsService.getAllSpecialties();
    }
    getSpecialtiesByDepartment(id) {
        return this.departmentsService.getSpecialtiesByDepartment(id);
    }
    createDepartment(data) {
        return this.departmentsService.createDepartment(data);
    }
    createSpecialty(data) {
        return this.departmentsService.createSpecialty(data);
    }
    deleteDepartment(id) {
        return this.departmentsService.deleteDepartment(id);
    }
    deleteSpecialty(id) {
        return this.departmentsService.deleteSpecialty(id);
    }
    updateDepartment(id, data) {
        return this.departmentsService.updateDepartment(id, data);
    }
    updateSpecialty(id, data) {
        return this.departmentsService.updateSpecialty(id, data);
    }
};
exports.DepartmentsController = DepartmentsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "getAllDepartments", null);
__decorate([
    (0, common_1.Get)('specialties'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "getAllSpecialties", null);
__decorate([
    (0, common_1.Get)(':id/specialties'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "getSpecialtiesByDepartment", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "createDepartment", null);
__decorate([
    (0, common_1.Post)('specialties'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "createSpecialty", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "deleteDepartment", null);
__decorate([
    (0, common_1.Delete)('specialties/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "deleteSpecialty", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "updateDepartment", null);
__decorate([
    (0, common_1.Post)('specialties/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "updateSpecialty", null);
exports.DepartmentsController = DepartmentsController = __decorate([
    (0, common_1.Controller)('api/departments'),
    __metadata("design:paramtypes", [typeof (_a = typeof departments_service_1.DepartmentsService !== "undefined" && departments_service_1.DepartmentsService) === "function" ? _a : Object])
], DepartmentsController);


/***/ },

/***/ "./src/departments/departments.module.ts"
/*!***********************************************!*\
  !*** ./src/departments/departments.module.ts ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartmentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const departments_service_1 = __webpack_require__(/*! ./departments.service */ "./src/departments/departments.service.ts");
const departments_controller_1 = __webpack_require__(/*! ./departments.controller */ "./src/departments/departments.controller.ts");
const database_module_1 = __webpack_require__(/*! ../database/database.module */ "./src/database/database.module.ts");
let DepartmentsModule = class DepartmentsModule {
};
exports.DepartmentsModule = DepartmentsModule;
exports.DepartmentsModule = DepartmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [departments_service_1.DepartmentsService],
        controllers: [departments_controller_1.DepartmentsController],
        exports: [departments_service_1.DepartmentsService],
    })
], DepartmentsModule);


/***/ },

/***/ "./src/departments/departments.service.ts"
/*!************************************************!*\
  !*** ./src/departments/departments.service.ts ***!
  \************************************************/
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
exports.DepartmentsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_provider_1 = __webpack_require__(/*! ../database/database.provider */ "./src/database/database.provider.ts");
const mysql2_1 = __webpack_require__(/*! drizzle-orm/mysql2 */ "drizzle-orm/mysql2");
const schema = __importStar(__webpack_require__(/*! @shared/schema */ "../shared/schema.ts"));
const drizzle_orm_1 = __webpack_require__(/*! drizzle-orm */ "drizzle-orm");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
let DepartmentsService = class DepartmentsService {
    db;
    constructor(db) {
        this.db = db;
    }
    async getAllDepartments() {
        return await this.db.query.departments.findMany();
    }
    async getSpecialtiesByDepartment(departmentId) {
        return await this.db.query.specialties.findMany({
            where: (0, drizzle_orm_1.eq)(schema.specialties.departmentId, departmentId),
        });
    }
    async getAllSpecialties() {
        return await this.db.query.specialties.findMany();
    }
    async createDepartment(data) {
        console.log('Creating department:', data);
        const id = (0, uuid_1.v4)();
        try {
            await this.db.insert(schema.departments).values({
                id,
                name: data.name,
                code: data.code,
            });
            console.log('Department created with ID:', id);
            return { id, ...data };
        }
        catch (error) {
            console.error('Failed to create department:', error);
            throw error;
        }
    }
    async createSpecialty(data) {
        const id = (0, uuid_1.v4)();
        await this.db.insert(schema.specialties).values({
            id,
            name: data.name,
            departmentId: data.departmentId,
        });
        return { id, ...data };
    }
    async deleteDepartment(id) {
        await this.db.delete(schema.departments).where((0, drizzle_orm_1.eq)(schema.departments.id, id));
        return { message: 'Department deleted' };
    }
    async deleteSpecialty(id) {
        await this.db.delete(schema.specialties).where((0, drizzle_orm_1.eq)(schema.specialties.id, id));
        return { message: 'Specialty deleted' };
    }
    async updateDepartment(id, data) {
        await this.db.update(schema.departments)
            .set(data)
            .where((0, drizzle_orm_1.eq)(schema.departments.id, id));
        return { id, ...data };
    }
    async updateSpecialty(id, data) {
        await this.db.update(schema.specialties)
            .set(data)
            .where((0, drizzle_orm_1.eq)(schema.specialties.id, id));
        return { id, ...data };
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_provider_1.DRIZZLE)),
    __metadata("design:paramtypes", [typeof (_a = typeof mysql2_1.MySql2Database !== "undefined" && mysql2_1.MySql2Database) === "function" ? _a : Object])
], DepartmentsService);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    async create(data) {
        return await this.modulesService.create(data);
    }
    async update(id, data) {
        return await this.modulesService.update(id, data);
    }
    async delete(id) {
        return await this.modulesService.delete(id);
    }
};
exports.ModulesController = ModulesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "delete", null);
exports.ModulesController = ModulesController = __decorate([
    (0, common_1.Controller)('api/modules'),
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
exports.ModulesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_provider_1 = __webpack_require__(/*! ../database/database.provider */ "./src/database/database.provider.ts");
const mysql2_1 = __webpack_require__(/*! drizzle-orm/mysql2 */ "drizzle-orm/mysql2");
const schema = __importStar(__webpack_require__(/*! @shared/schema */ "../shared/schema.ts"));
const drizzle_orm_1 = __webpack_require__(/*! drizzle-orm */ "drizzle-orm");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
let ModulesService = class ModulesService {
    db;
    constructor(db) {
        this.db = db;
    }
    async findAll() {
        const modules = await this.db.query.modules.findMany();
        const relations = await this.db.query.modulesToDepartments.findMany();
        return modules.map((mod) => ({
            ...mod,
            departmentIds: relations
                .filter((r) => r.moduleId === mod.id)
                .map((r) => r.departmentId)
        }));
    }
    async create(data) {
        const id = (0, uuid_1.v4)();
        const { departmentIds, ...moduleData } = data;
        await this.db.insert(schema.modules).values({
            id,
            ...moduleData
        });
        if (departmentIds && Array.isArray(departmentIds)) {
            for (const deptId of departmentIds) {
                await this.db.insert(schema.modulesToDepartments).values({
                    moduleId: id,
                    departmentId: deptId
                });
            }
        }
        return { id, ...data };
    }
    async update(id, data) {
        const { departmentIds, ...moduleData } = data;
        await this.db.update(schema.modules)
            .set(moduleData)
            .where((0, drizzle_orm_1.eq)(schema.modules.id, id));
        if (departmentIds && Array.isArray(departmentIds)) {
            await this.db.delete(schema.modulesToDepartments)
                .where((0, drizzle_orm_1.eq)(schema.modulesToDepartments.moduleId, id));
            for (const deptId of departmentIds) {
                await this.db.insert(schema.modulesToDepartments).values({
                    moduleId: id,
                    departmentId: deptId
                });
            }
        }
        return { id, ...data };
    }
    async delete(id) {
        await this.db.delete(schema.modulesToDepartments)
            .where((0, drizzle_orm_1.eq)(schema.modulesToDepartments.moduleId, id));
        await this.db.delete(schema.modules)
            .where((0, drizzle_orm_1.eq)(schema.modules.id, id));
        return { message: 'Module deleted' };
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
    async getAllStudents() {
        return await this.studentsService.getAllStudents();
    }
    async createStudent(body) {
        return await this.studentsService.createStudent(body);
    }
    async getStudentById(id) {
        return await this.studentsService.getStudentById(id);
    }
    async deleteStudent(id) {
        return await this.studentsService.deleteStudent(id);
    }
    async getAdminGrades(id) {
        return await this.studentsService.getGrades(id);
    }
    async getAdminSchedule(id) {
        return await this.studentsService.getSchedule(id);
    }
    async getAdminPayments(id) {
        return await this.studentsService.getPayments(id);
    }
    async getAdminAbsences(id) {
        return await this.studentsService.getAbsences(id);
    }
    async getAdminClaims(id) {
        return await this.studentsService.getClaims(id);
    }
    async addGrade(id, body) {
        return await this.studentsService.addGrade(id, body);
    }
    async updateGrade(gradeId, body) {
        return await this.studentsService.updateGrade(gradeId, body);
    }
    async deleteGrade(gradeId) {
        return await this.studentsService.deleteGrade(gradeId);
    }
    async getGrade(gradeId) {
        const grade = await this.studentsService.getGradeById(gradeId);
        if (!grade)
            throw new common_1.NotFoundException('Grade not found');
        return grade;
    }
    async addSchedule(id, body) {
        return await this.studentsService.addScheduleItem(id, body);
    }
    async updateSchedule(scheduleId, body) {
        return await this.studentsService.updateScheduleItem(scheduleId, body);
    }
    async deleteSchedule(scheduleId) {
        return await this.studentsService.deleteScheduleItem(scheduleId);
    }
    async getScheduleItem(scheduleId) {
        const item = await this.studentsService.getScheduleItemById(scheduleId);
        if (!item)
            throw new common_1.NotFoundException('Schedule item not found');
        return item;
    }
    async addPayment(id, body) {
        return await this.studentsService.addPayment(id, body);
    }
    async updatePayment(paymentId, body) {
        return await this.studentsService.updatePayment(paymentId, body);
    }
    async deletePayment(paymentId) {
        return await this.studentsService.deletePayment(paymentId);
    }
    async getPayment(paymentId) {
        const payment = await this.studentsService.getPaymentById(paymentId);
        if (!payment)
            throw new common_1.NotFoundException('Payment not found');
        return payment;
    }
    async addAbsence(id, body) {
        return await this.studentsService.addAbsence(id, body);
    }
    async updateAbsence(absenceId, body) {
        return await this.studentsService.updateAbsence(absenceId, body);
    }
    async deleteAbsence(absenceId) {
        return await this.studentsService.deleteAbsence(absenceId);
    }
    async getAbsence(absenceId) {
        const absence = await this.studentsService.getAbsenceById(absenceId);
        if (!absence)
            throw new common_1.NotFoundException('Absence not found');
        return absence;
    }
    async updateClaim(claimId, body) {
        return await this.studentsService.updateClaim(claimId, body);
    }
    async deleteClaim(claimId) {
        return await this.studentsService.deleteClaim(claimId);
    }
    async getClaim(claimId) {
        const claim = await this.studentsService.getClaimById(claimId);
        if (!claim)
            throw new common_1.NotFoundException('Claim not found');
        return claim;
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
__decorate([
    (0, common_1.Get)('admin/students'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAllStudents", null);
__decorate([
    (0, common_1.Post)('admin/students'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Get)('admin/students/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getStudentById", null);
__decorate([
    (0, common_1.Delete)('admin/students/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "deleteStudent", null);
__decorate([
    (0, common_1.Get)('admin/students/:id/grades'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAdminGrades", null);
__decorate([
    (0, common_1.Get)('admin/students/:id/schedule'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAdminSchedule", null);
__decorate([
    (0, common_1.Get)('admin/students/:id/payments'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAdminPayments", null);
__decorate([
    (0, common_1.Get)('admin/students/:id/absences'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAdminAbsences", null);
__decorate([
    (0, common_1.Get)('admin/students/:id/claims'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAdminClaims", null);
__decorate([
    (0, common_1.Post)('admin/students/:id/grades'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "addGrade", null);
__decorate([
    (0, common_1.Put)('admin/grades/:gradeId'),
    __param(0, (0, common_1.Param)('gradeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "updateGrade", null);
__decorate([
    (0, common_1.Delete)('admin/grades/:gradeId'),
    __param(0, (0, common_1.Param)('gradeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "deleteGrade", null);
__decorate([
    (0, common_1.Get)('admin/grades/:gradeId'),
    __param(0, (0, common_1.Param)('gradeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getGrade", null);
__decorate([
    (0, common_1.Post)('admin/students/:id/schedule'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "addSchedule", null);
__decorate([
    (0, common_1.Put)('admin/schedule/:scheduleId'),
    __param(0, (0, common_1.Param)('scheduleId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "updateSchedule", null);
__decorate([
    (0, common_1.Delete)('admin/schedule/:scheduleId'),
    __param(0, (0, common_1.Param)('scheduleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "deleteSchedule", null);
__decorate([
    (0, common_1.Get)('admin/schedule/:scheduleId'),
    __param(0, (0, common_1.Param)('scheduleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getScheduleItem", null);
__decorate([
    (0, common_1.Post)('admin/students/:id/payments'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "addPayment", null);
__decorate([
    (0, common_1.Put)('admin/payments/:paymentId'),
    __param(0, (0, common_1.Param)('paymentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "updatePayment", null);
__decorate([
    (0, common_1.Delete)('admin/payments/:paymentId'),
    __param(0, (0, common_1.Param)('paymentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "deletePayment", null);
__decorate([
    (0, common_1.Get)('admin/payments/:paymentId'),
    __param(0, (0, common_1.Param)('paymentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getPayment", null);
__decorate([
    (0, common_1.Post)('admin/students/:id/absences'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "addAbsence", null);
__decorate([
    (0, common_1.Put)('admin/absences/:absenceId'),
    __param(0, (0, common_1.Param)('absenceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "updateAbsence", null);
__decorate([
    (0, common_1.Delete)('admin/absences/:absenceId'),
    __param(0, (0, common_1.Param)('absenceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "deleteAbsence", null);
__decorate([
    (0, common_1.Get)('admin/absences/:absenceId'),
    __param(0, (0, common_1.Param)('absenceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAbsence", null);
__decorate([
    (0, common_1.Put)('admin/claims/:claimId'),
    __param(0, (0, common_1.Param)('claimId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "updateClaim", null);
__decorate([
    (0, common_1.Delete)('admin/claims/:claimId'),
    __param(0, (0, common_1.Param)('claimId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "deleteClaim", null);
__decorate([
    (0, common_1.Get)('admin/claims/:claimId'),
    __param(0, (0, common_1.Param)('claimId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getClaim", null);
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
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
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
    async getAllStudents() {
        return await this.db.query.students.findMany();
    }
    async getStudentById(id) {
        return await this.db.query.students.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.students.id, id),
        });
    }
    async deleteStudent(id) {
        await this.db.delete(schema.students)
            .where((0, drizzle_orm_1.eq)(schema.students.id, id));
        return { message: 'Student deleted successfully' };
    }
    async createStudent(data) {
        const { email, password, name, program, level, phone, address } = data;
        const existingUser = await this.db.query.users.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.users.email, email),
        });
        if (existingUser) {
            throw new common_1.BadRequestException('User with this email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = (0, uuid_1.v4)();
        const studentId = (0, uuid_1.v4)();
        await this.db.insert(schema.users).values({
            id: userId,
            email,
            password: hashedPassword,
            role: 'etudiant',
        });
        await this.db.insert(schema.students).values({
            id: studentId,
            userId: userId,
            name: name,
            program: program || 'N/A',
            level: level || 'N/A',
            email: email,
            phone: phone || null,
            address: address || null,
            enrollmentDate: new Date().toISOString().split('T')[0],
        });
        return { message: 'Student created successfully', studentId, userId };
    }
    async addGrade(studentId, data) {
        const id = (0, uuid_1.v4)();
        await this.db.insert(schema.grades).values({
            id,
            studentId,
            ...data,
        });
        return { message: 'Grade added successfully', id };
    }
    async updateGrade(id, updates) {
        await this.db.update(schema.grades)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema.grades.id, id));
        return { message: 'Grade updated successfully' };
    }
    async getGradeById(id) {
        return await this.db.query.grades.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.grades.id, id),
        });
    }
    async deleteGrade(id) {
        await this.db.delete(schema.grades)
            .where((0, drizzle_orm_1.eq)(schema.grades.id, id));
        return { message: 'Grade deleted successfully' };
    }
    async addScheduleItem(studentId, data) {
        const id = (0, uuid_1.v4)();
        await this.db.insert(schema.schedule).values({
            id,
            studentId,
            ...data,
        });
        return { message: 'Schedule item added successfully', id };
    }
    async updateScheduleItem(id, updates) {
        await this.db.update(schema.schedule)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema.schedule.id, id));
        return { message: 'Schedule item updated successfully' };
    }
    async getScheduleItemById(id) {
        return await this.db.query.schedule.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.schedule.id, id),
        });
    }
    async deleteScheduleItem(id) {
        await this.db.delete(schema.schedule)
            .where((0, drizzle_orm_1.eq)(schema.schedule.id, id));
        return { message: 'Schedule item deleted successfully' };
    }
    async addPayment(studentId, data) {
        const id = (0, uuid_1.v4)();
        await this.db.insert(schema.payments).values({
            id,
            studentId,
            ...data,
        });
        return { message: 'Payment added successfully', id };
    }
    async updatePayment(id, updates) {
        await this.db.update(schema.payments)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema.payments.id, id));
        return { message: 'Payment updated successfully' };
    }
    async getPaymentById(id) {
        return await this.db.query.payments.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.payments.id, id),
        });
    }
    async deletePayment(id) {
        await this.db.delete(schema.payments)
            .where((0, drizzle_orm_1.eq)(schema.payments.id, id));
        return { message: 'Payment deleted successfully' };
    }
    async addAbsence(studentId, data) {
        const id = (0, uuid_1.v4)();
        await this.db.insert(schema.absences).values({
            id,
            studentId,
            ...data,
        });
        return { message: 'Absence added successfully', id };
    }
    async updateAbsence(id, updates) {
        await this.db.update(schema.absences)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema.absences.id, id));
        return { message: 'Absence updated successfully' };
    }
    async getAbsenceById(id) {
        return await this.db.query.absences.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.absences.id, id),
        });
    }
    async deleteAbsence(id) {
        await this.db.delete(schema.absences)
            .where((0, drizzle_orm_1.eq)(schema.absences.id, id));
        return { message: 'Absence deleted successfully' };
    }
    async updateClaim(id, updates) {
        await this.db.update(schema.claims)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema.claims.id, id));
        return { message: 'Claim updated successfully' };
    }
    async getClaimById(id) {
        return await this.db.query.claims.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.claims.id, id),
        });
    }
    async deleteClaim(id) {
        await this.db.delete(schema.claims)
            .where((0, drizzle_orm_1.eq)(schema.claims.id, id));
        return { message: 'Claim deleted successfully' };
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_provider_1.DRIZZLE)),
    __metadata("design:paramtypes", [typeof (_a = typeof mysql2_1.MySql2Database !== "undefined" && mysql2_1.MySql2Database) === "function" ? _a : Object])
], StudentsService);


/***/ },

/***/ "./src/teachers/teachers.controller.ts"
/*!*********************************************!*\
  !*** ./src/teachers/teachers.controller.ts ***!
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
exports.TeachersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const teachers_service_1 = __webpack_require__(/*! ./teachers.service */ "./src/teachers/teachers.service.ts");
let TeachersController = class TeachersController {
    teachersService;
    constructor(teachersService) {
        this.teachersService = teachersService;
    }
    async getAllTeachers() {
        return await this.teachersService.getAllTeachers();
    }
    async getTeacherById(id) {
        const teacher = await this.teachersService.getTeacherById(id);
        if (!teacher)
            throw new common_1.NotFoundException('Teacher not found');
        return teacher;
    }
    async createTeacher(body) {
        return await this.teachersService.createTeacher(body);
    }
    async updateTeacher(id, updates) {
        const updated = await this.teachersService.updateTeacher(id, updates);
        if (!updated)
            throw new common_1.NotFoundException('Teacher not found');
        return updated;
    }
    async deleteTeacher(id) {
        return await this.teachersService.deleteTeacher(id);
    }
    async getProfile(userId) {
        const teacher = await this.teachersService.getProfileByUserId(userId);
        if (!teacher)
            throw new common_1.NotFoundException('Teacher profile not found');
        return teacher;
    }
};
exports.TeachersController = TeachersController;
__decorate([
    (0, common_1.Get)('admin/teachers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "getAllTeachers", null);
__decorate([
    (0, common_1.Get)('admin/teachers/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "getTeacherById", null);
__decorate([
    (0, common_1.Post)('admin/teachers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "createTeacher", null);
__decorate([
    (0, common_1.Put)('admin/teachers/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "updateTeacher", null);
__decorate([
    (0, common_1.Delete)('admin/teachers/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "deleteTeacher", null);
__decorate([
    (0, common_1.Get)('teacher-profile/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeachersController.prototype, "getProfile", null);
exports.TeachersController = TeachersController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [typeof (_a = typeof teachers_service_1.TeachersService !== "undefined" && teachers_service_1.TeachersService) === "function" ? _a : Object])
], TeachersController);


/***/ },

/***/ "./src/teachers/teachers.module.ts"
/*!*****************************************!*\
  !*** ./src/teachers/teachers.module.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeachersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const teachers_service_1 = __webpack_require__(/*! ./teachers.service */ "./src/teachers/teachers.service.ts");
const teachers_controller_1 = __webpack_require__(/*! ./teachers.controller */ "./src/teachers/teachers.controller.ts");
const database_module_1 = __webpack_require__(/*! ../database/database.module */ "./src/database/database.module.ts");
let TeachersModule = class TeachersModule {
};
exports.TeachersModule = TeachersModule;
exports.TeachersModule = TeachersModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [teachers_service_1.TeachersService],
        controllers: [teachers_controller_1.TeachersController],
        exports: [teachers_service_1.TeachersService],
    })
], TeachersModule);


/***/ },

/***/ "./src/teachers/teachers.service.ts"
/*!******************************************!*\
  !*** ./src/teachers/teachers.service.ts ***!
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
exports.TeachersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_provider_1 = __webpack_require__(/*! ../database/database.provider */ "./src/database/database.provider.ts");
const mysql2_1 = __webpack_require__(/*! drizzle-orm/mysql2 */ "drizzle-orm/mysql2");
const schema = __importStar(__webpack_require__(/*! @shared/schema */ "../shared/schema.ts"));
const drizzle_orm_1 = __webpack_require__(/*! drizzle-orm */ "drizzle-orm");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
let TeachersService = class TeachersService {
    db;
    constructor(db) {
        this.db = db;
    }
    async getAllTeachers() {
        return await this.db.query.teachers.findMany();
    }
    async getTeacherById(id) {
        return await this.db.query.teachers.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.teachers.id, id),
        });
    }
    async getProfileByUserId(userId) {
        return await this.db.query.teachers.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.teachers.userId, userId),
        });
    }
    async createTeacher(data) {
        const { email, password, name, department, specialty, phone } = data;
        const existingUser = await this.db.query.users.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.users.email, email),
        });
        if (existingUser) {
            throw new common_1.BadRequestException('User with this email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = (0, uuid_1.v4)();
        const teacherId = (0, uuid_1.v4)();
        await this.db.insert(schema.users).values({
            id: userId,
            email,
            password: hashedPassword,
            role: 'enseignant',
        });
        await this.db.insert(schema.teachers).values({
            id: teacherId,
            userId: userId,
            name,
            department: department || 'N/A',
            specialty: specialty || 'N/A',
            email,
            phone: phone || null,
            status: 'Actif',
        });
        return { message: 'Teacher created successfully', teacherId, userId };
    }
    async updateTeacher(id, updates) {
        await this.db.update(schema.teachers)
            .set(updates)
            .where((0, drizzle_orm_1.eq)(schema.teachers.id, id));
        return await this.getTeacherById(id);
    }
    async deleteTeacher(id) {
        const teacher = await this.getTeacherById(id);
        if (!teacher)
            return { message: 'Teacher not found' };
        await this.db.delete(schema.teachers).where((0, drizzle_orm_1.eq)(schema.teachers.id, id));
        await this.db.delete(schema.users).where((0, drizzle_orm_1.eq)(schema.users.id, teacher.userId));
        return { message: 'Teacher and associated user deleted successfully' };
    }
};
exports.TeachersService = TeachersService;
exports.TeachersService = TeachersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_provider_1.DRIZZLE)),
    __metadata("design:paramtypes", [typeof (_a = typeof mysql2_1.MySql2Database !== "undefined" && mysql2_1.MySql2Database) === "function" ? _a : Object])
], TeachersService);


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

/***/ },

/***/ "uuid"
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
(module) {

module.exports = require("uuid");

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