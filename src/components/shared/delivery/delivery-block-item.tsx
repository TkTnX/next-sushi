import Image from "next/image";
import * as React from "react";

interface IDeliveryBlockItemProps {
  imageUrl: string;
  title: string;
}

const DeliveryBlockItem: React.FunctionComponent<IDeliveryBlockItemProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <div className="bg-white py-[71px] px-[24px] grid rounded-xl w-full h-full gap-3">
      <Image
        src={imageUrl}
        alt={title}
        width={54}
        height={54}
        className="justify-self-center"
      />
      <h6 className="text-center font-bold text-xl">{title}</h6>
    </div>
  );
};

export default DeliveryBlockItem;
