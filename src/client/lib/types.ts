import { loginSchema, checkEmailSchema, registerSchema } from "./schema/user";
import { TypeOf } from "zod";
import { ChangeEventHandler } from "react";

export type IUser = {
  _id: string;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  updatedAt: string;
  createdAt: string;
};

export type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  show?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>; // Define the specific type here
};
export type LoadingButtonProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

export type SpinnerProps = {
  width?: number;
  height?: number;
  color?: string;
  bgColor?: string;
};

export type LoginInput = TypeOf<typeof loginSchema>;
export type EmailInput = TypeOf<typeof checkEmailSchema>;
export type RegisterInput = TypeOf<typeof registerSchema>;
