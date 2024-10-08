import * as React from "react";

interface IOrderInfoItemProps {
  title: string;
  value?: string;
}

const OrderInfoItem: React.FunctionComponent<IOrderInfoItemProps> = ({
  title,
  value,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 mt-4">
      <p className="w-full max-w-max text-[#686870] text-xs sm:text-base">
        {title}
      </p>
      <div className="w-full border-b-[#d2d2d7] border-dashed border-b mt-2 hidden sm:block " />
      <p className="w-full max-w-max text-xs sm:text-base">
        {value ?? <span className="opacity-50">нет информации</span>}
      </p>
    </div>
  );
};

export default OrderInfoItem;
