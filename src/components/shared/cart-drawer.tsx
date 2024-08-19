"use client";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import CartDrawerItem from "./cart-drawer-item";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { ICartItem } from "@/@types/product";

interface ICartDrawerProps {}

const CartDrawer: React.FunctionComponent<
  React.PropsWithChildren<ICartDrawerProps>
> = ({ children }) => {
  const { getItems, items, totalPrice, updateItemQuantity, deleteItem } = useCartStore();
  React.useEffect(() => {
    getItems();
  }, []);


  const onClickCountBtn = async (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity > 1 ? quantity - 1 : 1;

    updateItemQuantity(id, newQuantity);
  };



  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="mt-4  w-[590px] p-8 absolute right-0">
        <div>
          <h2 className="font-bold text-2xl text-black">Ваш заказ</h2>
        </div>

        <div className="mt-6 grid gap-3">
          {items.length === 0 ? (
            <div className="grid items-center justify-center text-center gap-2 p-4">
              <Image
                className="justify-self-center"
                src={"/cart/bag.svg"}
                width={105}
                height={121}
                alt="Корзина пуста!"
              />
              <h6 className="font-bold text-2xl">В вашей корзине пока пусто</h6>
              <p className="text-[#9e9e9e]">
                Тут появятся товары, которые <br /> вы закажите
              </p>

              <Link
                className="text-secondary bg-[#F5F5F7] py-4 rounded-xl hover:bg-secondary hover:text-white transition duration-200 mt-3"
                href="#!"
              >
                История заказов
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <CartDrawerItem
                productItem={item.productItem!}
                quantity={item.quantity}
                key={item.id}
                id={item.id ? item.id : 0}
                onClickCountBtn={onClickCountBtn}
                deleteItem={deleteItem}
              />
            ))
          )}
        </div>

        <div className="py-6 px-8 bg-[#f5f5f7] flex items-center justify-between mt-10">
          <div className="grid gap-1">
            <p className="font-normal text-sm text-[#9e9e9e]">Итого: </p>
            <h6 className="font-bold text-3xl text-black">
              {totalPrice} <span className="text-[#686870] text-xl">руб</span>
            </h6>
          </div>
          <button className="bg-secondary text-white py-4 px-6 rounded-xl hover:opacity-80">
            Оформить заказ
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CartDrawer;
