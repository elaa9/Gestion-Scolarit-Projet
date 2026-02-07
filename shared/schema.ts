import { sql } from "drizzle-orm";
import { mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  role: varchar("role", { length: 50 }).notNull(),
  resetPasswordToken: varchar("reset_password_token", { length: 255 }),
  resetPasswordExpires: varchar("reset_password_expires", { length: 255 }),
});

export const students = mysqlTable("students", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  program: varchar("program", { length: 255 }).notNull(),
  level: varchar("level", { length: 255 }).notNull(),
  average: varchar("average", { length: 50 }),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  address: text("address"),
  birthDate: varchar("birth_date", { length: 50 }),
  enrollmentDate: varchar("enrollment_date", { length: 50 }),
});

export const modules = mysqlTable("modules", {
  id: varchar("id", { length: 255 }).primaryKey(),
  code: varchar("code", { length: 50 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  coefficient: varchar("coefficient", { length: 50 }).notNull(),
  semester: varchar("semester", { length: 50 }).default("S1"),
});

export const modulesToDepartments = mysqlTable("modules_to_departments", {
  moduleId: varchar("module_id", { length: 255 }).notNull(),
  departmentId: varchar("department_id", { length: 255 }).notNull(),
});

export const grades = mysqlTable("grades", {
  id: varchar("id", { length: 255 }).primaryKey(),
  studentId: varchar("student_id", { length: 255 }).notNull(),
  moduleId: varchar("module_id", { length: 255 }).notNull(),
  grade: varchar("grade", { length: 50 }).notNull(),
  maxGrade: varchar("max_grade", { length: 50 }).default("20"),
  status: varchar("status", { length: 50 }).notNull(),
  date: varchar("date", { length: 50 }).notNull(),
});

export const schedule = mysqlTable("schedule", {
  id: varchar("id", { length: 255 }).primaryKey(),
  studentId: varchar("student_id", { length: 255 }).notNull(),
  dayOfWeek: varchar("day_of_week", { length: 50 }).notNull(),
  startTime: varchar("start_time", { length: 50 }).notNull(),
  endTime: varchar("end_time", { length: 50 }).notNull(),
  moduleId: varchar("module_id", { length: 255 }).notNull(),
  room: varchar("room", { length: 50 }).notNull(),
  professor: varchar("professor", { length: 255 }).notNull(),
  type: varchar("type", { length: 255 }).notNull(),
});

export const payments = mysqlTable("payments", {
  id: varchar("id", { length: 255 }).primaryKey(),
  studentId: varchar("student_id", { length: 255 }).notNull(),
  type: varchar("type", { length: 255 }).notNull(),
  amount: varchar("amount", { length: 50 }).notNull(),
  dueDate: varchar("due_date", { length: 50 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
  paidDate: varchar("paid_date", { length: 50 }),
});

export const absences = mysqlTable("absences", {
  id: varchar("id", { length: 255 }).primaryKey(),
  studentId: varchar("student_id", { length: 255 }).notNull(),
  moduleId: varchar("module_id", { length: 255 }).notNull(),
  date: varchar("date", { length: 50 }).notNull(),
  startTime: varchar("start_time", { length: 50 }).notNull(),
  endTime: varchar("end_time", { length: 50 }).notNull(),
  justified: varchar("justified", { length: 50 }).default("false"),
  reason: text("reason"),
});

export const claims = mysqlTable("claims", {
  id: varchar("id", { length: 255 }).primaryKey(),
  studentId: varchar("student_id", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  date: varchar("date", { length: 50 }).notNull(),
  status: varchar("status", { length: 50 }).default("En cours"),
  response: text("response"),
});

export const teachers = mysqlTable("teachers", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  department: text("department").notNull(),
  specialty: text("specialty").notNull(),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  status: varchar("status", { length: 50 }).default("Actif"),
});

export const departments = mysqlTable("departments", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  code: varchar("code", { length: 50 }).notNull(),
});

export const specialties = mysqlTable("specialties", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  departmentId: varchar("department_id", { length: 255 }).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  password: true,
  role: true,
});

export const insertStudentSchema = createInsertSchema(students);
export const insertTeacherSchema = createInsertSchema(teachers);
export const insertModuleSchema = createInsertSchema(modules);
export const insertGradeSchema = createInsertSchema(grades);
export const insertScheduleSchema = createInsertSchema(schedule);
export const insertPaymentSchema = createInsertSchema(payments);
export const insertAbsenceSchema = createInsertSchema(absences);
export const insertClaimSchema = createInsertSchema(claims);
export const insertDepartmentSchema = createInsertSchema(departments);
export const insertSpecialtySchema = createInsertSchema(specialties);
export const insertModuleDepartmentSchema = createInsertSchema(modulesToDepartments);

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Student = typeof students.$inferSelect;
export type Teacher = typeof teachers.$inferSelect;
export type Module = typeof modules.$inferSelect;
export type Grade = typeof grades.$inferSelect;
export type ScheduleItem = typeof schedule.$inferSelect;
export type Payment = typeof payments.$inferSelect;
export type Absence = typeof absences.$inferSelect;
export type Claim = typeof claims.$inferSelect;
export type Department = typeof departments.$inferSelect;
export type Specialty = typeof specialties.$inferSelect;
