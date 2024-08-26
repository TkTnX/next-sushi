"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/cartStore";
import { Promocode } from "@prisma/client";
import * as React from "react";

interface ICheckoutPromocodeFormProps {
  promocodes: Promocode[];
  submitting?: boolean;
}

const CheckoutPromocodeForm: React.FunctionComponent<
  ICheckoutPromocodeFormProps
> = ({ promocodes, submitting }) => {
  const [value, setValue] = React.useState("");
  const setDiscout = useCartStore((state) => state.setDiscount);

  const handleSubmit = () => {
    const promocode = promocodes.find((promocode) => promocode.code === value);
    if (promocode) {
      setDiscout(promocode.discount);
    } else {
      return "Такого промокода не существует";
    }
  };

  return (
    <>
      <Input
        placeholder="Введите промокод"
        className="py-3 px-6 max-w-[214px] border-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        type="button"
        className="text-secondary bg-white rounded-xl py-4 px-6 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
        disabled={submitting}
      >
        Применить
      </Button>
    </>
  );
};

export default CheckoutPromocodeForm;
