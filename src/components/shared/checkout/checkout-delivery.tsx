import * as React from "react";
import WhiteBox from "../white-box";
import FormTextarea from "@/components/ui/form-textarea";
import CheckoutAddressInput from "./checkout-address-input";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../error-message";

const CheckoutDelivery: React.FunctionComponent = () => {
  const { control } = useFormContext();
  return (
    <WhiteBox
      title="Доставка"
      subtitle="Зона бесплатной доставки уточняется у оператора"
    >
      <p className="text-[#9e9e9e] mt-4">Минимальная сумма заказа 400 руб.</p>

      <Controller
        control={control}
        name="address"
        render={({ field, fieldState }) => (
          <>
            <CheckoutAddressInput
              onChange={field.onChange}
              label="Введите адрес"
              placeholder="Ваш адрес"
              className="mt-10"
            />
            {fieldState.error?.message && (
              <ErrorMessage errorText={fieldState.error.message} />
            )}
          </>
        )}
      />

      <div className="mt-6">
        <p className="text-[#9e9e9e]">Комментарий к заказу</p>
        <FormTextarea
          className="mt-2"
          placeholder={"Комментарий к заказу"}
          name={"comment"}
        />
      </div>
    </WhiteBox>
  );
};

export default CheckoutDelivery;
