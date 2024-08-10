import Categories from "@/components/shared/categories";
import CategoryGroup from "@/components/shared/category-group";

export default function Home() {
  return (
    <main>
      <Categories />

      <CategoryGroup
        title="Роллы"
        link="/category/test"
        items={[
          {
            id: 1,
            name: "Гункан лосось",
            description:
              "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
            price: 200,
            imageUrl: "/products/01.png",
            weight: 40,
          },
        ]}
      />
    </main>
  );
}
