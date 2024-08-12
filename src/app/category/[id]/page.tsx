
import CategoryGroupItem from "@/components/shared/category-group-item";
import FilterGroup from "@/components/shared/filter-group";
import Types from "@/components/shared/types";
import { prisma } from "@/Prisma/prisma-client";
import { redirect } from "next/navigation";
import * as React from "react";

interface ICategoryPageProps {
  params: {
    id: string;
  };
}

const CategoryPage: React.FunctionComponent<ICategoryPageProps> = async ({
  params: { id },
}) => {
  const category = await prisma.category.findFirst({
    where: { id: Number(id) },
    include: {
      products: {
        include: {
          type: true,
          exceptions: true,
          ingredients: true,
      }
    } },
  });

  if (!category) return redirect("/");


    return (
      <div>
        <h2 className="text-6xl font-bold text-black mt-12">{category.name}</h2>

        <Types />

        <div>
          <FilterGroup />
        </div>

        <div className="mt-8 grid grid-cols-4 gap-5 items-stretch">
          {category.products.map((product) => (
            <CategoryGroupItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    );
};

export default CategoryPage;
