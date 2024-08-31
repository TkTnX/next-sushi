import * as React from "react";
import ProfileSidebarItem from "./profile-sidebar-item";
import { profileSidebarItems } from "@/Prisma/constants";
import ProfileUserInfo from "./profile-user-info";
import ProfileSidebarCategories from "./profile-sidebar-categories";
import { getUserSession } from "@/lib/get-user-session";
import { redirect } from "next/navigation";
import { prisma } from "@/Prisma/prisma-client";

const ProfileSidebar: React.FunctionComponent = async () => {
  const data = await getUserSession();

  if (!data) {
    return redirect("/not-auth");
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(data.id),
    },
  });

  if (!user) {
    return redirect("/not-auth");
  }

  return (
    <div className="w-[246px] ">
      <ProfileSidebarCategories />
      <ProfileUserInfo
        name={user.fullName}
        email={user.email}
        image={data.image}
      />
    </div>
  );
};

export default ProfileSidebar;
