import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professional Kitchen",
    desc: "Experience our professionally equipped kitchen, where our chefs create culinary masterpieces with the finest ingredients.",
  },
  {
    img: "/services__2.png",
    title: "Delivery",
    desc: "Enjoy the convenience of having your favorite dishes delivered straight to your door. Fast and reliable delivery service.",
  },
  {
    img: "/services__3.png",
    title: "Wine List",
    desc: "Discover our carefully curated wine list, featuring a selection of premium wines from around the world to complement your meal.",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Stay connected while you dine with our free and high-speed Wi-Fi. Perfect for working, browsing, or sharing your dining experience.",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose the Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
          Explore our range of services designed to enhance your dining experience.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
