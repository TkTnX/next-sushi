import * as React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface ICheckoutAddressInputProps {
  onChange?: (value?: string) => void;
  label: string;
  className?: string;
  placeholder: string;
}

const CheckoutAddressInput: React.FunctionComponent<
  ICheckoutAddressInputProps
    > = ({ onChange, label, className, placeholder }) => {
  return (
    <div className={className}>
      <label className="text-[#9e9e9e] mb-2 w-full">
        {label}
        <AddressSuggestions
          token={process.env.NEXT_PUBLIC_TOKEN_DADATA!}
          onChange={(data) => onChange?.(data?.value)}
          inputProps={{
            placeholder: placeholder,
            className:
              "rounded-md mt-2 bg-[#f5f5f7] w-full py-[0.5rem] px-[0.75rem] placeholder:text-[#647b91] text-black",
          }}
        />
      </label>
     
    </div>
  );
};

export default CheckoutAddressInput;
