import * as React from 'react';
import OrderInfoItem from '../order-info-item';
import { Order } from '@prisma/client';
import { cn } from '@/lib/utils';

interface IOrderInfoItemsProps {
    order: Order;
    className?: string
}

const OrderInfoItems: React.FunctionComponent<IOrderInfoItemsProps> = ({order, className}) => {
  return (
    <div className={cn("flex-1", className)}>
      <h4 className="text-2xl font-bold">Информация о доставке</h4>

      <OrderInfoItem title="Адрес" value={order?.address!} />
      <OrderInfoItem title="Получатель" value={order?.fullName!} />
      <OrderInfoItem title="Телефон" value={order?.phone!} />
      <OrderInfoItem title="Email" value={order?.email!} />
      <OrderInfoItem title="Сумма заказа" value={String(order?.totalPrice)} />
      <OrderInfoItem title="Комментарий" value={order?.comment} />
    </div>
  );
};

export default OrderInfoItems;
