import { z } from "zod";
export const loginValidationSchema = z.object({
  email: z.string().trim().email("Enter a valid email!"),
  password: z.string().trim().min(6, "Password must be 6 characters long!"),
});
