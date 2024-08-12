"use client";
import * as React from "react";
import { types } from "./constants";
import { cn } from "@/lib/utils";

interface ITypesProps {}

const Types: React.FunctionComponent<ITypesProps> = (props) => {
  const [activeType, setActiveType] = React.useState(1);
  return (
    <ul className="flex items-center gap-2 mt-8">
      {types.map((type) => (
        <li key={type.id}>
          <button
            onClick={() => setActiveType(type.id)}
            className={cn(
              "bg-white rounded-xl py-3 px-4 text-black hover:bg-primary hover:bg-opacity-80 hover:text-white transition duration-200",
              activeType === type.id ? "bg-primary text-white" : ""
            )}
          >
            {type.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Types;
