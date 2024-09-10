import ProductCategorySlider from "@/components/shared/product/product-category-slider";
import ProductInformation from "@/components/shared/product/product-information";
import { findProduct } from "@/lib/find-product";
import { Api } from "@/services/api-client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import * as React from "react";

interface IProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FunctionComponent<IProductPageProps> = async ({
  params,
}) => {
  const product = await Api.products.getProductById(Number(params.id));
  if (!product || !product.id) return redirect("/");
  const category = await findProduct(product.categoryId, {
    type: "1",
    exceptions: "0",
  });

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row items-start gap-20 relative">
        <div className="absolute left-0 right-0 top-20 md:top-1/2 -translate-y-1/2 flex items-center justify-between max-w-[1576px] mx-auto">
          <Link
            href={`/products/${Number(params.id) - 1}`}
            className="h-[50px] md:h-[162px] px-9 bg-[#ebebec]/70 rounded-xl flex items-center justify-center hover:opacity-50 transition duration-200"
          >
            <ChevronLeft />
          </Link>
          <Link
            href={`/products/${Number(params.id) + 1}`}
            className="h-[50px] md:h-[162px] px-9 bg-[#ebebec]/70 rounded-xl flex items-center justify-center hover:opacity-50 transition duration-200"
          >
            <ChevronRight />
          </Link>
        </div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={645}
          height={416}
        />
        <ProductInformation product={product} />
      </div>
      <div className="mt-20">
        <h2 className=" text-2xl md:text-4xl font-bold text-black mt-12">
          Может, ещё кое-что?
        </h2>
        {category && (
          <ProductCategorySlider
            category={category}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
