import { TabsContent } from "@/components/ui/tabs";
import * as React from "react";
import ProfileStarter from "./profile-starter";
import { FavoriteItem, Favorites } from "@prisma/client";
import CategoryGroupItem from "../category-group-item";
import { IProduct } from "@/@types/product";
import { Skeleton } from "@/components/ui/skeleton";

export type TFavorites = {
  favoritesId: number;
  id: number;
  productId: number;
  productItem: IProduct;
};

interface IProfileFavoritesProps {
  personalValue: string;
  favorites: TFavorites[];
  loading: boolean;
}

const ProfileFavorites: React.FunctionComponent<IProfileFavoritesProps> = ({
  personalValue,
  favorites,
  loading,
}) => {
  return (
    <TabsContent value={personalValue} className="flex-1">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Избранное</h2>
      {loading && (
        <div className="grid grid-cols-3 gap-5">
          {[...Array(6)].map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-[573px] rounded-xl animate-pulse bg-[#c2c2c3]"
            />
          ))}
        </div>
      )}
      {favorites && favorites.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {favorites.map(({ productItem }) => (
            <CategoryGroupItem
              key={productItem.id}
              {...productItem}
            />
          ))}
        </div>
      ) : (
        !loading && (
          <ProfileStarter
            imageUrl="01.svg"
            subtitle="Вы еще ничего не добавили в избанное"
            description="Переходите в интересующую вас категорию и отмечайте понравившиеся"
          />
        )
      )}
    </TabsContent>
  );
};

export default ProfileFavorites;
