import { Bell, Heart, ShoppingBag, User } from 'lucide-react';
import * as React from 'react';

interface IUserbarProps {
}

const Userbar: React.FunctionComponent<IUserbarProps> = () => {
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
        <button className=" h-[56px] flex items-center gap-2 border border-[#d2d2d7] rounded-2xl p-4 text-[#686870] group hover:bg-primary hover:text-white hover:border-primary transition duration-200">
          <p>Корзина</p>
          <ShoppingBag className="stroke-[#686870] group-hover:stroke-white transition duration-200" size={24} />
        </button>
      </div>
    );
};

export default Userbar;
