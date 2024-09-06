import Image from "next/image";
import * as React from "react";
import FooterGroup from "./footer-group";
import Link from "next/link";
import { Button } from "../ui/button";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <footer className="bg-white mt-9  py-16 ">
      <div className="flex items-start justify-between container ">
        <div>
          <Image src="/logo.svg" alt="logo" width={246} height={59} />
          <p className="text-sm font-medium mt-4">
            © Ninja Sushi. All rights reserved.
          </p>
        </div>
        <FooterGroup
          title="Навигация:"
          items={[
            { name: "Главная", link: "/" },
            { name: "Корзина", link: "/cart" },
            { name: "Профиль", link: "/profile" },
            { name: "Избранные", link: "/profile" },
            { name: "Мои заказы", link: "/profile" },
          ]}
        />
        <FooterGroup
          title="Оформить заказ:"
          items={[
            { name: "+7 (999) 999-99-99", link: "tel:+79999999999" },
            { name: "+7 (555) 555-55-55", link: "tel:+75555555555" },
          ]}
        />
        <FooterGroup
          title="Время работы:"
          items={[
            { name: "с 11:00 до 22:45", link: "" },
            { name: "с 22.45 до 06.00", link: "" },
          ]}
        />
        <div>
          <h6 className="text-[#686870] text-sm">Мы в соц. сетях:</h6>
          <div className="flex items-center gap-3 mt-3">
            <Link href="https://facebook.com">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={26}
                height={26}
                className="hover:opacity-80"
              />
            </Link>
            <Link href="https://instagram.com">
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={26}
                height={26}
                className="hover:opacity-80"
              />
            </Link>
          </div>
          <Button
            variant="outline"
            className="text-[#039BE5] flex items-center gap-3 mt-4"
          >
            <Image
              src="/icons/telegram.svg"
              alt="telegram"
              width={20}
              height={18}
            />
            Техподдержка
          </Button>
        </div>
        <div>
          <h2 className="text-5xl font-bold">#NinjaSushi</h2>
          <p className="text-base font-medium mt-2">
            Ninja Sushi в фотографиях наших клиентов
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-between mt-9">
        <Link href="/policy" className="text-sm text-black">
          Политика конфиденциальности
        </Link>
        <div className="flex items-center gap-6">
          <Image
            src="/icons/mastercard.svg"
            width={20}
            height={16}
            alt="mastercard"
          />
          <Image src="/icons/visa.svg" width={20} height={16} alt="visa" />
          <Image src="/icons/pb.svg" width={20} height={16} alt="pb" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
