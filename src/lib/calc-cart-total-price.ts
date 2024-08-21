import { ICartItem } from "@/@types/product";

export const calcTotalPrice = ({ items }: { items: any }): number => {
  const totalPrice = items.cartItems.reduce(
    (acc: number, item: ICartItem) =>
      acc + (item.productItem ? item.productItem.price * item.quantity : 0),
    0
  );
  return totalPrice;
};
