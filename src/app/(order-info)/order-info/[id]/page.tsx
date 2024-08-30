import OrderInfoItem from "@/components/shared/order-info-item";
import WhiteBox from "@/components/shared/white-box";
import { Api } from "@/services/api-client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface Props {
  params: {
    id: string;
  };
}

const OrderInfo: React.FunctionComponent<Props> = async ({ params }) => {
  const order = await Api.order.getOrder(Number(params.id));



  
  return (
    <div>
      <WhiteBox className="mt-4 py-12 px-16 flex items-start justify-between gap-[138px]">
        <h2 className="text-4xl font-bold leading-normal">
          Спасибо, <br /> ваш заказ{" "}
          <span className="bg-primary text-white rounded-xl py-1 px-2">
            #{order?.id}
          </span>{" "}
          <br />
          успешно оформлен
        </h2>

        {/* RIGHT */}

        <div className="flex-1">
          <h4 className="text-2xl font-bold">Информация о доставке</h4>

          <OrderInfoItem title="Адрес" value={order?.address!} />
          <OrderInfoItem title="Получатель" value={order?.fullName!} />
          <OrderInfoItem title="Телефон" value={order?.phone!} />
          <OrderInfoItem title="Email" value={order?.email!} />
          <OrderInfoItem
            title="Сумма заказа"
            value={String(order?.totalPrice)}
          />
          <OrderInfoItem title="Комментарий" value={order?.comment} />
        </div>
      </WhiteBox>

      <WhiteBox className="mt-4 py-12 px-16">
        <div className="flex items-center justify-between w-full gap-5">
          <div>
            <p className="text-[#9E9E9E]">{new Date(order.createdAt).toLocaleDateString()}</p>
            <h5 className="text-bold text-2xl font-bold">#{order?.id}</h5>
          </div>
          <div className="flex items-center w-full flex-wrap gap-4">
            {/* @ts-ignore */}
            {JSON.parse(order.items).map((item: any) => (
              <div key={item.productItem.id} className="grid text-[#9E9E9E]">
                <Image
                  src={item.productItem.imageUrl}
                  alt={item.productItem.name}
                  width={64}
                  className="justify-self-center"
                  height={64}
                />
                <p className="text-center">{item.productItem.name}</p>
              </div>
            ))}
          </div>
        </div>
      </WhiteBox>

      <Link
        href="/"
        className="bg-white text-secondary py-4 px-12 rounded-xl mt-6 block max-w-max mx-auto hover:opacity-50 transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default OrderInfo;
