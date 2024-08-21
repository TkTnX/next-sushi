import CategoryGroupItem from "@/components/shared/category-group-item";
import FilterGroup from "@/components/shared/filter-group";
import Types from "@/components/shared/types";
import { findProduct, ISearchParams } from "@/lib/find-product";
import { Api } from "@/services/api-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import * as React from "react";

interface ICategoryPageProps {
  params: {
    id: string;
  };
  searchParams: ISearchParams;
}

const CategoryPage: React.FunctionComponent<ICategoryPageProps> = async ({
  params: { id },
  searchParams,
}) => {
  const types = await Api.types.getAllTypes();

  const category = await findProduct(Number(id), searchParams);

  if (!category) return redirect("/");
  return (
    <div>
      <h2 className="text-6xl font-bold text-black mt-12">{category.name}</h2>

      {types && <Types types={types.data} />}

      <div>
        <FilterGroup />
      </div>

      {category.products.length > 0 ? (
        <div className="mt-8 grid grid-cols-4 gap-5 items-stretch">
          {category.products.map((product) => (
            <CategoryGroupItem
              key={product.id}
              isNeedToFilter={true}
              {...product}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white flex items-center justify-center flex-col  mx-auto max-w-max mt-8 p-5 text-center rounded-2xl">
            <Image src={"/cart/bag.svg"} width={100} height={80} alt="empty" />
            
            <h2 className="text-3xl font-bold text-black mt-12">По вашему запросу <br /> ничего не найдено</h2>
            <p className="text-[#686870] text-sm mt-4">Попробуйте изменить параметры поиска</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
