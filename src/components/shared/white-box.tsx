import * as React from 'react';

interface IWhiteBoxProps {
    title: string,
    subtitle?: string
    children: React.ReactNode
}

const WhiteBox: React.FunctionComponent<IWhiteBoxProps> = ({title, subtitle, children}) => {
    return (
      <div className="w-full p-6 bg-white rounded-xl">
        <h3 className="text-2xl font-medium">{title}</h3>
        {subtitle && <p className="text-[#686870] text-sm mt-2">{subtitle}</p>}
        {children}
      </div>
    );
};

export default WhiteBox;
