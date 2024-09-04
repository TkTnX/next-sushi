import * as React from "react";
import Image from "next/image";
import { Order } from "@prisma/client";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface IProfileOrdersInfoProps {
  setOpenId: (id: number | null) => void;
  openId: number;
  order: Order;
}

const ProfileOrdersInfo: React.FunctionComponent<IProfileOrdersInfoProps> = ({
  setOpenId,
  openId,
  order,
}) => {
  const handleSetOpenMenu = (id: number) => {
    if (openId === order.id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <div className="flex items-center justify-between w-full gap-5 ">
      <div className="flex items-center w-full gap-5">
        <button
          className={cn("transition duration-200", {
            "rotate-180": openId === order.id,
          })}
          onClick={() => handleSetOpenMenu(order.id)}
        >
          <ChevronDown size={30} />
        </button>
        <div>
          <p className="text-[#9E9E9E]">
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
          <h5 className="text-bold text-2xl font-bold">#{order?.id}</h5>
        </div>
        <div className="flex items-center w-full flex-wrap gap-4">
          {typeof order.items === "string" &&
            JSON.parse(order.items).map((item: any, index: number) => (
              <div
                key={index}
                className="grid text-[#9E9E9E] bg-[#F5F5F7] rounded-full p-1"
              >
                <Image
                  src={item.productItem.imageUrl}
                  alt={item.productItem.name}
                  width={64}
                  className="justify-self-center"
                  height={64}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="max-w-max w-full flex items-center gap-6">
        <p className="text-[#9E9E9E] text-sm ">
          Кол-во <br />
          <span className="text-black font-bold block text-2xl">
            {typeof order.items === "string" && JSON.parse(order.items).length}
          </span>
        </p>
        <p className="text-[#9E9E9E] text-sm ">
          Итого <br />
          <span className="text-black font-bold block text-2xl">
            {order.totalPrice} руб
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileOrdersInfo;
