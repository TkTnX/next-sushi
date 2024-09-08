import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as React from "react";
import { TAddressItem } from "../profile/profile-address";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";


interface IAddAddressModalProps {
  children: React.ReactNode;
  handleAddAddress: (address: string) => void;
  addresses: TAddressItem[];
}

const AddAddressModal: React.FunctionComponent<IAddAddressModalProps> = ({
  children,
  handleAddAddress,
  addresses,
}) => {
  const [inputAddressValue, setInputAddressValue] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const onClickAddAddress = () => {
    if (
      inputAddressValue !== "" &&
      inputAddressValue.length > 5 &&
      !addresses.find((address) => address.name === inputAddressValue)
    ) {
      handleAddAddress(inputAddressValue);
      setOpen(false);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Добавить адрес</DialogTitle>

        <AddressSuggestions
          token={process.env.NEXT_PUBLIC_TOKEN_DADATA!}
          onChange={(data) => setInputAddressValue(data?.value!)}
          inputProps={{
            placeholder: "Введите адрес...",
            className:
              "rounded-md mt-2 bg-[#f5f5f7] w-full py-[0.5rem] px-[0.75rem] placeholder:text-[#647b91] text-black",
            value: inputAddressValue,
          }}
        />
        <Button onClick={onClickAddAddress} className="bg-secondary">
          Добавить адрес
        </Button>
        {error && (
          <p className="text-red-500 text-xs">
            Минимальная длина 5 символов или такой адрес уже существует
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressModal;
