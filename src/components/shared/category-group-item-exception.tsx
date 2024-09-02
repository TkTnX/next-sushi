import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

interface ICategoryGroupItemExceptionProps {
  className?: string;
  exception: number;
}

const CategoryGroupItemException: React.FunctionComponent<ICategoryGroupItemExceptionProps> = ({className, exception}) => {
  return (
    <p className={cn("absolute  bottom-3", className)}>
      <Image
        src={`/exceptions/0${exception}.svg`}
        alt="exception"
        width={27}
        height={27}
      />
    </p>
  );
};

export default CategoryGroupItemException;
