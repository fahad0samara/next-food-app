import Image from "next/image";
import React from "react";

interface PropsType {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const MenuCard: React.FC<PropsType> = ({ img, title, desc, price }) => {
  return (
    <div className="flex gap-2">
      <div className="relative w-[80px] h-[80px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="dish"
        />
      </div>
      <div className="space-y-2">
        <div>
          <h2>{title}</h2>
          <p className="text-[14px] text-gray-600 pt-1">{desc}</p>
        </div>

        <p className="text-accent">{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
