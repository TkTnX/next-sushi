"use client";
import { Bell, Heart, Loader, User, UserRoundCheckIcon } from "lucide-react";
import * as React from "react";
import CartBtn from "./cart-btn";
import { useSession } from "next-auth/react";
import Link from "next/link";
import NotificationsModal from "./modals/notifications-modal";
import { NotificationsItemType } from "@/store/notificationsStore";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import NotificationsButton from "./notifications/notifications-button";
import ProfileButton from "./profile/profile-button";

interface IUserbarProps {
  setOpenAuthModal: () => void;
  isCheckoutPage: boolean;
}

const Userbar: React.FunctionComponent<IUserbarProps> = ({
  setOpenAuthModal,
  isCheckoutPage,
}) => {

  return (
    <div className="flex items-center gap-3">
      {/* Кнопка уведомлений */}
      <NotificationsButton />

      {/* Кнопка favorite */}
      <Link
        href="/profile"
        className="xl:w-[56px] xl:h-[56px] xl:border xl:border-[#d2d2d7] rounded-2xl p-1 xl:p-4 group hover:bg-primary hover:border-primary transition duration-200"
      >
        <Heart
          className="stroke-[#686870] group-hover:stroke-white transition duration-200"
          size={24}
        />
      </Link>

      {/* Кнопка профиля */}
      <ProfileButton setOpenAuthModal={setOpenAuthModal} />

      {/* Кнопка корзины */}
      {!isCheckoutPage && <CartBtn />}
    </div>
  );
};

export default Userbar;
