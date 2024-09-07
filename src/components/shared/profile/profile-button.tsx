import { User, UserRoundCheckIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import * as React from "react";

interface IProfileButtonProps {
  setOpenAuthModal: () => void;
}

const ProfileButton: React.FunctionComponent<IProfileButtonProps> = ({
  setOpenAuthModal,
}) => {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <button
          onClick={setOpenAuthModal}
          className="xl:w-[56px] xl:h-[56px] xl:border border-[#d2d2d7] rounded-2xl p-1 xl:p-4 group hover:bg-primary hover:border-primary transition duration-200"
        >
          <User
            className="stroke-[#686870] group-hover:stroke-white transition duration-200"
            size={24}
          />
        </button>
      ) : (
        <Link href="/profile">
          <button className="xl:w-[56px] xl:h-[56px] xl:border border-[#d2d2d7] rounded-2xl p-1 xl:p-4 group hover:bg-primary hover:border-primary transition duration-200">
            <UserRoundCheckIcon
              className="stroke-[#686870] group-hover:stroke-white transition duration-200"
              size={24}
            />
          </button>
        </Link>
      )}
    </>
  );
};

export default ProfileButton;
