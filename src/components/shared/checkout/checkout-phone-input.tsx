import * as React from "react";
import "react-dadata/dist/react-dadata.css";
import { IMaskInput } from "react-imask";
import ErrorMessage from "../error-message";
import { ControllerFieldState } from "react-hook-form";

interface ICheckoutPhoneInputProps {
  onChange?: (value?: any) => void;
  label: string;
  isRequired?: boolean;
  className?: string;
  fieldState: ControllerFieldState;
}

const CheckoutPhoneInput: React.FunctionComponent<ICheckoutPhoneInputProps> = ({
  onChange,
  label,
  isRequired,
  className,
  fieldState,
}) => {
  return (
    <div className={className}>
      <label>
        <p className="text-[#9e9e9e]">
          {label} {isRequired && <span className="text-[#FF6633]">*</span>}
        </p>
        <IMaskInput
          onChange={(event) =>
            onChange?.((event.target as HTMLInputElement).value)
          }
          label="Телефон"
          mask={"+7 (000) 000-00-00"}
          placeholder="+7 (___) ___-__-__"
          className="rounded-md mt-1 bg-[#f5f5f7] w-full py-[0.5rem] px-[0.75rem] placeholder:text-[#647b91] text-black h-[40px]"
        />
      </label>
      {fieldState.error?.message && (
        <ErrorMessage errorText={fieldState.error.message} />
      )}
      
    </div>
  );
};

export default CheckoutPhoneInput;
