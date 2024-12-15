import React from "react";
import Nav from "./Nav";
import Slider from "./Slider";

export default function Portfolio() {
  const menu = [
    { id: 1, menu: "All Categories" },
    { id: 1, menu: "Web Design" },
    { id: 1, menu: "Branding" },
    { id: 1, menu: "Mockups" },
    { id: 1, menu: "Photography" },
  ];

  const img = [
    { id: 1, url: "./img/g1.jpg", price: "$600" },
    { id: 1, url: "./img/g2.png", price: "$800" },
    { id: 1, url: "./img/g3.png", price: "$60" },
    { id: 1, url: "./img/g4.png", price: "$200" },
    { id: 1, url: "./img/g5.png", price: "$400" },
    { id: 1, url: "./img/g6.png", price: "$600" },
    { id: 1, url: "./img/g7.jpg", price: "$600" },
    { id: 1, url: "./img/g8.png", price: "$600" },
    { id: 1, url: "./img/g9.png", price: "$600" },
  ];

  return (
    <section className="container flex justify-center items-center flex-col mb-52">
      <h1 className="font-title text-3xl mb-10">Recent Portfolio</h1>
      <div className="flex flex-row mb-4">
        {menu.map((m) => (
          <Nav {...m} />
        ))}
      </div>
      <div className="columns-3 space-y-4 space-x-2">
        {img.map((a) => (
          <Slider {...a} />
        ))}
      </div>
    </section>
  );
}
