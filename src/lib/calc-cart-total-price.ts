import { ICartItem } from "@/@types/product";

export const calcTotalPrice = ({
  items,
}: {
  items: { cartItems: ICartItem[] };
}): number => {
  if (!items || !items.cartItems) return 0;
  const totalPrice = items.cartItems.reduce(
    (acc: number, item: ICartItem) =>
      acc + (item.productItem ? item.productItem.price * item.quantity : 0),
    0
  );
  return totalPrice;
};
