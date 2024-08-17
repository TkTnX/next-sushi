import { Minus, Plus } from 'lucide-react';
import * as React from 'react';

interface ICartDrawerCountBtnsProps {
    quantity: number,
    onClickCountBtn: (id: number, quantity: number, type: "plus" | "minus") => void,
    id: number
}

const CartDrawerCountBtns: React.FunctionComponent<ICartDrawerCountBtnsProps> = ({quantity, onClickCountBtn, id}) => {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => onClickCountBtn(id, quantity, "minus")}>
        <Minus className="p-2 bg-white rounded-md w-8 h-8" />
      </button>
      <p className="text-sm text-black font-bold">{quantity}</p>
      <button onClick={() => onClickCountBtn(id, quantity, "plus")}>
        <Plus className="p-2 bg-white rounded-md w-8 h-8" />
      </button>
    </div>
  );
};

export default CartDrawerCountBtns;
