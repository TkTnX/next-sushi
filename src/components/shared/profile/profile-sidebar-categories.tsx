"use client";
import { profileSidebarItems } from "@/Prisma/constants";
import * as React from "react";
import ProfileSidebarItem from "./profile-sidebar-item";
import { useUserStore } from "@/store/userStore";
import { Tabs, TabsList } from "@/components/ui/tabs";

const ProfileSidebarCategories: React.FunctionComponent = () => {
  const { activeCategoryId, setActiveCategoryId } = useUserStore();

  return (
    <Tabs onValueChange={(value) => setActiveCategoryId(Number(value))} className="bg-inherit" value={String(activeCategoryId)}>
      <TabsList className="grid gap-3 bg-inherit">
        {profileSidebarItems.map((item, index) => (
          <ProfileSidebarItem
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            activeCategory={activeCategoryId}
            index={index}
            setActiveCategory={setActiveCategoryId}
          />
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ProfileSidebarCategories;
