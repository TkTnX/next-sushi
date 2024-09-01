"use client";
import ProfileAddress from "@/components/shared/profile/profile-address";
import ProfileFavorites from "@/components/shared/profile/profile-favorites";
import ProfileOrders from "@/components/shared/profile/profile-orders";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Api } from "@/services/api-client";
import { useUserStore } from "@/store/userStore";
import { Order } from "@prisma/client";
import { useSession } from "next-auth/react";
import * as React from "react";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = () => {
  const { activeCategoryId, setActiveCategoryId } = useUserStore();
  const [loading, setLoading] = React.useState(true);
  const [orders, setOrders] = React.useState<Order[]>([]);
  const { data: session } = useSession();

  React.useEffect(() => {
    setLoading(true);
    async function getOrders() {
      if (session) {
        const orders = await Api.order.getAll();
        setOrders(orders ?? []);

        setLoading(false);
        return orders;
      }
    }

    getOrders();
  }, [session]);

  return (
      <Tabs
        onValueChange={(value) => setActiveCategoryId(Number(value))}
        className="flex-1"
        value={String(activeCategoryId)}
      >
        <ProfileOrders loading={loading} orders={orders} personalValue="0" />
        <ProfileFavorites personalValue="1" />
        <ProfileAddress orders={orders} personalValue="2" />
      </Tabs>
  );
};

export default Profile;
