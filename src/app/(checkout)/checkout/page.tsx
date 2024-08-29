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

const CheckoutPage: React.FunctionComponent = () => {
  const [submitting, setSubmitting] = React.useState(false);
  const loading = useCartStore((state) => state.loading);
  const form = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<CheckoutFormType> = async (data) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);
      toast.success("Заказ оформлен! Переход к оплате...", {
        icon: "🛒",
      });

      if (url) {
        window.location.href = url;
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Произошла ошибка при оформлении заказа", {
        icon: "🚨",
      });
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-5xl font-bold">Оформление заказа</h2>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-6 flex items-start justify-between mb-20 gap-[153px]">
            {/* Левая часть */}
            <div
              className={cn("grid gap-5 flex-1", {
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
