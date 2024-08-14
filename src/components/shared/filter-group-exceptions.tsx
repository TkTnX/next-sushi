"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/store/filterStore";

type ExceptionType = {
  name: string;
  imageUrl: string;
  id: number;
};

interface IFilterGroupExceptionsProps {
  exceptions: ExceptionType[];
}

const FilterGroupExceptions: React.FunctionComponent<
  IFilterGroupExceptionsProps
> = ({ exceptions }) => {
  const selectedException = useFilterStore(state => state.selectedException)
  const setActiveException = useFilterStore(state => state.setSelectedException)
  return (
    <ul className="flex items-center gap-4 ">
      {exceptions.map((exception) => (
        <li key={exception.id}>
          <button
            onClick={() => setActiveException(exception.id)}
            className={cn(
              "flex items-center gap-2 bg-white rounded-xl py-3 px-4 text-black hover:bg-slate-100 border-2 border-white  hover:bg-opacity-80  transition duration-200",
              selectedException === exception.id && " border-primary"
            )}
          >
            <Image
              src={exception.imageUrl}
              alt={exception.name}
              width={26}
              height={26}
            />
            <span>{exception.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterGroupExceptions;
