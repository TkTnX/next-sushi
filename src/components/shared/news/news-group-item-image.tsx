"use client";
import * as React from "react";

interface INewsGroupItemImageProps {
  image?: string;
  title: string;
}

const NewsGroupItemImage: React.FunctionComponent<INewsGroupItemImageProps> = ({
  image,
  title,
}) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full "
        onError={(e) => {
          e.currentTarget.src = "/no-image.png"; // Путь к запасному изображению
          e.currentTarget.className += " bg-[#f0f0f0]"; // Дополнительно можно изменить класс
        }}
      />
    </>
  );
};

export default NewsGroupItemImage;
