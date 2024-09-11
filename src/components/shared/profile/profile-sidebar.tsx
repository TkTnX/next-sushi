import * as React from "react";
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
    <div className="mx-auto xl:w-[246px] ">
      <ProfileSidebarCategories />
      <ProfileUserInfo
        name={user.fullName}
        email={user.email}
        image={data.image}
        isAdmin={data.role === "ADMIN"}
      />
    </div>
  );
};

export default ProfileSidebar;
