import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
import { Skeleton } from "../ui/skeleton";

interface ICartTotalPriceProps {
  submitting?: boolean;
  totalPrice: number;
  loading?: boolean;
  className?: string;
  link?: string;
  minTotalPrice?: number;
  discount?: number;
}

const CartTotalPrice: React.FunctionComponent<ICartTotalPriceProps> = ({
  submitting,
  totalPrice,
  loading,
  className,
  link,
  minTotalPrice,
  discount,
}) => {
  return (
    <div
      className={cn(
        "py-6 px-8 bg-[#f5f5f7] flex  justify-between mt-10 flex-col items-start gap-2 sm:gap-0 sm:flex-row sm:items-center",
        className
      )}
    >
      <div className="grid gap-1">
        <p className="font-normal text-sm text-[#9e9e9e]">Итого: </p>
        <h6 className="font-bold text-3xl text-black flex items-end gap-2">
          {loading ? <Skeleton className="w-[55px] h-[36px]" /> : totalPrice}{" "}
          <span className="text-[#686870] text-xl">руб</span>
          {discount !== 0 && discount && (
            <span className="text-red-500 text-xs">
              с учётом скидки {discount}%
            </span>
          )}
        </h6>
      </div>
      {link ? (
        <Link
          href={link}
          className={cn(
            "bg-secondary text-white py-4 px-6 rounded-xl hover:opacity-80",
            { "opacity-50 pointer-events-none": loading }
          )}
        >
          Оформить заказ
        </Link>
      ) : (
        <button
          disabled={
            minTotalPrice ? totalPrice < minTotalPrice || submitting : false
          }
          className={cn(
            "bg-secondary text-white py-4 px-6 rounded-xl hover:opacity-80 disabled:opacity-50 w-full sm:w-auto",
            { "opacity-50 pointer-events-none": loading }
          )}
        >
          Оформить заказ
        </button>
      )}
    </div>
  );
};

export default CartTotalPrice;
