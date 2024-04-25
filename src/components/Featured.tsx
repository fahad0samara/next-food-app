import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        Welcome to our featured dishes section. Explore our handpicked selection of mouth-watering dishes made with fresh ingredients and exquisite flavors.
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Shrimp Salad</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Enjoy the freshness of our shrimp salad made with succulent shrimp, crisp vegetables, and a tangy dressing. Perfect for a light and healthy meal.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.png"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Baked Apples</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Indulge in the warmth and sweetness of our baked apples. Served with a sprinkle of cinnamon and a dollop of whipped cream, it's a perfect dessert for any occasion.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Cherries Chicken</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Experience the perfect blend of savory and sweet with our cherries chicken. Tender chicken breast served with a rich cherry sauce, it's a flavor explosion you won't forget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
