import { CircleEllipsis } from "lucide-react";
import * as React from "react";
import {
  AddressSuggestions,
  DaDataAddress,
  DaDataSuggestion,
} from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import CheckoutAllAddresses from "./checkout-all-addresses";

interface ICheckoutAddressInputProps {
  onChange?: (value?: string) => void;
  label: string;
  className?: string;
  placeholder: string;
  value: string;
}

const CheckoutAddressInput: React.FunctionComponent<
  ICheckoutAddressInputProps
> = ({ onChange, label, className, placeholder, value }) => {
  console.log(value);
  // TODO: СДЕЛАТЬ ТАК, ЧТОБЫ АДРЕС ВСТАВЛЯЛСЯ В ИНПУТ ПРИ ЕГО ВЫБОРЕ
  return (
    <div className={className}>
      <label className="text-[#9e9e9e] mb-2 w-full">
        {label}
        <div className="flex w-full bg-[#f5f5f7] rounded-md">
          <AddressSuggestions
            token={process.env.NEXT_PUBLIC_TOKEN_DADATA!}
            onChange={(data) => onChange?.(value || data?.value!)}
            value={value}
            inputProps={{
              placeholder: placeholder,
              className:
                "rounded-md bg-[#f5f5f7] w-full py-[0.5rem] px-[0.75rem] placeholder:text-[#647b91] text-black",
              value: value,
            }}
          />
          <CheckoutAllAddresses onChange={(value) => onChange?.(value)}>
            <button type="button" className="pr-2">
              <CircleEllipsis />
            </button>
          </CheckoutAllAddresses>
        </div>
      </label>
    </div>
  );
};

export default CheckoutAddressInput;
