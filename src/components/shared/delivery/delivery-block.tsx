import * as React from "react";
import DeliveryBlockItem from "./delivery-block-item";

interface IDeliveryBlockProps {
  title: string;
  subtitle: string;
  deliveryBlockItems: { imageUrl: string; title: string }[];
}

const DeliveryBlock: React.FunctionComponent<IDeliveryBlockProps> = ({
  title,
  subtitle,
  deliveryBlockItems,
}) => {
  return (
    <div className="mt-5 md:mt-28">
      <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>
      <p className="text-[#686870] mt-4">{subtitle}</p>

      <div className="flex items-center gap-5 mt-10 flex-wrap md:flex-nowrap">
        {deliveryBlockItems.map((item) => (
          <DeliveryBlockItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DeliveryBlock;
