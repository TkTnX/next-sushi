import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AddNewsItemFormData, editNewsItemSchema } from "../forms/schemas";
import FormInput from "@/components/ui/form-input";
import FormTextarea from "@/components/ui/form-textarea";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useDashboardStore } from "@/store/dashboardStore";

interface IEditNewsItemModalProps {
  children: React.ReactNode;
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const EditNewsItemModal: React.FunctionComponent<IEditNewsItemModalProps> = ({
  children,
  id,
  title,
  category,
  image,
  description,
}) => {
  const { getNews, loading, editNewsItem } = useDashboardStore();
  const form = useForm({
    resolver: zodResolver(editNewsItemSchema),
    defaultValues: {
      title: title || "",
      category: category || "",
      description: description || "",
      image: image || "",
    },
  });

  const onSubmit = async (data: AddNewsItemFormData, id: number) => {
    try {
      await getNews();
      editNewsItem(data, id);

      toast.success("Новость обновлена!");
    } catch (error) {
      console.log(error);
      toast.error("Не удалось обновить новость");
    } finally {
      getNews();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Редактирование новости №{id}</DialogTitle>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit((data) => onSubmit(data, id))}>
            <FormInput
              name="title"
              label="Новое название новости"
              placeholder="Название новости"
              isRequired={false}
              type="text"
            />
            <FormInput
              name="category"
              label="Новая категория"
              placeholder="Категория..."
              isRequired={false}
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
              label="Новое описание новости"
              placeholder="Описание новости"
            />
            <Button
              disabled={form.formState.isSubmitting}
              className="mt-2 w-full"
            >
              Изменить новость
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default EditNewsItemModal;
