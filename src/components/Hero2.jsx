import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Hero2 = ({ title, img, bgColor, scrollToSection, about }) => {
  return (
    <div
      className="relative h-auto overflow-hidden flex items-center p-8"
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute inset-0 z-0 bg-[url(https://2am.ng/wp-content/uploads/2024/08/1687910072_en-idei-club-p-orange-technology-dizain-krasivo-4-1.jpg)] bg-no-repeat bg-cover bg-top h-full transform opacity-20"></div>

      <div className="flex justify-center items-center gap-10 px-20 z-10">
        <div>
          <img
            src={img}
            alt="transformation concept"
            className={`rounded-3xl ${about ? "w-[850px] h-[550px]" : "w-[650px] h-[450px] "}`}
          />
        </div>
        <div className="flex flex-col gap-15">
          <h1 className={`${about ? "text-5xl" : "text-7xl"} font-bold text-white`}>{title}</h1>
          <div>
            <button onClick={scrollToSection} className="flex items-center justify-center gap-4 bg-black rounded text-white font-bold py-2 hover:shadow-2xl/40 transition duration-300 w-[20%]">
              Explore <FaChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
