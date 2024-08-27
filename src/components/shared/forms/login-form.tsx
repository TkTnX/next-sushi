import { Button } from "@/components/ui/button";
import FormInput from "@/components/ui/form-input";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormData } from "./schemas";

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <FormProvider {...form}>
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

        <Button variant="default" className="bg-secondary text-white mt-3 py-4">
          Войти в аккаунт
        </Button>
    </FormProvider>
  );
};

export default LoginForm;
