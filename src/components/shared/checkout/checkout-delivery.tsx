import * as React from 'react';
import WhiteBox from '../white-box';
import FormInput from '@/components/ui/form-input';
import { Textarea } from '@/components/ui/textarea';



const CheckoutDelivery: React.FunctionComponent = () => {
  return (
    <WhiteBox
      title="Доставка"
      subtitle="Зона бесплатной доставки уточняется у оператора"
    >
      <p className="text-[#9e9e9e] mt-4">Минимальная сумма заказа 400 руб.</p>
      <FormInput
        name="address"
        isRequired={true}
        placeholder="Введите адрес"
        label="Введите адрес"
        type="text"
        className="mt-10"
      />
      <div className="mt-6">
        <p className="text-[#9e9e9e]">Комментарий к заказу</p>
        <Textarea className="mt-2" cols={5} />
      </div>
    </WhiteBox>
  );
};

export default CheckoutDelivery;
