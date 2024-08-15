import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface ICartDrawerItemProps {}

const CartDrawerItem: React.FunctionComponent<ICartDrawerItemProps> = (
  props
) => {
  return (
      <div className="flex items-center justify-between bg-[#f5f5f7] py-3 px-5 rounded-xl relative">
          <button className="group absolute -left-2">
              <X size={17} className="group-hover:text-white group-hover:bg-red-600 rounded-md transition duration-200" />
          </button>
      <div className="flex items-stretch gap-3">
        <Image src={"/products/01.png"} alt="product" width={58} height={47} />
        <div className="grid gap-1">
          <h3 className="font-bold text-black">Сет #1</h3>
          <p className="text-sm text-primary">Вес: 40 г</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-black font-bold">240 руб</p>
        <div className="flex items-center gap-2">
          <button>
            <Minus className="p-2 bg-white rounded-md w-8 h-8" />
          </button>
          <p className="text-sm text-black font-bold">1</p>
          <button>
            <Plus className="p-2 bg-white rounded-md w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawerItem;
