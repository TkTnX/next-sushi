import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Navbar from "./navbar";
import Userbar from "./userbar";


const Header: React.FunctionComponent = () => {
  return (
    <header className="mt-4 bg-white px-3 py-[6px] rounded-xl flex items-center justify-between">
      <Link href={"/"} className="relative ">
        <Image src="/logo.svg" alt={"logo"} width={214} height={48} />
      </Link>

      <div>
        <Navbar />
      </div>

      <div>
        <Userbar />
      </div>
    </header>
  );
};

export default Header;
