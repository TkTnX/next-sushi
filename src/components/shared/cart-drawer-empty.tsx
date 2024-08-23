import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';



const CartDrawerEmpty: React.FunctionComponent = () => {
  return (
    <div className="grid items-center justify-center text-center gap-2 p-4">
      <Image
        className="justify-self-center"
        src={"/cart/bag.svg"}
        width={105}
        height={121}
        alt="Корзина пуста!"
      />
      <h6 className="font-bold text-2xl">В вашей корзине пока пусто</h6>
      <p className="text-[#9e9e9e]">
        Тут появятся товары, которые <br /> вы закажите
      </p>

      <Link
        className="text-secondary bg-[#F5F5F7] py-4 rounded-xl hover:bg-secondary hover:text-white transition duration-200 mt-3"
        href="#!"
      >
        История заказов
      </Link>
    </div>
  );
};

export default CartDrawerEmpty;
