"use client"
import { ShoppingBag } from 'lucide-react';
import * as React from 'react';
import CartDrawer from './cart-drawer';
import { Badge } from '../ui/badge';
import { useCartStore } from '@/store/cartStore';



const CartBtn: React.FunctionComponent = () => {
  const items = useCartStore((state) => state.items);
  return (
    <div>
      <CartDrawer>
        <button className="relative h-[56px] flex items-center gap-2 border border-[#d2d2d7] rounded-2xl p-4 text-[#686870] group hover:bg-primary hover:text-white hover:border-primary transition duration-200">
          {items.length > 0 && (
            <Badge className="absolute -left-1 h-[25px] -top-2">
              {items.length}
            </Badge>
          )}
          <p>Корзина</p>
          <ShoppingBag
            className="stroke-[#686870] group-hover:stroke-white transition duration-200"
            size={24}
          />
        </button>
      </CartDrawer>
    </div>
  );
};

export default CartBtn;
