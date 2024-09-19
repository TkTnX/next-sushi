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
import { Button } from "@/components/ui/button";
import { useDashboardStore } from "@/store/dashboardStore";

interface IAddNewsItemModalProps {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const AddNewsItemModal: React.FunctionComponent<IAddNewsItemModalProps> = ({
  children,
  openModal,
  setOpenModal,
}) => {
  const { getNews, loading, addNewsItem } = useDashboardStore();
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
      addNewsItem(data);
      toast.success("Новость добавлена");
      getNews();
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Не удалось добавить новость");
    }
  };
  return (
    <Dialog onOpenChange={setOpenModal} open={openModal}>
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
              isRequired={true}
            />
            <Button
              disabled={form.formState.isSubmitting}
              className="mt-2 w-full"
            >
              Добавить новость
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewsItemModal;
