import What from "./What";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faUikit } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
export default function whatIdo() {
  const shape = [
    {
      title: "UI Design",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      title: "App Development",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
  ];

  return (
    <section id="whatIDo" className="container flex flex-col justify-center items-center mb-52">
      <h1 className="font-title text-3xl mb-16">What I do</h1>
      <div className="grid grid-cols-3 gap-10">
        <What {...shape[0]}>
          <FontAwesomeIcon icon={faUikit} size="xl" style={{ color: "#A427DF" }} />
        </What>
        <What {...shape[1]}>
          <FontAwesomeIcon icon={faCode} size="xl" style={{ color: "#eb7d00" }} />
        </What>
        <What {...shape[2]}>
          <FontAwesomeIcon icon={faCodepen} size="xl" style={{ color: "#00ad99" }} />
        </What>
      </div>
    </section>
  );
}
