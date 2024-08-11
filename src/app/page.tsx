import Categories from "@/components/shared/categories";
import CategoryGroup from "@/components/shared/category-group";
import { prisma } from "@/Prisma/prisma-client";
import { Api } from "@/services/api-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });


  return (
    <main>
      <Categories categories={categories} />

      {categories.filter((category) => category.products.length > 0).map(category => (

        <CategoryGroup
          key={category.id}
        title={category.name}
          link={`/category/${category.id}`}
          items={categories.flatMap((item) => item.products)}
          categoryId={category.id}
      />
      ))}
    </main>
  );
}
