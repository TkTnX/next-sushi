import { TabsContent } from "@/components/ui/tabs";
import * as React from "react";
import ProfileStarter from "./profile-starter";
import { Plus } from "lucide-react";
import ProfileAddressItem from "./profile-address-item";
import { Api } from "@/services/api-client";
import { Button } from "@/components/ui/button";

interface IProfileAddressProps {
  personalValue: string;
}

type TAddressItem = {
  id: number;
  name: string;
};

type TUserAddresses = {
  id: number;
  userId: number;
  addressItem: TAddressItem[];
};

const ProfileAddress: React.FunctionComponent<IProfileAddressProps> = ({
  personalValue,
}) => {
  const [addresses, setAddresses] = React.useState<TUserAddresses>({
    id: 0,
    userId: 0,
    addressItem: [],
  });

  // TODO: ПЕРЕНЕСТИ ЭТИ ФУНКЦИИ В ZUSTAND
  React.useEffect(() => {
    async function getAddresses() {
      try {
        const addresses = await Api.addresses.getAddresses();

        setAddresses(addresses);
      } catch (error) {
        console.log(error);
      }
    }
    getAddresses();
  }, []);

  const handleAddAddress = async () => {
    try {
      // TODO: ПЕРЕДАВАТЬ НЕ СТАТИЧНЫЙ АДРЕС

      const newAddress = await Api.addresses.addAddress("test address");

      setAddresses(newAddress);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAddress = async () => {
    try {
      // TODO: ПЕРЕДАВАТЬ НЕ СТАТИЧНЫЙ ID

      const newAddress = await Api.addresses.deleteAddress(2);

      setAddresses(newAddress);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(addresses);

  return (
    <TabsContent value={personalValue} className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-5xl font-bold">Адрес доставки</h2>

        <Button
          onClick={handleAddAddress}
          className="flex items-center p-3 gap-2 bg-secondary text-white rounded-xl hover:bg-primary transition duration-200"
        >
          Новый адрес <Plus width={24} color="white" />
        </Button>
      </div>
      {addresses.addressItem.length > 0 ? (
        <div className="grid gap-3">
          {addresses.addressItem.map((address) => (
            <ProfileAddressItem
              handleDeleteAddress={handleDeleteAddress}
              key={address.id}
              name={address.name}
            />
          ))}
        </div>
      ) : (
        <ProfileStarter
          imageUrl="02.svg"
          subtitle="У вас нет сохраненных адресов"
          description="Переходите в интересующую вас категорию и сделайте свой первый заказ и адрес сохранится автоматически"
        />
      )}
    </TabsContent>
  );
};

export default ProfileAddress;
