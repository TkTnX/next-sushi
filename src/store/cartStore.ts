import { ICartItem } from "@/@types/product";
import { calcTotalPrice } from "@/lib/calc-cart-total-price";
import { prisma } from "@/Prisma/prisma-client";
import { Api } from "@/services/api-client";
import { create } from "zustand";

interface CartState {
  totalPrice: number;
  loading: boolean;
  error: boolean;
  items: ICartItem[];

  getItems: () => void;
}



export const useCartStore = create<CartState>()((set) => ({
  totalPrice: 0,
  loading: false,
  error: false,
  items: [],
  getItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();

      if (!data)
        return set({ error: true, totalPrice: 0, items: [], loading: false });

      set({
        items: data.data.cartItems,
        totalPrice: calcTotalPrice({items: data.data}),
        loading: false,
      });
    } catch (error) {
      set({ error: true });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },



}));
