"use client";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckoutDelivery from "@/components/shared/checkout/checkout-delivery";
import CheckoutPersonalData from "@/components/shared/checkout/checkout-personal-data";
import CheckoutSidebar from "@/components/shared/checkout/checkout-sidebar";
import * as React from "react";
import {
  checkoutFormSchema,
  CheckoutFormType,
} from "@/components/shared/checkout/checkout-form-schema";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useNotifications } from "@/store/notificationsStore";
import { useAddressStore } from "@/store/addressStore";

const CheckoutPage: React.FunctionComponent = () => {
  const [submitting, setSubmitting] = React.useState(false);
  const { data: session } = useSession();
  const { addNewNotification } = useNotifications();
  const addNewAddress = useAddressStore((state) => state.addNewAddress);
  const loading = useCartStore((state) => state.loading);

  const firstName = session?.user.name.split(" ")[0];
  const lastName = session?.user.name.split(" ")[1];

  const form = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      email: session?.user.email || "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<CheckoutFormType> = async (data) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);
      addNewNotification(
        `Заказ на адрес ${data.address} оформлен!`,
        "Вы успешно оформили заказ 🛒"
      );
      toast.success("Заказ оформлен! Переход к оплате...", {
        icon: "🛒",
      });

      if (url) {
        window.location.href = url;
      }

      addNewAddress(data.address);
    } catch (error) {
      console.log(error);
      toast.error("Произошла ошибка при оформлении заказа", {
        icon: "🚨",
      });
      addNewNotification(
        "Произошла ошибка при оформлении заказа",
        "Не удалось создать заказ 🚨"
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl md:text-5xl font-bold">Оформление заказа</h2>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-6 xl:flex items-start justify-between mb-20 gap-10 2xl:gap-[153px]">
            {/* Левая часть */}
            <div
              className={cn("grid gap-5 flex-1 sm:min-w-96 2xl:min-w-0 xl:sticky top-5", {
                "opacity-50 pointer-events-none": loading,
              })}
            >
              <CheckoutPersonalData />

              <CheckoutDelivery />
            </div>

            {/* Правая часть */}
            <CheckoutSidebar submitting={submitting} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckoutPage;
