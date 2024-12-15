import React from "react";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class AboutMe extends React.Component {
  skills = [
    { name: "CSS" },
    { name: "HTML" },
    { name: "ArtCam" },
    { name: "Photoshop" },
    { name: "JavaScript" },
    { name: "Corel Draw" },
    { name: "Illustrator" },
  ];

  render() {
    return (
      <section id="aboutMe" className="container flex flex-row items-center justify-center mb-52">
        <div>
          <img alt="#" src="./img/aboutme.png" className="w-[50rem]" />
        </div>
        <div>
          <h1 className="text-3xl font-title">About Me</h1>
          <p className="my-5 font-title text-[0.9em]">
            Hello, I’m a Patrick, web-developer based on Paris. I have rich experience
            <br /> in web site design & building and customization. Also I am good at
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <About {...this.skills[0]} />
            <About {...this.skills[1]} />
            <About {...this.skills[2]} />
            <About {...this.skills[3]} />
            <About {...this.skills[4]} />
            <About {...this.skills[5]} />
            <About {...this.skills[6]} />
          </div>
          <div className="cursor-pointer justify-center items-center px-5 py-2 bg-color-blob border border-color-blob transition duration-700 hover:bg-transparent rounded-full inline">
            <span>
              Download cv <FontAwesomeIcon icon={faDownload} style={{ color: "#ffffff" }} />
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
