import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ChangeUserFormData, changeUserFormSchema } from "../forms/schemas";
import FormInput from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { updateUserInformation } from "@/app/actions";
import { redirect, useRouter } from "next/navigation";

interface IProfileEditProps {
  open: boolean;
  onClose: () => void;
  name: string;
  email: string;
}

const ProfileEdit: React.FunctionComponent<IProfileEditProps> = ({
  open,
  onClose,
  name,
  email,
}) => {
  const router = useRouter();
  const form = useForm<ChangeUserFormData>({
    resolver: zodResolver(changeUserFormSchema),
    defaultValues: {
      fullName: name,
      email: email,
      password: "",
    },
  });

  const onSubmit = async (data: ChangeUserFormData) => {
    try {
      await updateUserInformation({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      toast.success("Данные пользователя обновлены", {
        icon: "✅",
      });
      onClose();
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Не удалось обновить данные пользователя", {
        icon: "🚨",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Изменение профиля</DialogTitle>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput
              label="Новое имя"
              name="fullName"
              type="text"
              isRequired={false}
              placeholder="Новое имя"
            />
            <FormInput
              label="Новая почта"
              name="email"
              type="email"
              isRequired={false}
              placeholder="Новая почта"
            />
            <FormInput
              label="Новый пароль"
              name="password"
              type="password"
              isRequired={false}
              placeholder="Новый пароль"
            />

            <Button className="mt-4 w-full" type="submit">
              Изменить данные
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEdit;
function onClose() {
  throw new Error("Function not implemented.");
}
