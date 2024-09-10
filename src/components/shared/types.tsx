"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useQueryParams } from "@/hooks/use-query-params";
import { useFilterStore } from "@/store/filterStore";



export interface ITypesProps {
  types: any[];
}

const Types: React.FunctionComponent<ITypesProps> = ({ types }) => {
  const { selectedType, setSelectedType } = useQueryParams();
  const [loading, setLoading] = React.useState(true);
  const useParams = useSearchParams();
  const disabled = useFilterStore((state) => state.disabled);
  React.useEffect(() => {
    try {
      setLoading(true)
      if (useParams.get("type")) {
        setSelectedType(Number(useParams.get("type")));
      } 
    } catch (error) {
      console.log(error)
      
    } finally {
      setLoading(false)
    }
  }, [])
  return (
    <ul
      className={cn("flex items-center gap-2 mt-8 overflow-scroll sm:overflow-auto", {
        "opacity-50 pointer-events-none": disabled,
      })}
    >
      {types.map((type) => (
        <li key={type.id}>
          <button
            disabled={loading}
            onClick={() => setSelectedType(type.id)}
            className={cn(
              "bg-white rounded-xl py-3 px-4 text-black hover:bg-primary hover:bg-opacity-80 hover:text-white transition duration-200 disabled:opacity-50",
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
