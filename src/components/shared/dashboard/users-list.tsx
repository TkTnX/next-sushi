"use client";
import { Api } from "@/services/api-client";
import { User } from "@prisma/client";
import * as React from "react";
import DashboardDeleteItemBtn from "./dashboard-delete-item-btn";
import toast from "react-hot-toast";

type IUser = {
  id: number;
  fullName: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
};

interface IUsersListProps {
  users: IUser[];
}

const UsersList: React.FunctionComponent<IUsersListProps> = ({
  users: usersList,
}) => {
  const [users, setUsers] = React.useState<IUser[]>(usersList ?? []);

  const deleteUser = async (id: number) => {
    try {
      await Api.users.deleteUser(id);
      const newUsers = await Api.users.getUsers();
      toast.success("Пользователь удален");
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
      toast.error("Не удалось удалить пользователя");
    }
  };

  return (
    <div className="mt-5">
      {users.length > 0 &&
        users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between w-full"
          >
            <div className="border p-3 flex items-center gap-4 w-full">
              <div>
                <p className="font-bold">id</p>
                {user.id}
              </div>
              <div className="w-[200px]">
                <p className="font-bold">ФИО</p>
                {user.fullName}
              </div>
              <div>
                <p className="font-bold">email</p>
                {user.email}
              </div>
              <DashboardDeleteItemBtn onClick={deleteUser} id={user.id} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
