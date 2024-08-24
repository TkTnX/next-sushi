"use client";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckoutDelivery from "@/components/shared/checkout/checkout-delivery";
import CheckoutPersonalData from "@/components/shared/checkout/checkout-personal-data";
import CheckoutSidebar from "@/components/shared/checkout/checkout-sidebar";
import * as React from "react";
import { checkoutFormSchema, CheckoutFormType } from "@/components/shared/checkout/checkout-form-schema";

const CheckoutPage: React.FunctionComponent = () => {
  const form = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
    }
  });

  const onSubmit: SubmitHandler<CheckoutFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-12">
      <h2 className="text-5xl font-bold">Оформление заказа</h2>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-6 flex items-start justify-between mb-20 gap-[153px]">
            {/* Левая часть */}
            <div className="grid gap-5 flex-1">
              <CheckoutPersonalData />

              <CheckoutDelivery />
            </div>

            {/* Правая часть */}
            <CheckoutSidebar />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckoutPage;
