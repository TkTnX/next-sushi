import { Button } from '@/components/ui/button';
import FormInput from '@/components/ui/form-input';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RegisterFormData, registerFormSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';

interface IRegisterFormProps {
    onClose: () => void;
}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = ({ onClose }) => {
    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            passwordRepeat: ""
        }
    })


  return (
    <FormProvider {...form}>
      <form
        className="grid w-full gap-2"
        // onSubmit={form.handleSubmit(onSubmit)}
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
          name="password"
          isRequired={true}
          placeholder="Повторите пароль"
        />

        <Button variant="default" className="bg-secondary text-white mt-3 py-4">
          Войти в аккаунт
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
