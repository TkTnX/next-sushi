import * as React from "react";
import CheckoutPromocodeForm from "./checkout-promocodes-form";

interface ICheckoutPromocodeProps {
  submitting?: boolean;
}

const CheckoutPromocode: React.FunctionComponent<ICheckoutPromocodeProps> = ({
  submitting,
}) => {
  const promocodes = [
    {
      id: 1,
      code: "TIMURTOP",
      discount: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return (
    <div className="flex items-center gap-3 mt-5">
      <CheckoutPromocodeForm promocodes={promocodes} submitting={submitting} />
    </div>
  );
};

export default CheckoutPromocode;
