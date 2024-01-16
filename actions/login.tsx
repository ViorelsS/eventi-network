"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // Validate field

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Dati non validi!" };
  }

  return { success: "Email inviata!" };
};
