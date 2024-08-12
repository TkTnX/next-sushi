"use client";
import * as React from "react";
import { exceptions } from "./constants";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IFilterGroupExceptionsProps {}

const FilterGroupExceptions: React.FunctionComponent<
  IFilterGroupExceptionsProps
> = () => {
  const [activeException, setActiveException] = React.useState(0);
  return (
    <ul className="flex items-center gap-4 ">
      {exceptions.map((exception, index) => (
        <li key={index}>
          <button
            onClick={() => setActiveException(index)}
            className={cn(
              "flex items-center gap-2 bg-white rounded-xl py-3 px-4 text-black hover:bg-slate-100 border-2 border-white  hover:bg-opacity-80  transition duration-200",
              activeException === index && " border-primary"
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
