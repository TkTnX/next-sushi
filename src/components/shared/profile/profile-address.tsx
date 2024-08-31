import { TabsContent } from "@/components/ui/tabs";
import * as React from "react";
import ProfileStarter from "./profile-starter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface IProfileAddressProps {
  personalValue: string;
}

const ProfileAddress: React.FunctionComponent<IProfileAddressProps> = ({
  personalValue,
}) => {
  return (
    <TabsContent value={personalValue} className="flex-1">
      <ProfileStarter
        title="Адрес доставки"
        imageUrl="02.svg"
        subtitle="У вас нет сохраненных адресов"
              description="Переходите в интересующую вас категорию и сделайте свой первый заказ и адрес сохранится автоматически"
              endAdornment={
                 <Button className="p-4 bg-secondary text-white rounded-xl flex items-center gap-2">Новый адрес <Plus width={24} color="white" /></Button>
             } 
      />
    </TabsContent>
  );
};

export default ProfileAddress;
