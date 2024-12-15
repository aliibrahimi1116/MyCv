import React from "react";

export default function Slider(props) {
  return (
    <div className="relative group ">
      <div className="bg-color-gray bg-opacity-40 absolute inset-0 rounded-xl m-auto z-10 group-hover:visible invisible  ">
        <div className="flex justify-center items-center h-full w-full">
          <h1 className="text-6xl">{props.price}</h1>
        </div>
      </div>
      <img src={props.url} alt="Slider" className="w-full rounded-xl" />
    </div>
  );
}
