import * as React from "react";
import WhiteBox from "../white-box";
import FormInput from "@/components/ui/form-input";
import { IMaskInput } from "react-imask";
import CheckoutPhoneInput from "./checkout-phone-input";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../error-message";

const CheckoutPersonalData: React.FunctionComponent = () => {
  const { control } = useFormContext();
  return (
    <WhiteBox title="Личные данные">
      <div className="grid grid-cols-2 gap-3 mt-6">
        <FormInput
          name="firstName"
          isRequired={true}
          placeholder="Имя"
          label="Имя"
          type="text"
        />
        <FormInput
          name="lastName"
          isRequired={true}
          placeholder="Фамилия"
          label="Фамилия"
          type="text"
        />
        <FormInput
          name="email"
          isRequired={true}
          placeholder="E-mail"
          label="E-mail"
          type="email"
        />

        <Controller
          control={control}
          name="phone"
          render={({ field, fieldState }) => (
            <>
              <CheckoutPhoneInput
                onChange={field.onChange}
                label="Номер телефона"
                isRequired={true}
                fieldState={fieldState}
              />
            </>
          )}
        />
      </div>
    </WhiteBox>
  );
};

export default CheckoutPersonalData;
