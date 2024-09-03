import { TabsContent } from "@/components/ui/tabs";
import * as React from "react";
import ProfileStarter from "./profile-starter";
import { FavoriteItem, Favorites } from "@prisma/client";
import CategoryGroupItem from "../category-group-item";
import { IProduct } from "@/@types/product";

type TFavorites = {
  favoritesId: number;
  id: number;
  productId: number;
  productItem: IProduct;
};

interface IProfileFavoritesProps {
  personalValue: string;
  favorites: TFavorites[];
}

const ProfileFavorites: React.FunctionComponent<IProfileFavoritesProps> = ({
  personalValue,
  favorites,
}) => {
  console.log(favorites)
  return (
    <TabsContent value={personalValue} className="flex-1">
      <h2 className="text-5xl font-bold mb-6">Избранное</h2>
      {favorites && favorites.length > 0 ? (
        <div className="grid grid-cols-3 gap-5">
          {favorites.length > 0 &&
            favorites.map(({ productItem }) => (
              <CategoryGroupItem key={productItem.id} {...productItem} isFavorite={true} />
            ))}
        </div>
      ) : (
        <ProfileStarter
          imageUrl="01.svg"
          subtitle="Вы еще ничего не добавили в избанное"
          description="Переходите в интересующую вас категорию и отмечайте понравившиеся"
        />
      )}
    </TabsContent>
  );
};

export default ProfileFavorites;
