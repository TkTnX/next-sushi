"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Navbar from "./navbar";
import Userbar from "./userbar";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import AuthModal from "./modals/auth-modal";
import { useSession } from "next-auth/react";
import { useFavoriteStore } from "@/store/favoritesStore";

export interface IHeaderProps {
  isCheckoutPage?: boolean;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  isCheckoutPage = false,
}) => {
  const [type, setType] = React.useState<"login" | "register">("login");
  const [openAuthModal, setOpenModal] = React.useState(false);
  const { data: session } = useSession();
  const { getItems } = useFavoriteStore();

  React.useEffect(() => {
    if (session) {
      getItems(session.user.id);
    }
  }, [session]);

  const searchParams = useSearchParams();
  React.useEffect(() => {
    let toastText = "";
    if (searchParams.has("paid")) {
      toastText = "Заказ успешно оплачен! Информация отправлена на почту";
    }

    if (searchParams.has("verified")) {
      toastText = "Ваша почта подтверждена! Теперь вы можете войти в аккаунт!";
    }

    if (toastText) {
      setTimeout(() => {
        toast.success(toastText, {
          icon: "✅",
        });
      }, 500);
    }
  }, []);

  return (
    <header className="mt-4 bg-white px-3 py-[14px] md:py-[6px] rounded-xl flex items-center justify-between  gap-3 md:gap-0 flex-col sm:flex-row  ">
      <Link href={"/"} className="relative ">
        <Image src="/logo.svg" alt={"logo"} width={214} height={48} />
      </Link>

      <div className="hidden lg:block">
        <Navbar />
      </div>

      <div>
        <AuthModal
          open={openAuthModal}
          type={type}
          setType={setType}
          onClose={() => setOpenModal(false)}
        />

        <Userbar
          setOpenAuthModal={() => setOpenModal((prev) => !prev)}
          isCheckoutPage={isCheckoutPage}
        />
      </div>
    </header>
  );
};

export default Header;
