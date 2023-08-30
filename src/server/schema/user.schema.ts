import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  firstname: string({ required_error: "First Name is required" }),
  lastname: string({ required_error: "Last Name is required" }),
  email: string({ required_error: "Email is required" }).email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const loginUserSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email or password"
  ),
  password: string({ required_error: "Password is required" }).min(
    8,
    "Invalid email or password"
  ),
});

export const emailCheckSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email or password"
  ),
});

export type EmailCheckInput = TypeOf<typeof emailCheckSchema>;
export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type LoginUserInput = TypeOf<typeof loginUserSchema>;
