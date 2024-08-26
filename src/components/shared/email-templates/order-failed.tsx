import * as React from "react";

interface Props {
  orderId: number;
  fullName: string;
}

export const OrderSuccess: React.FC<Props> = ({ orderId, fullName }) => (
  <div>
    <h1>Здравствуйте, {fullName}!</h1>
        <p>Ваш заказ No{orderId} не удалось оплатить!</p>
        <p>Вы можете попробовать снова, вернувшись на сайт!</p>
  </div>
);
