import { z } from "zod";
export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  lastName: z.string().min(2, "Фамилия должна содержать не менее 2 символов"),
  email: z.string().email("Неверный адрес электронной почты"),
  phone: z.string().min(10, "Номер должен содержать не менее 10 цифр"),
  address: z.string().min(5, "Выберите адрес из списка"),
  comment: z.string().optional(),
});

// типизация формы

export type CheckoutFormType = z.infer<typeof checkoutFormSchema>;
