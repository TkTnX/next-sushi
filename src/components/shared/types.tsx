"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/store/filterStore";


export interface ITypesProps {
  types: any[];
}

const Types: React.FunctionComponent<ITypesProps> = ({ types }) => {
  const setSelectedType = useFilterStore((state) => state.setSelectedType);
  const selectedType = useFilterStore((state) => state.selectedType);
  return (
    <ul className="flex items-center gap-2 mt-8">
      {types.map((type) => (
        <li key={type.id}>
          <button
            onClick={() => setSelectedType(type.id)}
            className={cn(
              "bg-white rounded-xl py-3 px-4 text-black hover:bg-primary hover:bg-opacity-80 hover:text-white transition duration-200",
              selectedType === type.id ? "bg-primary text-white" : ""
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
