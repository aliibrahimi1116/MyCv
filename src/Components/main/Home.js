import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import { faFacebook, faLinkedinIn, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const address = [
    { text: "alimadad.ibrahimi1116@gmail.com" },
    { text: "+98 901 223 5586" },
    { text: "Imam-Khomainy 31, Mashhad, Iran" },
  ];

  return (
    <section id="home" className="container flex flex-col items-center mb-52">
      <div className="flex items-center">
        <div className="mr-36">
          <span className="font-title bg-color-secondary px-4 py-1 rounded-tl-full rounded-tr-full rounded-br-full">
            Hello I'm
          </span>
          <h1 className="font-title md:text-[4.5em]">Ali Ebrahimi</h1>
          <h3 className="font-title md:text-2xl mb-6">Web Developer</h3>
          <Address {...address[0]}>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
          </Address>
          <Address {...address[1]}>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
          </Address>
          <Address {...address[2]}>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff" }} />
          </Address>
          <div className=" mt-5">
            <FontAwesomeIcon
              className="cursor-pointer p-2 rounded-md hover:bg-color-blob transition duration-700"
              icon={faTelegram}
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              className="cursor-pointer ml-8 p-2 rounded-md hover:bg-color-blob transition duration-700"
              icon={faFacebook}
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              className="cursor-pointer ml-8 p-2 rounded-md hover:bg-color-blob transition duration-700"
              icon={faWhatsapp}
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              className="cursor-pointer ml-8 p-2 rounded-md hover:bg-color-blob transition duration-700"
              icon={faLinkedinIn}
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
        <div className="ml-36">
          <img src="./img/3546.png" alt="logo" className="w-[25rem]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
