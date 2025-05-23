import React, { useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa6";

const Faq = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="h-auto bg-[url(https://2am.ng/wp-content/uploads/2024/08/2am__about-us.jpg)] bg-no-repeat bg-cover p-8 text-white">
      <div className="flex flex-col gap-10 ml-100 my-20">
        <div className="w-[20%]">
          <h1 className="text-6xl font-bold uppercase leading-16">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex flex-col w-full max-w-xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className=" pt-2 cursor-pointer flex flex-col gap-2 transition-all duration-900 ease-in-out"
            >
              <div className="flex items-center gap-3 pl-3">
                <button type="button">
                  {openIndexes.includes(index) ? (
                    <FaArrowUp className="text-[#E17413]" />
                  ) : (
                    <FaArrowRight />
                  )}
                </button>
                <h2
                  className={`text-md ${
                    openIndexes.includes(index) && "text-[#E17413]"
                  }`}
                >
                  {faq.title}
                </h2>
              </div>
              <div
                className={`overflow-hidden transition-all duration-900 ease-in-out  ${
                  openIndexes.includes(index)
                    ? "max-h-90 opacity-100 p-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-md mt-2">{faq.content}</p>
              </div>
              <span className="h-[1px] w-full max-w-xl bg-white"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
