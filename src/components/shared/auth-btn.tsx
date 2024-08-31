import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

interface IAuthBtnProps {
  name: string;
}

const AuthBtn: React.FunctionComponent<IAuthBtnProps> = ({ name }) => {
  return (
    <Button
      onClick={() => signIn(name, { callbackUrl: "/", redirect: true })}
      variant="outline"
      className="flex items-center gap-2 h-[56px] flex-1"
    >
      <Image src={`/icons/${name}.svg`} alt={name} width={36} height={36} />
      {name}
    </Button>
  );
};

export default AuthBtn;
