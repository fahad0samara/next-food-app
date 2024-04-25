import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/cake.jpg",
    title: "Delicious Cake",
    desc: "A rich and moist cake topped with chocolate ganache and fresh berries.",
    price: "$12.99",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "Freshly baked pizza with a thin and crispy crust, topped with mozzarella, tomato sauce, and basil.",
    price: "$14.99",
  },
  {
    img: "/sushi.jpg",
    title: "Sushi Platter",
    desc: "A variety of fresh sushi rolls including tuna, salmon, and California rolls.",
    price: "$24.99",
  },
  {
    img: "/burger.jpg",
    title: "Classic Burger",
    desc: "Juicy beef patty topped with cheddar cheese, lettuce, tomato, and special sauce.",
    price: "$10.99",
  },
  {
    img: "/pasta.jpg",
    title: "Creamy Pasta",
    desc: "Al dente pasta tossed in a creamy Alfredo sauce with grilled chicken and broccoli.",
    price: "$16.99",
  },
  {
    img: "/steak.jpg",
    title: "Grilled Steak",
    desc: "Tender and juicy steak cooked to perfection, served with garlic mashed potatoes and grilled asparagus.",
    price: "$29.99",
  },
  {
    img: "/smoothie.jpg",
    title: "Fruit Smoothie",
    desc: "A refreshing blend of mixed berries, banana, and yogurt.",
    price: "$6.99",
  },
  {
    img: "/coffee.jpg",
    title: "Espresso",
    desc: "Rich and aromatic espresso shot served with a side of sparkling water.",
    price: "$3.99",
  },
];

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Explore our delicious selection of dishes carefully crafted to satisfy your cravings.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Appetizers</li>
        <li>Breakfast</li>
        <li>Salads</li>
        <li>Meat & Fish</li>
        <li>Soup</li>
        <li>Dessert</li>
        <li>Drinks</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.jpg"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
