import DashboardGroup from "@/components/shared/dashboard/dashboard-group";
import DashboardNews from "@/components/shared/dashboard/dashboard-news";
import UsersList from "@/components/shared/dashboard/users-list";
import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/Prisma/prisma-client";
import { redirect } from "next/navigation";
import * as React from "react";

const Dashboard: React.FunctionComponent = async () => {
  const user = await getUserSession();

  if (!user || user?.role !== "ADMIN") {
    return redirect("/");
  }

    const users = await prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    const news = await prisma.newsItem.findMany({
      orderBy: {
        id: "asc",
      },
    });
  
    

  return (
    <div>
      <h1 className="mt-10 text-5xl font-bold">
        Админ-панель сайта Ninja Sushi
      </h1>

      <DashboardGroup title="Список пользователей">
        <UsersList users={users} />
      </DashboardGroup>
      <DashboardGroup title="Список новостей">
        <DashboardNews news={news} />
      </DashboardGroup>
    </div>
  );
};

export default Dashboard;
