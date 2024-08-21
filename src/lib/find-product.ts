import { useQueryParams } from "@/hooks/use-query-params";
import { prisma } from "@/Prisma/prisma-client";
import { useSearchParams } from "next/navigation";

export interface ISearchParams {
  type?: string;
  exceptions?: string;
  ingredients?: string;
}

export const findProduct = async (id: number, params: ISearchParams) => {
  const type = Number(params.type);
  const exceptionsId = Number(params.exceptions);
  const ingredientsArr = params.ingredients?.split(",")?.map(Number);

  const category = await prisma.category.findFirst({
    where: { id: Number(id) },
    include: {
      products: {
        orderBy: {
          price: "asc",
        },
        include: {
          type: true,
          exceptions: true,
          ingredients: true,
        },
        where: {
          ingredients: ingredientsArr
            ? {
                some: {
                  id: {
                    in: ingredientsArr,
                  },
                },
              }
            : undefined,
          type:
            type === 1
              ? undefined
              : { id: { equals: type ? Number(type) : 1 } },
          exceptions: exceptionsId
            ? {
                some: {
                  exceptionId: Number(exceptionsId),
                },
              }
            : undefined,
        },
      },
    },
  });

  return category;
};
