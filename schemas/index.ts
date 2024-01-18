import * as z from "zod";

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
