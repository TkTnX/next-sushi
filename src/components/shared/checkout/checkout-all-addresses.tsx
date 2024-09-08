import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAddressStore } from "@/store/addressStore";
import * as React from "react";

interface ICheckoutAllAddressesProps {
  children: React.ReactNode;
  onChange: (value: string) => void;
}

const CheckoutAllAddresses: React.FunctionComponent<
  ICheckoutAllAddressesProps
> = ({ children, onChange }) => {
  const { getAddresses, addresses } = useAddressStore();

  React.useEffect(() => {
    getAddresses();
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="p-2">
        <div className="w-full grid gap-2">
          {addresses.addressItem.map((address) => (
            <button
              onClick={() => onChange(address.name)}
              className="w-full text-left border p-2 hover:bg-[#f5f5f7] hover:opacity-80 transition duration-200 rounded-lg"
              key={address.id}
            >
              {address.name}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CheckoutAllAddresses;
