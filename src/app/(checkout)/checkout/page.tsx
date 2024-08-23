"use client";
import CartDrawerEmpty from "@/components/shared/cart-drawer-empty";
import CartDrawerItem from "@/components/shared/cart-drawer-item";
import CartTotalPrice from "@/components/shared/cart-total-price";
import WhiteBox from "@/components/shared/white-box";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/ui/form-input";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/use-cart";
import * as React from "react";

const CheckoutPage: React.FunctionComponent = () => {
  const { cartState, onClickCountBtn } = useCart();
  const { items, deleteItem, totalPrice, loading } = cartState;
    const MIN_TOTAL_PRICE = 400;
    
  return (
    <div className="mt-12">
      <h2 className="text-5xl font-bold">Оформление заказа</h2>

      <div className="mt-6 flex items-start justify-between mb-20 gap-[153px]">
        {/* Левая часть */}
        <div className="grid gap-5 flex-1">
          <WhiteBox title="Личные данные">
            <div className="grid grid-cols-2 gap-3 mt-6">
              <FormInput
                isRequired={true}
                placeholder="Имя"
                label="Имя"
                type="text"
              />
              <FormInput
                isRequired={true}
                placeholder="Фамилия"
                label="Фамилия"
                type="text"
              />
              <FormInput
                isRequired={true}
                placeholder="E-mail"
                label="E-mail"
                type="email"
              />
              <FormInput
                isRequired={true}
                placeholder="Телефон"
                label="Телефон"
                type="tel"
              />
            </div>
          </WhiteBox>
          <WhiteBox
            title="Доставка"
            subtitle="Зона бесплатной доставки уточняется у оператора"
          >
            <p className="text-[#9e9e9e] mt-4">
              Минимальная сумма заказа 400 руб.
            </p>
            <FormInput
              isRequired={true}
              placeholder="Введите адрес"
              label="Введите адрес"
              type="text"
              className="mt-10"
            />
            <div className="mt-6">
              <p className="text-[#9e9e9e]">Комментарий к заказу</p>
              <Textarea className="mt-2" cols={5} />
            </div>
          </WhiteBox>
        </div>

        {/* Правая часть */}
        <div className="w-[778px]">
          <div className="grid gap-5">
            {items.length > 0 ? items.map((item) => (
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
            )) : <CartDrawerEmpty />}
          </div>
          <div className="mt-16">
            <div className="flex items-center gap-3">
              <Input
                placeholder="Введите промокод"
                className="py-3 px-6 max-w-[214px] border-none"
              />
              <Button className="text-secondary bg-white rounded-xl py-4 px-6">
                Применить
              </Button>
            </div>
            <CartTotalPrice
              className="bg-white rounded-xl"
              totalPrice={totalPrice}
              loading={loading}
            />
            {totalPrice < MIN_TOTAL_PRICE && (
              <p className="text-primary mt-2">Минимальная сумма заказа 400 грн</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
