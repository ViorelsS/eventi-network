"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Validate field

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Dati non validi!" };
  }

  return { success: "Email inviata!" };
};
