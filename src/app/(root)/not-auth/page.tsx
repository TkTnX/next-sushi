import WhiteBox from "@/components/shared/white-box";
import { Button } from "@/components/ui/button";
import { getUserSession } from "@/lib/get-user-session";
import Link from "next/link";
import { redirect } from "next/navigation";
import * as React from "react";

interface INotAuthProps {}

const NotAuth: React.FunctionComponent<INotAuthProps> = async (props) => {
  const user = await getUserSession();

  if (user) return redirect("/profile");

  return (
    <div>
      <WhiteBox className="mt-4 max-w-4xl mx-auto p-20">
        <h2 className="text-3xl font-bold text-center">
          Войдите или зарегистрируйтесь, <br /> чтобы посетить эту страницу
        </h2>
        <p className="mt-2 text-[#686870] text-sm">
          Страница, которую вы хотите посетить, доступна только
          зарегистрированным пользователям
        </p>

        <Link href="/">
          <Button variant="default" className="w-full mt-4">
            Вернуться на главную
          </Button>
        </Link>
      </WhiteBox>
    </div>
  );
};

export default NotAuth;
