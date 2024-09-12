import * as React from "react";
import { deliveryPageInfo } from "./constants";
import DeliveryBlock from "@/components/shared/delivery/delivery-block";

const Delivery: React.FunctionComponent = () => {
  return (
    <div className="max-w-[1044px] mx-auto mt-12">
      <h2 className="text-5xl font-bold">Доставка</h2>

      {deliveryPageInfo.map((item) => (
        <DeliveryBlock key={item.title} {...item} />
      ))}

      <div className=" py-[124px] ">
        <div>
          <h6 className="font-bold text-2xl md:text-4xl">О нас</h6>
          <p className="text-[#686870] text-sm md:text-base mt-4">
            Наши мастера с многолетним опытом в совершенстве овладели техниками
            разных кулинарных направлений и неизменно следуют проверенным
            временем рецептам. Приготовить кулинарный шедевр в авторском стиле
            им не составит труда, но только если вы этого пожелаете.
          </p>
        </div>
        <div className="mt-24">
          <h6 className="font-bold text-2xl md:text-4xl">
            Готовим из лучших ингредиентов
          </h6>
          <p className="text-[#686870] text-sm md:text-base mt-4">
            Визитная карточка NinjaSushi — свежесть и насыщенный вкус. Подобного
            эффекта удаётся достичь благодаря самым качественным ингредиентам,
            которые каждый день поступают на кухню от надёжных поставщиков. В
            наших правилах не экономить на объёме порций и не использовать
            замороженные продукты.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
