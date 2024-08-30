import { Button } from "@/components/ui/button";
import FormInput from "@/components/ui/form-input";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormData, loginFormSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface ILoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = ({onClose}) => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      if (!data) {
        throw Error()
      }

      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      })

      if (!res?.ok) {
        throw Error()
      }

      toast.success("Успешный вход в аккаунт!", {
        icon: "✅",
      })

      onClose()
    } catch (error) {
      console.log(error)
      toast.error("Не удалось войти в аккаунт!", {
        icon: "❌",
      })
    }
  }


  return (
    <FormProvider {...form}>
      <form className="grid w-full gap-2" onSubmit={form.handleSubmit(onSubmit)}>
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

        <Button disabled={form.formState.isSubmitting} variant="default" className="bg-secondary text-white mt-3 py-4">
          Войти в аккаунт
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
