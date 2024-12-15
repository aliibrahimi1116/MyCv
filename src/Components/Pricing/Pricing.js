import React from "react";
import Price from "./Price";

export default function Pricing() {
  const data = [
    {
      id: 1,
      title: "Hourley work",
      text: "I am available for Hourley projects",
      price: 50,
      roll1: "Web Development",
      roll2: "Advertising",
      roll3: "Game Development",
      roll4: "Music Writing",
    },
  ];

  return (
    <section className="container">
      <h1 className="font-title text-3xl">Pricing Table</h1>
      <Price {...data[0]}>
        
      </Price>
    </section>
  );
}
