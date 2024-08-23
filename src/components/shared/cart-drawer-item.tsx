import { IProduct } from "@/@types/product";
import { X } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import CartDrawerCountBtns from "./cart-drawer-count-btns";
import { cn } from "@/lib/utils";

interface ICartDrawerItemProps {
  quantity: number;
  productItem: IProduct;
  id: number;
  disabled?: boolean;
  onClickCountBtn: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  deleteItem: (id: number) => void;
  className?: string;
}

const CartDrawerItem: React.FunctionComponent<ICartDrawerItemProps> = ({
  quantity,
  productItem,
  id,
  disabled,
  onClickCountBtn,
  deleteItem,
  className
}) => {
  if (!productItem) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-between bg-[#f5f5f7] py-3 px-5 rounded-xl relative",
        { "opacity-50 pointer-events-none": disabled },
        className
      )}
    >
      <button onClick={() => deleteItem(id)} className="group absolute -left-2">
        <X
          size={17}
          className="group-hover:text-white group-hover:bg-red-600 rounded-md transition duration-200"
        />
      </button>
      <div className="flex items-stretch gap-3">
        <Image
          src={productItem.imageUrl}
          alt={productItem.name}
          width={58}
          height={47}
        />
        <div className="grid gap-1">
          <h3 className="font-bold text-black">{productItem.name}</h3>
          <p className="text-sm text-primary">Вес: {productItem.weight} г</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-black font-bold">{productItem.price} руб</p>
        <CartDrawerCountBtns
          id={id}
          quantity={quantity}
          onClickCountBtn={onClickCountBtn}
        />
      </div>
    </div>
  );
};

export default CartDrawerItem;
