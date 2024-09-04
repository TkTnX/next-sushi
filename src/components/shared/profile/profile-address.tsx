import { TabsContent } from "@/components/ui/tabs";
import * as React from "react";
import ProfileStarter from "./profile-starter";
import { Plus } from "lucide-react";
import { Order } from "@prisma/client";
import ProfileAddressItem from "./profile-address-item";
import Link from "next/link";

interface IProfileAddressProps {
  personalValue: string;
  orders: Order[];
}

const ProfileAddress: React.FunctionComponent<IProfileAddressProps> = ({
  personalValue,
  orders,
}) => {
  const [addresses, setAddresses] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (orders.length > 0) {
      orders.map((order) => {
        setAddresses((prev) => [...prev, order.address]);
      });
    }
  }, [orders]);

  return (
    <TabsContent value={personalValue} className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-5xl font-bold">Адрес доставки</h2>

        <Link
          className="flex items-center p-3 gap-2 bg-secondary text-white rounded-xl hover:bg-primary transition duration-200"
          href="/checkout"
        >
          Новый адрес <Plus width={24} color="white" />
        </Link>
      </div>
      {addresses.length > 0 ? (
        <div className="grid gap-3">
          {addresses.map((address, index) => (
            <ProfileAddressItem key={index} name={address} />
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
