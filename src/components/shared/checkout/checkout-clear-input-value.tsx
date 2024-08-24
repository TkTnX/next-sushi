import { X } from 'lucide-react';
import * as React from 'react';

interface ICheckoutClearInputValueProps {
    setValue: (name: string, value: any, options?: any) => void;
    name: string
}

const CheckoutClearInputValue: React.FunctionComponent<ICheckoutClearInputValueProps> = ({setValue, name}) => {
  return (
    <button type='button'>
      <X
        size={20}
        onClick={() => setValue(name, "", { shouldValidate: true })}
        className="cursor-pointer mr-3"
      />
    </button>
  );
};

export default CheckoutClearInputValue;
