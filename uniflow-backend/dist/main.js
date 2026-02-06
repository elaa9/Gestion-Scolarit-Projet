/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const database_module_1 = __webpack_require__(7);
const students_module_1 = __webpack_require__(14);
const auth_module_1 = __webpack_require__(18);
const modules_module_1 = __webpack_require__(22);
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
            database_module_1.DatabaseModule,
            students_module_1.StudentsModule,
            auth_module_1.AuthModule,
            modules_module_1.ModulesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.AppController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(3);
const database_provider_1 = __webpack_require__(8);
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


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const config_1 = __webpack_require__(4);
const mysql2_1 = __webpack_require__(9);
const mysql = __importStar(__webpack_require__(10));
const schema = __importStar(__webpack_require__(11));
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


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("drizzle-orm/mysql2");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.insertClaimSchema = exports.insertAbsenceSchema = exports.insertPaymentSchema = exports.insertScheduleSchema = exports.insertGradeSchema = exports.insertModuleSchema = exports.insertStudentSchema = exports.insertUserSchema = exports.claims = exports.absences = exports.payments = exports.schedule = exports.grades = exports.modules = exports.students = exports.users = void 0;
const mysql_core_1 = __webpack_require__(12);
const drizzle_zod_1 = __webpack_require__(13);
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).primaryKey(),
    email: (0, mysql_core_1.varchar)("email", { length: 255 }).notNull().unique(),
    password: (0, mysql_core_1.text)("password").notNull(),
    role: (0, mysql_core_1.varchar)("role", { length: 50 }).notNull(),
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


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("drizzle-orm/mysql-core");

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("drizzle-zod");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentsModule = void 0;
const common_1 = __webpack_require__(3);
const students_service_1 = __webpack_require__(15);
const students_controller_1 = __webpack_require__(17);
let StudentsModule = class StudentsModule {
};
exports.StudentsModule = StudentsModule;
exports.StudentsModule = StudentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [students_controller_1.StudentsController],
        providers: [students_service_1.StudentsService],
    })
], StudentsModule);


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const common_1 = __webpack_require__(3);
const database_provider_1 = __webpack_require__(8);
const mysql2_1 = __webpack_require__(9);
const schema = __importStar(__webpack_require__(11));
const drizzle_orm_1 = __webpack_require__(16);
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


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("drizzle-orm");

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const common_1 = __webpack_require__(3);
const students_service_1 = __webpack_require__(15);
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


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(19);
const auth_controller_1 = __webpack_require__(21);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
const database_provider_1 = __webpack_require__(8);
const mysql2_1 = __webpack_require__(9);
const schema = __importStar(__webpack_require__(11));
const drizzle_orm_1 = __webpack_require__(16);
const bcrypt_1 = __importDefault(__webpack_require__(20));
let AuthService = class AuthService {
    db;
    constructor(db) {
        this.db = db;
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_provider_1.DRIZZLE)),
    __metadata("design:paramtypes", [typeof (_a = typeof mysql2_1.MySql2Database !== "undefined" && mysql2_1.MySql2Database) === "function" ? _a : Object])
], AuthService);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(19);
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
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModulesModule = void 0;
const common_1 = __webpack_require__(3);
const modules_service_1 = __webpack_require__(23);
const modules_controller_1 = __webpack_require__(24);
let ModulesModule = class ModulesModule {
};
exports.ModulesModule = ModulesModule;
exports.ModulesModule = ModulesModule = __decorate([
    (0, common_1.Module)({
        controllers: [modules_controller_1.ModulesController],
        providers: [modules_service_1.ModulesService],
    })
], ModulesModule);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const common_1 = __webpack_require__(3);
const database_provider_1 = __webpack_require__(8);
const mysql2_1 = __webpack_require__(9);
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


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const common_1 = __webpack_require__(3);
const modules_service_1 = __webpack_require__(23);
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


/***/ })
/******/ 	]);
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

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

})();

/******/ })()
;