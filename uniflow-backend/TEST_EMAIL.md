# Email Confirmation Feature - Testing Guide

## What Was Implemented

### Backend Changes

1. **Email Template Created** (`templates/account-confirmation.hbs`)
   - Professional welcome email template
   - Includes Uniflow logo
   - Displays user credentials (email and password)
   - Provides direct login link
   - Matches the design of the password reset email

2. **Students Service** (`src/students/students.service.ts`)
   - Added `MailerService` injection
   - Modified `createStudent()` method to send confirmation email
   - Email sent after successful student account creation
   - Includes error handling (logs errors but doesn't fail the creation)

3. **Teachers Service** (`src/teachers/teachers.service.ts`)
   - Added `MailerService` injection
   - Modified `createTeacher()` method to send confirmation email
   - Email sent after successful teacher account creation
   - Includes error handling (logs errors but doesn't fail the creation)

4. **Module Updates**
   - `StudentsModule`: Added `MailerModule` import
   - `TeachersModule`: Added `MailerModule` import

## Email Content

When an admin creates a new student or teacher, the new user receives an email with:
- **Subject**: "Bienvenue chez Uniflow - Votre compte [étudiant/enseignant]"
- **Content**:
  - Welcome message with their name
  - Their email address
  - Their temporary password (the one set by admin)
  - Their role (Étudiant or Enseignant)
  - A direct link to login page
  - Security recommendation to change password on first login

## How to Test

### Option 1: With SMTP Server (Production-like)

1. Configure SMTP settings in `.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

2. Create a new student or teacher via the admin panel
3. Check the email inbox of the created user

### Option 2: Without SMTP (Development Mode)

1. Ensure `SMTP_HOST` is NOT set in `.env`
2. Create a new student or teacher via the admin panel
3. Check the backend console logs - the email will be logged there
4. Look for logs like:
   ```
   [StudentsService] Confirmation email sent to student@example.com
   ```

### Test Steps

1. **Start the backend** (if not already running):
   ```bash
   cd uniflow-backend
   npm run start:dev
   ```

2. **Login as admin** in the frontend

3. **Create a new student**:
   - Go to "Gestion des Étudiants"
   - Click "Ajouter un étudiant"
   - Fill in the form with a valid email
   - Set a password
   - Submit

4. **Create a new teacher**:
   - Go to "Gestion des Enseignants"
   - Click "Ajouter un enseignant"
   - Fill in the form with a valid email
   - Set a password
   - Submit

5. **Verify**:
   - Check the email inbox (if SMTP configured)
   - OR check backend console logs (if no SMTP)
   - Confirm the email contains correct information

## Expected Console Output (Dev Mode)

```
[StudentsService] Confirmation email sent to john.doe@example.com
```

or

```
[TeachersService] Confirmation email sent to jane.smith@example.com
```

## Error Handling

- If email sending fails, the account is still created successfully
- Errors are logged to the console but don't interrupt the creation process
- This ensures the admin workflow isn't blocked by email issues

## Email Template Variables

The template uses these Handlebars variables:
- `{{name}}` - User's full name
- `{{email}}` - User's email address
- `{{password}}` - Temporary password set by admin
- `{{role}}` - Either "Étudiant" or "Enseignant"
- `{{loginLink}}` - Direct link to login page (http://localhost:5173)

## Security Notes

- Passwords are sent in plain text in the email (as they are temporary)
- Users are advised to change their password on first login
- The email template recommends changing the password for security
- Passwords are hashed in the database (never stored in plain text)

## Future Enhancements

Potential improvements:
1. Add email verification/activation link
2. Force password change on first login
3. Send password reset link instead of password
4. Add email templates for other events (password changed, profile updated, etc.)
5. Queue emails for better performance
6. Add email delivery status tracking
