import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Errore, la mail è obbligatoria" }),
  password: z.string().min(1, {
    message: "La password è obbligatoria",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Errore, la mail è obbligatoria" }),
  password: z.string().min(6, {
    message: "Richiesti almeno 6 caratteri",
  }),
  name: z.string().min(1, { message: "Il nome è obbligatorio" }),
});
