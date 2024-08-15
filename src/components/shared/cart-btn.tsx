import { ShoppingBag } from 'lucide-react';
import * as React from 'react';
import CartDrawer from './cart-drawer';



const CartBtn: React.FunctionComponent = () => {
  return (
    <div>
      <CartDrawer>
        <button className=" h-[56px] flex items-center gap-2 border border-[#d2d2d7] rounded-2xl p-4 text-[#686870] group hover:bg-primary hover:text-white hover:border-primary transition duration-200">
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
