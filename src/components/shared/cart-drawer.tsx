"use client";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import CartDrawerItem from "./cart-drawer-item";
import { useCart } from "@/hooks/use-cart";
import CartTotalPrice from "./cart-total-price";
import CartDrawerEmpty from "./cart-drawer-empty";

interface ICartDrawerProps {}

const CartDrawer: React.FunctionComponent<
  React.PropsWithChildren<ICartDrawerProps>
> = ({ children }) => {
 const {cartState, onClickCountBtn } = useCart();

  const { items, totalPrice, deleteItem, loading } = cartState;

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="mt-4 w-[320px] sm:w-[590px] p-8 absolute -right-20 sm:right-0">
        <div>
          <h2 className="font-bold text-2xl text-black">Ваш заказ</h2>
        </div>

        <div className="mt-6 grid gap-3">
          {items.length === 0 ? (
            <CartDrawerEmpty />
          ) : (
            <>
              {items.map((item) => (
                <CartDrawerItem
                  productItem={item.productItem!}
                  quantity={item.quantity}
                  key={item.id}
                  disabled={item.disabled}
                  id={item.id ? item.id : 0}
                  onClickCountBtn={onClickCountBtn}
                  deleteItem={deleteItem}
                />
              ))}
            <CartTotalPrice totalPrice={totalPrice} loading={loading} link={"/checkout"} />
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CartDrawer;
