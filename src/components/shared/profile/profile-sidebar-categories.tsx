"use client";
import { profileSidebarItems } from "@/Prisma/constants";
import * as React from "react";
import ProfileSidebarItem from "./profile-sidebar-item";

interface ProfileSidebarCategoriesProps {}

const ProfileSidebarCategories: React.FunctionComponent<ProfileSidebarCategoriesProps> = (props) => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <div className="grid gap-3">
      {profileSidebarItems.map((item, index) => (
        <ProfileSidebarItem
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          activeCategory={activeCategory}
          index={index}
          setActiveCategory={setActiveCategory}
        />
      ))}
    </div>
  );
};

export default ProfileSidebarCategories;
