import {z} from "zod"

const passwordSchema = z.string().min(6, "Пароль должен содержать не менее 6 символов")

export const loginFormSchema = z.object({
    email: z.string().email("Неверный адрес электронной почты"),
    password: passwordSchema,
})

export const registerFormSchema = loginFormSchema.merge(z.object({
    fullName: z.string().min(2, "Имя должно содержать не менее 2 символов"),
    passwordRepeat: passwordSchema,
})).refine(data => data.password === data.passwordRepeat, {
    message: "Пароли не совпадают",
    path: ["passwordRepeat"],
})

export type LoginFormData = z.infer<typeof loginFormSchema>
export type RegisterFormData = z.infer<typeof registerFormSchema>