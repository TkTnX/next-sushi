import { z } from "zod";

const passwordSchema = z
  .string()
  .min(4, "Пароль должен содержать не менее 4 символов");

export const loginFormSchema = z.object({
  email: z.string().email("Неверный адрес электронной почты"),
  password: passwordSchema,
});

export const registerFormSchema = loginFormSchema
  .merge(
    z.object({
      fullName: z.string().min(2, "Имя должно содержать не менее 2 символов"),
      passwordRepeat: passwordSchema,
    })
  )
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Пароли не совпадают",
    path: ["passwordRepeat"],
  });

export const changeUserFormSchema = z.object({
  fullName: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  email: z.string().email("Неверный адрес электронной почты"),
  password: z.string().optional(),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
export type RegisterFormData = z.infer<typeof registerFormSchema>;
export type ChangeUserFormData = z.infer<typeof changeUserFormSchema>;
