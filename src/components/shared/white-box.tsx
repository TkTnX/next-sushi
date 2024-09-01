import { cn } from '@/lib/utils';
import * as React from 'react';

interface IWhiteBoxProps {
    title?: string,
    subtitle?: string
  children: React.ReactNode,
  className?: string
}

const WhiteBox: React.FunctionComponent<IWhiteBoxProps> = ({title, subtitle, children, className}) => {
    return (
      <div className={cn("w-full p-6 bg-white rounded-xl", className)}>
        {title && <h3 className="text-2xl font-medium">{title}</h3>}
        {subtitle && <p className="text-[#686870] text-sm mt-2">{subtitle}</p>}
        {children}
      </div>
    );
};

export default WhiteBox;
