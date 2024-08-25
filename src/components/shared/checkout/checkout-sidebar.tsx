"use client";
import * as React from "react";
import CartDrawerItem from "../cart-drawer-item";
import CartDrawerEmpty from "../cart-drawer-empty";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CartTotalPrice from "../cart-total-price";
import { useCart } from "@/hooks/use-cart";
import { Skeleton } from "@/components/ui/skeleton";

interface ICheckoutSidebar {
  submitting?: boolean;
}

const CheckoutSidebar: React.FunctionComponent<ICheckoutSidebar> = ({ submitting }) => {
  const { cartState, onClickCountBtn } = useCart();

  const { items, deleteItem, totalPrice, loading } = cartState;
  const MIN_TOTAL_PRICE = 400;

  return (
    <div className="w-[778px]">
      <div className="grid gap-5">
        {items.length > 0 ? (
          items.map((item) => (
            <CartDrawerItem
              key={item.id!}
              quantity={item.quantity!}
              productItem={item.productItem!}
              id={item.id!}
              disabled={item.disabled!}
              onClickCountBtn={onClickCountBtn}
              deleteItem={deleteItem}
              className="bg-white"
            />
          ))
        ) : loading ? (
          [...Array(2)].map((_, index) => (
            <Skeleton key={index} className="h-[75px] bg-white rounded-xl" />
          ))
        ) : (
          <CartDrawerEmpty />
        )}
      </div>
      <div className="mt-16">
        <div className="flex items-center gap-3">
          <Input
            placeholder="Введите промокод"
            className="py-3 px-6 max-w-[214px] border-none"
          />
          <Button
            type="button"
            className="text-secondary bg-white rounded-xl py-4 px-6 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            disabled={submitting}
            >
            Применить
          </Button>
        </div>
        <CartTotalPrice
          className="bg-white rounded-xl"
          totalPrice={totalPrice}
          loading={loading}
          minTotalPrice={MIN_TOTAL_PRICE}
        />
        {totalPrice < MIN_TOTAL_PRICE && (
          <p className="text-primary mt-2">Минимальная сумма заказа 400 руб.</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutSidebar;
