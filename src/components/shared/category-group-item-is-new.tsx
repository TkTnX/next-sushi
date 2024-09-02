import { cn } from "@/lib/utils";
import * as React from "react";

interface ICategoryGroupItemIsNewProps {
    className?: string
}

const CategoryGroupItemIsNew: React.FunctionComponent<ICategoryGroupItemIsNewProps> = ({className}) => {
  return (
    <p
      className={cn(
        "absolute bg-[#ccf5d5] text-[#00cc2d] text-lg py-1 px-2 rounded-md", className
      )}
    >
      New
    </p>
  );
};

export default CategoryGroupItemIsNew;
