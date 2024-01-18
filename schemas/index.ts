import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    { message: "New password is required!", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    { message: "Old password is required!", path: ["password"] }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Richiesti almeno 6 caratteri" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Errore, la mail è obbligatoria" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Errore, la mail è obbligatoria" }),
  password: z.string().min(1, {
    message: "La password è obbligatoria",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Errore, la mail è obbligatoria" }),
  password: z.string().min(6, {
    message: "Richiesti almeno 6 caratteri",
  }),
  name: z.string().min(1, { message: "Il nome è obbligatorio" }),
});
