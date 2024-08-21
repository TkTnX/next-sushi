import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import qs from "qs";
import { useFilterStore } from "@/store/filterStore";
import { exceptions } from "@/Prisma/constants";
interface IQueryParams {
  type?: string;
  exceptions?: string;
  ingredients?: number[];
}

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();



  // type
  const setSelectedType = useFilterStore((state) => state.setSelectedType);
  const selectedType = useFilterStore((state) => state.selectedType);

  // exceptions

  const selectedException = useFilterStore((state) => state.selectedException);
  const setSelectedException = useFilterStore(
    (state) => state.setSelectedException
  );

  // ingredients

  const setSelectedIngredients = useFilterStore(
    (state) => state.setSelectedIngredients
  );
  const selectedIngredients = useFilterStore(
    (state) => state.selectedIngredients
    );
    
    useEffect(() => {
        const filters = {
            type: selectedType,
            exceptions: selectedException,
            ingredients: Array.from(selectedIngredients),
        }

        const query = qs.stringify(filters, {
            arrayFormat: "comma"
        })

        router.push(`?${query}`, {scroll: false})
    }, [selectedType, selectedException, selectedIngredients, router])

  return {
    setSelectedType,
    setSelectedException,
    setSelectedIngredients,
    selectedType: Number(searchParams.get("type")) || "",
    selectedException: Number(searchParams.get("exceptions")) || "",
    selectedIngredients: (searchParams.get("ingredients") || "")
      .split(",")
      .map((id) => Number(id)) || [],
  };
};
