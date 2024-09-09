import { CircleEllipsis } from "lucide-react";
import * as React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import CheckoutAllAddresses from "./checkout-all-addresses";
import { useAddressStore } from "@/store/addressStore";

interface ICheckoutAddressInputProps {
  onChange?: (value?: string) => void;
  label: string;
  className?: string;
  placeholder: string;
}

const CheckoutAddressInput: React.FunctionComponent<
  ICheckoutAddressInputProps
> = ({ onChange, label, className, placeholder }) => {
  const { addresses, getAddresses } = useAddressStore();
  const [selectedValue, setSelectedValue] = React.useState<string>("");
  const selectRef = React.useRef<HTMLSelectElement>(null);
  const measureRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    getAddresses();
  }, []);

  const adjustWidth = () => {
    if (measureRef.current && selectRef.current) {
      const measureElement = measureRef.current;
      const selectElement = selectRef.current;

      measureElement.textContent = selectedValue || "";

      selectElement.style.width = `${measureElement.offsetWidth}px`; 
    }
  };

  React.useEffect(() => {
    adjustWidth(); 
  }, [selectedValue]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    onChange?.(newValue);
  };
  return (
    <div className={className}>
      <label className="text-[#9e9e9e] mb-2 w-full">
        {label}
        <div className="flex w-full bg-[#f5f5f7] rounded-md">
          <span
            ref={measureRef}
            style={{
              visibility: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
            }}
          ></span>
          {selectedValue === "hidden" && (
            <AddressSuggestions
              token={process.env.NEXT_PUBLIC_TOKEN_DADATA!}
              onChange={(data) => onChange?.(data?.value)}
              inputProps={{
                placeholder: placeholder,
                className:
                  "rounded-md bg-[#f5f5f7] w-full py-[0.5rem] px-[0.75rem] placeholder:text-[#647b91] text-black",
              }}
            />
          )}
          {addresses && addresses.addressItem.length > 0 && (
            <select
              ref={selectRef}
              onChange={handleSelectChange}
              defaultValue={"hidden"}
              value={selectedValue}
              className="max-w-max h-10 bg-[#f5f5f7] pl-2"
              style={{ width: "auto" }}
            >
              <option value="hidden" selected></option>
              {addresses.addressItem.map((address) => (
                <option key={address.id} value={address.name}>
                  {address.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </label>
    </div>
  );
};

export default CheckoutAddressInput;
