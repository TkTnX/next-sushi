import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { TAddressItem } from "../profile/profile-address";

interface IAddAddressModalProps {
  children: React.ReactNode;
  handleAddAddress: (address: string) => void;
  addresses: TAddressItem[]
}

const AddAddressModal: React.FunctionComponent<IAddAddressModalProps> = ({
  children,
  handleAddAddress,
  addresses
}) => {
  const [inputAddressValue, setInputAddressValue] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false)
  const onClickAddAddress = () => {
    if (inputAddressValue !== "" && inputAddressValue.length > 5 && !addresses.find(address => address.name === inputAddressValue)) {
        handleAddAddress(inputAddressValue);
        setOpen(false)
    } else {
      setError(true)
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Добавить адрес</DialogTitle>

        <Input
          value={inputAddressValue}
          onChange={(e) => setInputAddressValue(e.target.value)}
          placeholder="Введите адрес..."
        />
        <Button onClick={onClickAddAddress} className="bg-secondary">
          Добавить адрес
        </Button>
        {error && <p className="text-red-500 text-xs">Минимальная длина 5 символов или такой адрес уже существует</p>}
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressModal;
