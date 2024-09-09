import * as React from "react";
import CartDrawerItem from "../cart-drawer-item";
import CartDrawerEmpty from "../cart-drawer-empty";

import CartTotalPrice from "../cart-total-price";
import { useCart } from "@/hooks/use-cart";
import { Skeleton } from "@/components/ui/skeleton";
import CheckoutPromocode from "./checkout-promocode";

interface ICheckoutSidebar {
  submitting?: boolean;
}

const CheckoutSidebar: React.FunctionComponent<ICheckoutSidebar> = ({
  submitting,
}) => {
  const { cartState, onClickCountBtn } = useCart();
  const { items, deleteItem, totalPrice, loading, discount } = cartState;
  const MIN_TOTAL_PRICE = 400;

  return (
    <div className="mt-10 xl:mt-0 xl:min-w-[500px] 2xl:w-[778px]">
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
        <CheckoutPromocode submitting={submitting} />
        <CartTotalPrice
          submitting={submitting}
          className="bg-white rounded-xl"
          totalPrice={totalPrice - (totalPrice / 100) * discount}
          loading={loading}
          minTotalPrice={MIN_TOTAL_PRICE}
          discount={discount}
        />
        {totalPrice < MIN_TOTAL_PRICE && (
          <p className="text-primary mt-2">Минимальная сумма заказа 400 руб.</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutSidebar;
