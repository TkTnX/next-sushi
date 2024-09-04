"use client";
import { Bell, Heart, User, UserRoundCheckIcon } from "lucide-react";
import * as React from "react";
import CartBtn from "./cart-btn";
import { IHeaderProps } from "./header";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

interface IUserbarProps {
  setOpenAuthModal: () => void;
  isCheckoutPage: boolean;
}

const Userbar: React.FunctionComponent<IUserbarProps> = ({
  setOpenAuthModal,
  isCheckoutPage,
}) => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-3">
      {/* Кнопка уведомлений */}
      <button className="w-[56px] h-[56px] border border-[#d2d2d7] rounded-2xl p-4 group hover:bg-primary  hover:border-primary transition duration-200">
        <Bell
          className="stroke-[#686870] group-hover:stroke-white transition duration-200"
          size={24}
        />
      </button>

      {/* Кнопка favorite */}
      <Link href="/profile" className="w-[56px] h-[56px] border border-[#d2d2d7] rounded-2xl p-4 group hover:bg-primary hover:border-primary transition duration-200">
        <Heart
          className="stroke-[#686870] group-hover:stroke-white transition duration-200"
          size={24}
        />
      </Link>

      {/* Кнопка профиля */}
      {!session ? (
        <button
          onClick={setOpenAuthModal}
          className="w-[56px] h-[56px] border border-[#d2d2d7] rounded-2xl p-4 group hover:bg-primary hover:border-primary transition duration-200"
        >
          <User
            className="stroke-[#686870] group-hover:stroke-white transition duration-200"
            size={24}
          />
        </button>
      ) : (
        <Link href="/profile">
          <button className="w-[56px] h-[56px] border border-[#d2d2d7] rounded-2xl p-4 group hover:bg-primary hover:border-primary transition duration-200">
            <UserRoundCheckIcon
              className="stroke-[#686870] group-hover:stroke-white transition duration-200"
              size={24}
            />
          </button>
        </Link>
      )}

      {/* Кнопка корзины */}
      {!isCheckoutPage && <CartBtn />}
    </div>
  );
};

export default Userbar;
