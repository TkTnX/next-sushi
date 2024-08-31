import { Button } from "@/components/ui/button";
import FormInput from "@/components/ui/form-input";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterFormData, registerFormSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { registerUser } from "@/app/actions";

interface IRegisterFormProps {
  onClose: () => void;
}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = ({
  onClose,
}) => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      if (!data) {
        throw Error();
      }

      await registerUser({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        passwordRepeat: data.passwordRepeat,
      });

      toast.success("Успешная регистрация! Подтвердите свою почту", {
        icon: "✅",
      });

      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Не удалось создать аккаунт!", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="grid w-full gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormInput
          label="Имя"
          type="text"
          name="fullName"
          isRequired={true}
          placeholder="Имя"
        />
        <FormInput
          label="Почта"
          type="email"
          name="email"
          isRequired={true}
          placeholder="Почта"
        />
        <FormInput
          label="Пароль"
          type="password"
          name="password"
          isRequired={true}
          placeholder="Пароль"
        />
        <FormInput
          label="Повторите пароль"
          type="password"
          name="passwordRepeat"
          isRequired={true}
          placeholder="Повторите пароль"
        />

        <Button disabled={form.formState.isSubmitting} variant="default" className="bg-secondary text-white mt-3 py-4">
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
