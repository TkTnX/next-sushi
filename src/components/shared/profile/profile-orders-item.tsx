import Image from "next/image";
import * as React from "react";

interface IProfileOrdersItemProps {
  imageUrl: string;
  title: string;
  weight: number;
  price: number;
  quantity: number;
}

const ProfileOrdersItem: React.FunctionComponent<IProfileOrdersItemProps> = ({
  imageUrl,
  title,
  weight,
  price,
  quantity,
}) => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-6">
        <Image src={imageUrl} alt={title} width={64} height={64} />
        <div className="grid gap-1">
          <h5 className="font-semibold">{title}</h5>
          <p className="text-primary text-sm-">Вес: {weight} г</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-[#9E9E9E] text-xs ">
          Итого <br />
          <span className="text-black font-bold block text-lg">
            {price} руб
          </span>
        </p>
        <p className="text-[#9E9E9E] text-xs ">
          Кол-во <br />
          <span className="text-black font-bold block text-lg">
            {quantity}
          </span>
        </p>
        <p className="text-[#9E9E9E] text-xs ">
          Итого <br />
          <span className="text-black font-bold block text-lg">
            {price * quantity} руб
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileOrdersItem;
