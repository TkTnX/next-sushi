"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Navbar from "./navbar";
import Userbar from "./userbar";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import AuthModal from "./modals/auth-modal";

export interface IHeaderProps {
  isCheckoutPage?: boolean;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  isCheckoutPage = false,
}) => {
  const [openAuthModal, setOpenModal] = React.useState(false)
  const searchParams = useSearchParams();
  const router = useRouter();
  React.useEffect(() => {
    if (searchParams.has("paid")) {
      setTimeout(() => {
        toast.success("Заказ успешно оплачен! Информация отправлена на почту");
      }, 500);

      router.push("/");
    }
  }, []);

  return (
    <header className="mt-4 bg-white px-3 py-[6px] rounded-xl flex items-center justify-between">
      <Link href={"/"} className="relative ">
        <Image src="/logo.svg" alt={"logo"} width={214} height={48} />
      </Link>

      <div>
        <Navbar />
      </div>

      <div>
        <AuthModal open={openAuthModal} onClose={() => setOpenModal(false)} />
        <Userbar setOpenAuthModal={() => setOpenModal(prev => !prev)} isCheckoutPage={isCheckoutPage} />
      </div>
    </header>
  );
};

export default Header;
