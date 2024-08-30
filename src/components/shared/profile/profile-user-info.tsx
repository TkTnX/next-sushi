"use client";
import Image from "next/image";
import * as React from "react";
import ProfileEdit from "../modals/profile-edit";

interface IProfileUserInfoProps {
  name: string;
  email: string;
  image: string;
}

const ProfileUserInfo: React.FunctionComponent<IProfileUserInfoProps> = ({
  name,
  email,
  image,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-white flex items-start gap-3 w-full p-4 rounded-xl mt-4">
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
      </div>
      <ProfileEdit
        name={name}
        email={email}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default ProfileUserInfo;
