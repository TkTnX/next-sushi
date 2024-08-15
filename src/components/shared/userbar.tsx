import { Bell, Heart, User } from 'lucide-react';
import * as React from 'react';
import CartBtn from './cart-btn';


const Userbar: React.FunctionComponent = () => {
    return (
      <div className="flex items-center gap-3">
        {/* Кнопка уведомлений */}
        <button className="w-[56px] h-[56px] border border-[#d2d2d7] rounded-2xl p-4 group hover:bg-primary  hover:border-primary transition duration-200">
          <Bell className="stroke-[#686870] group-hover:stroke-white transition duration-200" size={24} />
        </button>

        {/* Кнопка favorite */}
        <button className="w-[56px] h-[56px] border border-[#d2d2d7] rounded-2xl p-4 group hover:bg-primary hover:border-primary transition duration-200">
          <Heart className="stroke-[#686870] group-hover:stroke-white transition duration-200" size={24} />
        </button>

        {/* Кнопка профиля */}
        <button className="w-[56px] h-[56px] border border-[#d2d2d7] rounded-2xl p-4 group hover:bg-primary hover:border-primary transition duration-200">
          <User className="stroke-[#686870] group-hover:stroke-white transition duration-200" size={24} />
        </button>

        {/* Кнопка корзины */}
       <CartBtn />
      </div>
    );
};

export default Userbar;
