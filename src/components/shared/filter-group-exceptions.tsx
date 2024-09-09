"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/store/filterStore";
import { useSearchParams } from "next/navigation";

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
  const { selectedException, setSelectedException } = useFilterStore();
  const [loading, setLoading] = React.useState(true);
  const disabled = useFilterStore((state) => state.disabled);

  const useParams = useSearchParams()
  React.useEffect(() => {
    try {
      setLoading(true)
      if (useParams.get("exceptions")) {
        setSelectedException(Number(useParams.get("exceptions")));
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, []);

  return (
    <ul className={cn("flex items-center gap-2 mt-8 flex-wrap", {"opacity-50 pointer-events-none": disabled})}>
      {exceptions.map((exception) => (
        <li key={exception.id}>
          <button
            disabled={loading}
            onClick={() => setSelectedException(exception.id)}
            className={cn(
              "flex items-center gap-2 min-w-[100px] bg-white rounded-xl py-3 px-4 text-black hover:bg-slate-100 border-2 border-white  hover:bg-opacity-80  transition duration-200 disabled:opacity-50",
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
