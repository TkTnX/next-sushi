"use client";
import ProfileAddress from "@/components/shared/profile/profile-address";
import ProfileFavorites from "@/components/shared/profile/profile-favorites";
import ProfileOrders from "@/components/shared/profile/profile-orders";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useUserStore } from "@/store/userStore";
import * as React from "react";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = () => {
  const {activeCategoryId, setActiveCategoryId} = useUserStore();

  return (
    <Tabs
      onValueChange={(value) => setActiveCategoryId(Number(value))}
      className="flex-1"
      value={String(activeCategoryId)}
    >
      <ProfileOrders personalValue="0" />
      <ProfileFavorites personalValue="1" />
      <ProfileAddress personalValue="2" />
    </Tabs>
  );
};

export default Profile;
