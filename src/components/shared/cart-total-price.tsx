import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';

interface ICartTotalPriceProps {
    totalPrice: number;
    loading?: boolean;
  className?: string;
  link?: string;
}

const CartTotalPrice: React.FunctionComponent<ICartTotalPriceProps> = ({totalPrice, loading, className, link}) => {
  return (
    <div
      className={cn(
        "py-6 px-8 bg-[#f5f5f7] flex items-center justify-between mt-10",
        className
      )}
    >
      <div className="grid gap-1">
        <p className="font-normal text-sm text-[#9e9e9e]">Итого: </p>
        <h6 className="font-bold text-3xl text-black">
          {totalPrice} <span className="text-[#686870] text-xl">руб</span>
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
          className={cn(
            "bg-secondary text-white py-4 px-6 rounded-xl hover:opacity-80",
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
