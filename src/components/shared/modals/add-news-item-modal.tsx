import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AddNewsItemFormData, addNewsItemSchema } from "../forms/schemas";
import FormInput from "@/components/ui/form-input";
import FormTextarea from "@/components/ui/form-textarea";
import toast from "react-hot-toast";
import { addNewNewsItem } from "@/app/actions";
import { Button } from "@/components/ui/button";

interface IAddNewsItemModalProps {
  children: React.ReactNode;
}

const AddNewsItemModal: React.FunctionComponent<IAddNewsItemModalProps> = ({
  children,
}) => {
  const form = useForm({
    resolver: zodResolver(addNewsItemSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      image: "",
    },
  });

  const onSubmit = async (data: AddNewsItemFormData) => {
    try {
      await addNewNewsItem(data);
      toast.success("Новость добавлена");
    } catch (error) {
      console.log(error);
      toast.error("Не удалось добавить новость");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Добавление новости</DialogTitle>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput
              name="title"
              label="Название новости"
              placeholder="Название новости"
              isRequired={true}
              type="text"
            />
            <FormInput
              name="category"
              label="Категория"
              placeholder="Категория..."
              isRequired={true}
              type="text"
            />
            <FormInput
              name="image"
              label="Ссылка на изображение"
              placeholder="Изображение"
              isRequired={false}
              type="text"
            />
            <FormTextarea
              name="description"
              label="Описание новости"
              placeholder="Описание новости"
            />
            <Button className="mt-2 w-full">Добавить новость</Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewsItemModal;
