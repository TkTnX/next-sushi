import * as React from "react";
import UsersList from "./users-list";
import { NewsItem, User } from "@prisma/client";
import DashboardNews from "./dashboard-news";

interface IDashboardGroupProps {
  title: string;
  children: React.ReactNode;
}

const DashboardGroup: React.FunctionComponent<IDashboardGroupProps> = ({
  title,
  children,
}) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-medium">{title}</h3>

      {children}
    </div>
  );
};

export default DashboardGroup;
