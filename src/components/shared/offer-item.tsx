import * as React from 'react';

interface IOfferItemProps {
    title: string,
    text: string
}

const OfferItem: React.FunctionComponent<IOfferItemProps> = ({title, text}) => {
    return <div className='mt-8'>
        <h4 className='text-3xl'>{title}</h4>
        <p className='mt-6' style={{lineHeight: '30px'}}>{text}</p>
  </div>;
};

export default OfferItem;
