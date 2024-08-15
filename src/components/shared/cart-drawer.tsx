import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import CartDrawerItem from './cart-drawer-item';


interface ICartDrawerProps {
    
}

const CartDrawer: React.FunctionComponent<
  React.PropsWithChildren<ICartDrawerProps>
> = ({ children }) => {
    return (
      <Popover>
        <PopoverTrigger asChild>{children}</PopoverTrigger>
        <PopoverContent className="mt-4  w-[590px] p-8 absolute right-0">
          <div>
            <h2 className="font-bold text-2xl text-black">Ваш заказ</h2>
          </div>

          <div className="mt-6 grid gap-3">
            <CartDrawerItem />
            <CartDrawerItem />
            <CartDrawerItem />
            <CartDrawerItem />
            <CartDrawerItem />
          </div>

          <div className="py-6 px-8 bg-[#f5f5f7] flex items-center justify-between mt-10">
            <div className="grid gap-1">
              <p className="font-normal text-sm text-[#9e9e9e]">Итого: </p>
              <h6 className="font-bold text-3xl text-black">
                240 <span className="text-[#686870] text-xl">руб</span>
              </h6>
                    </div>
                    <button className='bg-secondary text-white py-4 px-6 rounded-xl hover:opacity-80'>Оформить заказ</button>
          </div>
        </PopoverContent>
      </Popover>
    );
};

export default CartDrawer;
