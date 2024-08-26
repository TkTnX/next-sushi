import * as React from "react";

interface PayOrderProps {
  orderId: number;
  fullName: string;
  payLink: string;
  totalPrice: number;
}

export const PayOrder: React.FC<PayOrderProps> = ({
  orderId,
  fullName,
  payLink,
  totalPrice,
}) => (
  <div>
    <h1>Здравствуйте, {fullName}!</h1>
    <p>Ваш заказ No{orderId} оформлен!</p>
    <p>
      Перейдите <a href={payLink}>по ссылке</a> для оплаты заказа <br /> на
      сумму <b>{totalPrice} ₽</b>
    </p>
  </div>
);
