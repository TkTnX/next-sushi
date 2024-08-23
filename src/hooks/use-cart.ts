import { useCartStore } from "@/store/cartStore";
import { useEffect } from "react";

export const useCart = () => {
      const cartState = useCartStore(state => state);
    
      useEffect(() => {
        cartState.getItems();
      }, []);
    
    const onClickCountBtn = async (
      id: number,
      quantity: number,
      type: "plus" | "minus"
    ) => {
      const newQuantity =
        type === "plus" ? quantity + 1 : quantity > 1 ? quantity - 1 : 1;

      cartState.updateItemQuantity(id, newQuantity);
    };

    
    return { cartState, onClickCountBtn };
}