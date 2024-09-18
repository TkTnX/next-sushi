"use client";
import Image from "next/image";
import * as React from "react";
import ProfileEdit from "../modals/profile-edit";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface IProfileUserInfoProps {
  name: string;
  email: string;
  image: string;
  isAdmin?: boolean;
}

const ProfileUserInfo: React.FunctionComponent<IProfileUserInfoProps> = ({
  name,
  email,
  image,
  isAdmin,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-white   p-4 rounded-xl mt-4">
      <div className="flex items-start gap-3 w-full">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-2xl min-w-[55px] min-h-[55px]"
            src={image ? image : "/icons/userIcon.png"}
            alt="user"
            width={55}
            height={55}
          />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h5>{name}</h5>
            <button onClick={() => setOpen(true)}>
              <Image src={"/icons/pen.svg"} alt="edit" width={24} height={24} />
            </button>
          </div>
          <p className="text-[#9E9E9E] text-xs">{email}</p>
          {isAdmin && <p className="text-[#ff0000] text-xs">Админ</p>}
        </div>
        <ProfileEdit
          name={name}
          email={email}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
      {isAdmin && (
        <Link className="w-full mt-2 bg-red-600 text-white block text-center py-2 rounded-lg hover:opacity-80 transition duration-200" href={"/dashboard"}>
          Админ-панель
        </Link>
      )}
      <Button
        className="w-full mt-2"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Выйти из аккаунта
      </Button>
    </div>
  );
};

export default ProfileUserInfo;
