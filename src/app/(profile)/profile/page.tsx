"use client";
import ProfileAddress from "@/components/shared/profile/profile-address";
import ProfileFavorites from "@/components/shared/profile/profile-favorites";
import ProfileOrders from "@/components/shared/profile/profile-orders";
import { Tabs } from "@/components/ui/tabs";
import { Api } from "@/services/api-client";
import { useFavoriteStore } from "@/store/favoritesStore";
import { useUserStore } from "@/store/userStore";
import { Order } from "@prisma/client";
import { useSession } from "next-auth/react";
import * as React from "react";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = () => {
  const { activeCategoryId, setActiveCategoryId } = useUserStore();
  const [orders, setOrders] = React.useState<Order[]>([]);
  const { data: session } = useSession();
  const { loading, favorites } = useFavoriteStore();

  React.useEffect(() => {
    async function getOrders() {
      if (session) {
        const orders = await Api.order.getAll();
        setOrders(orders ?? []);
      }
    }
    getOrders();
  }, [session]);

  return (
    <Tabs
      onValueChange={(value) => setActiveCategoryId(Number(value))}
      className="flex-1 w-full xl:w-auto"
      value={String(activeCategoryId)}
    >
      <ProfileOrders loading={loading} orders={orders} personalValue="0" />
      <ProfileFavorites
        loading={loading}
        favorites={favorites.favoriteItem ?? []}
        personalValue="1"
      />
      <ProfileAddress personalValue="2" />
    </Tabs>
  );
};

export default Profile;
