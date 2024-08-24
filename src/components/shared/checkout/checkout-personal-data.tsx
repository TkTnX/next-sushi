import * as React from 'react';
import WhiteBox from '../white-box';
import FormInput from '@/components/ui/form-input';



const CheckoutPersonalData: React.FunctionComponent= () => {
  return (
    <WhiteBox title="Личные данные">
      <div className="grid grid-cols-2 gap-3 mt-6">
        <FormInput
          name="firstName"
          isRequired={true}
          placeholder="Имя"
          label="Имя"
          type="text"
        />
        <FormInput
          name="lastName"
          isRequired={true}
          placeholder="Фамилия"
          label="Фамилия"
          type="text"
        />
        <FormInput
          name="email"
          isRequired={true}
          placeholder="E-mail"
          label="E-mail"
          type="email"
        />
        <FormInput
          name="phone"
          isRequired={true}
          placeholder="Телефон"
          label="Телефон"
          type="tel"
        />
      </div>
    </WhiteBox>
  );
};

export default CheckoutPersonalData;
