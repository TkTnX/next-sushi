import Header from "@/components/shared/header";
import WhiteBox from "@/components/shared/white-box";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Header />
      <WhiteBox className="flex items-center justify-center text-center mt-8">
        <div>
          <Image src="/404.svg" alt="404" width={343} height={201} />
          <h2 className="font-bold text-3xl">
            Ошибка 404. <br /> Что-то пошло не так
          </h2>
          <p className="text-[#686870] mt-4">
            Страница, которую вы ищите, временно <br /> не доступна или ее еще
            нет
          </p>
          <Link
            className="block w-full bg-secondary rounded-xl text-white py-4 mt-8"
            href="/"
          >
            Вернуться на главную
          </Link>
        </div>
      </WhiteBox>
    </>
  );
};

export default NotFound;
