import Link from "next/link";
import * as React from "react";

type footerGroupItem = {
  name: string;
  link: string;
};

interface IFooterGroupProps {
  title: string;
  items: footerGroupItem[];
}

const FooterGroup: React.FunctionComponent<IFooterGroupProps> = ({
  title,
  items,
}) => {
  return (
    <div>
      <h6 className="text-[#686870] text-sm">{title}</h6>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item.name} className="text-base hover:opacity-80">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterGroup;
