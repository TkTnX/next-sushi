import { TabsContent } from "@/components/ui/tabs";
import * as React from "react";
import ProfileStarter from "./profile-starter";
import { Plus } from "lucide-react";
import ProfileAddressItem from "./profile-address-item";
import { Api } from "@/services/api-client";
import { Button } from "@/components/ui/button";
import AddAddressModal from "../modals/add-address-modal";
import { useAddressStore } from "@/store/addressStore";
import { Skeleton } from "@/components/ui/skeleton";

interface IProfileAddressProps {
  personalValue: string;
}

export type TAddressItem = {
  id: number;
  name: string;
};

export type TUserAddresses = {
  id: number;
  userId: number;
  addressItem: TAddressItem[];
  error?: boolean;
};

const ProfileAddress: React.FunctionComponent<IProfileAddressProps> = ({
  personalValue,
}) => {
  const {
    addresses,
    loading,
    getAddresses,
    addNewAddress,
    deleteAddress,
  } = useAddressStore();

  React.useEffect(() => {
    getAddresses();
  }, []);

  const handleAddAddress = async (address: string) => {
    addNewAddress(address);
  };

  const handleDeleteAddress = async (id: number) => {
    deleteAddress(id);
  };

  return (
    <TabsContent value={personalValue} className="flex-1">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:items-center justify-between mb-6">
        <h2 className="text-3xl md:text-5xl font-bold">Адрес доставки</h2>

        <AddAddressModal addresses={addresses.addressItem} handleAddAddress={handleAddAddress}>
          <Button className="flex items-center p-3 gap-2 bg-secondary text-white rounded-xl hover:bg-primary transition duration-200">
            Новый адрес <Plus width={24} color="white" />
          </Button>
        </AddAddressModal>
      </div>

      <div className="grid gap-3">
  
        {loading &&
          [...new Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-[80px] rounded-xl animate-pulse bg-[#c2c2c3]"
            />
          ))}
      </div>
      {!loading && addresses.addressItem.length > 0 ? (
        <div className="grid gap-3">
          {addresses.addressItem.map((address) => (
            <ProfileAddressItem
              handleDeleteAddress={() => handleDeleteAddress(address.id)}
              key={address.id}
              name={address.name}
            />
          ))}
        </div>
      ) : (
        !loading && (
          <ProfileStarter
            imageUrl="02.svg"
            subtitle="У вас нет сохраненных адресов"
            description="Переходите в интересующую вас категорию и сделайте свой первый заказ и адрес сохранится автоматически"
          />
        )
      )}
    </TabsContent>
  );
};

export default ProfileAddress;
