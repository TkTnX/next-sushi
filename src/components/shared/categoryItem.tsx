import Image from "next/image";
import Link from "next/link";
import * as React from "react";
interface ICategoryItemProps {
  imageUrl: string;
  name: string;
}

const CategoryItem: React.FunctionComponent<ICategoryItemProps> = ({
  imageUrl,
  name,
}) => {
  return (
    <div>
      <Link className="grid gap-1 group" href={`#${name}`}>
          <Image
            width={44}
            height={44}
            src={imageUrl}
            alt={name}
            className="justify-self-center"
          />
        <p className="group-hover:text-primary transition duration-200 ">
          {name}
        </p>
      </Link>
    </div>
  );
};

export default CategoryItem;
