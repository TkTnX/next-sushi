import { TabsContent } from "@/components/ui/tabs";
import * as React from "react";
import ProfileStarter from "./profile-starter";

interface IProfileFavoritesProps {
  personalValue: string;
}

const ProfileFavorites: React.FunctionComponent<IProfileFavoritesProps> = ({
  personalValue,
}) => {

  return (
    <TabsContent value={personalValue} className="flex-1">
      <ProfileStarter
        title="Избранные товары"
        imageUrl="01.svg"
        subtitle="Вы еще ничего не добавили в избанное"
        description="Переходите в интересующую вас категорию и отмечайте понравившиеся"
      />
    </TabsContent>
  );
};

export default ProfileFavorites;
