import { IProduct } from "@/@types/product";
import { Api } from "@/services/api-client";
import { create } from "zustand";

interface CartState {
  totalPrice: number;
  loading: boolean;
  error: boolean;
  items: any[];

  getItems: () => void;
}

export const useCartStore = create<CartState>()((set) => ({
  totalPrice: 0,
  loading: false,
  error: false,
  items: [],
  getItems: async () => {
    try {
      set({ loading: true });
      const items = await Api.cart.getCart();

      if (!items)
        return set({ error: true, totalPrice: 0, items: [], loading: false });

      set({
        items: items.data.cartItems,
        totalPrice: 123,
        loading: false,
      });
    } catch (error) {
        console.log(error)
    }
  },
}));
