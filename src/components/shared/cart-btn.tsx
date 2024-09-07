"use client";
import { Loader, ShoppingBag } from "lucide-react";
import * as React from "react";
import CartDrawer from "./cart-drawer";
import { Badge } from "../ui/badge";
import { useCartStore } from "@/store/cartStore";

const CartBtn: React.FunctionComponent = () => {
  const [items, loading] = useCartStore((state) => [
    state.items,
    state.loading,
  ]);
  return (
    <div>
      <CartDrawer>
        {loading ? (
          <div className="xl:w-[131px] xl:h-[56px]  border border-[#d2d2d7] rounded-2xl p-4 text-[#686870] flex items-center justify-center pointer-events-none">
            <Loader className="animate-spin" />
          </div>
        ) : (
          <button className="relative xl:h-[56px] flex items-center gap-2 xl:border border-[#d2d2d7] rounded-2xl p-2 xl:p-4 text-[#686870] group hover:bg-primary hover:text-white hover:border-primary transition duration-200">
            {items.length > 0 && (
              <Badge className="absolute -left-1 xl:h-[25px] -top-3 xl:-top-2">
                {items.length}
              </Badge>
            )}
            <p className="hidden xl:block">Корзина</p>
            <ShoppingBag
              className="stroke-[#686870] group-hover:stroke-white transition duration-200"
              size={24}
            />
          </button>
        )}
      </CartDrawer>
    </div>
  );
};

export default CartBtn;
