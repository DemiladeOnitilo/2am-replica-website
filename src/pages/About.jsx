import React, { useState, useEffect, useRef } from "react";
import Hero2 from "../components/Hero2";
import { scroller } from "react-scroll";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const scrollToSection = () => {
    scroller.scrollTo("target-section", {
      duration: 500,
      smooth: true,
      offset: -70,
    });
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const autoplayRef = useRef();

  const goToNextSlide = () => {
    if (isAnimating) return;
    startAutoplay();
    setSlideDirection("next");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slider.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(autoplayRef.current);
  }, []);

  const startAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      goToNextSlide(true);
    }, 10000);
  };

  const slider = [
    {
      title: "Our Vision",
      content:
        "To enable African talents in the IT industry become recognized globally and to deliver sustainable business solutions.",
      img: "https://2am.ng/wp-content/uploads/2024/08/H0MKswdw.jpeg",
    },
    {
      title: "Our Mission",
      content:
        "To Partner with international clients to retain their workforce by administering projects to African talents in the IT industry and delivering end to end business automation and ERP solutions.",
      img: "https://2am.ng/wp-content/uploads/2024/08/2am-Tech-Partners.jpg",
    },
    {
      title: "Our Values",
      content:
        "We foster a culture of excellence, collaboration, and continuous innovation. We value integrity, inclusivity, and professional growth, providing a supportive environment where our team can thrive and deliver exceptional results for our clients.",
      img: "https://2am.ng/wp-content/uploads/2024/08/2AM-Tech-Limited-Mission-1.jpg",
    },
  ];

  const currentSlide = slider[currentIndex];

  return (
    <div className="mt-20">
      <Hero2
        id="target-section"
        title="Enabling a tech-driven future, powered by Africa"
        img="https://2am.ng/wp-content/uploads/2024/08/1561998363369-1-768x603.jpg"
        bgColor="#E17413"
        scrollToSection={scrollToSection}
        about={true}
      />
      <div
        id="target-section"
        className="h-auto flex justify-center items-center py-30 pl-30"
      >
        <div className="flex justify-center gap-10 py-10">
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            <h1 className="text-4xl font-semibold text-gray-800">
              15 Years of Empowering Businesses with African Talent
            </h1>
            <span className="h-1 w-1/5 bg-[#E17A1B]"></span>
            <p className="text-lg">
              We are a leading IT infrastructure company specializing in
              sourcing African talents for IT and business solutions. We have a
              rich history of delivering end-to-end business automation, ERP
              solutions, and innovative healthcare IT tools that boost
              productivity and enhance healthcare quality.
            </p>
            <div
              ref={ref}
              className="flex gap-5 items-center text-lg text-gray-400"
            >
              <CountUp
                start={0}
                end={200}
                delay={0}
                duration={2}
                redraw={true}
                startOnMount={false}
                enable={inView}
              >
                {({ countUpRef }) => (
                  <div>
                    <div className="flex gap-2 text-green-500 font-black text-3xl">
                      <span ref={countUpRef} /> +
                    </div>
                    <p>Active Talents</p>
                  </div>
                )}
              </CountUp>
              <CountUp
                start={0}
                end={300}
                delay={0}
                duration={2}
                redraw={true}
                startOnMount={false}
                enable={inView}
              >
                {({ countUpRef }) => (
                  <div>
                    <div className="flex gap-2 text-[#3498db] font-black text-3xl">
                      <span ref={countUpRef} /> +
                    </div>
                    <p>Active Projects</p>
                  </div>
                )}
              </CountUp>
              <CountUp
                start={0}
                end={20}
                delay={0}
                duration={2}
                redraw={true}
                startOnMount={false}
                enable={inView}
              >
                {({ countUpRef }) => (
                  <div>
                    <div className="flex gap-2 text-[#9b59b6] font-black text-3xl">
                      <span ref={countUpRef} /> +
                    </div>
                    <p>Satisfied Clients</p>
                  </div>
                )}
              </CountUp>
            </div>
          </div>
          <div className="w-full max-w-3xl">
            <img
              src="https://2am.ng/wp-content/uploads/2024/08/2am.ng_.jpg"
              alt="About"
              className="h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden h-[50vh] flex justify-end">
        <div className="absolute inset-0 z-0 bg-[url(https://2am.ng/wp-content/uploads/2024/08/2am__about-us.jpg)] bg-no-repeat bg-cover h-full "></div>
        <div className="z-10 flex flex-col gap-4 justify-center text-white w-full max-w-4xl pr-20">
          <h1 className="text-5xl flex flex-col gap-2">
            Seamless Onboarding
            <span className="font-black">+ Project Management</span>
          </h1>
          <p className="text-lg">
            We understand the importance of a smooth onboarding process. Whether
            you're a talented professional looking to start your next project or
            a business seeking to expand your team, our streamlined online
            onboarding ensures a seamless experience.
          </p>
          <div className="flex gap-5">
            <Link className="bg-flex items-center justify-center gap-4 bg-gray-600 rounded text-white font-bold px-11 py-4 hover:shadow-2xl/40 transition duration-300 cursor-pointer">
              How We Work
            </Link>
            <Link className="bg-flex items-center justify-center gap-4 bg-[#E17A1B] rounded text-white font-bold px-11 py-4 hover:shadow-2xl/40 transition duration-300 cursor-pointer">
              Join Now
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#F3FEFF] flex items-center justify-center py-20">
        <div className="flex items-center justify-center gap-5 w-[80%]">
          <div
            key={currentSlide.title + "-text"}
            className="flex relative h-[500px] w-[30%] overflow-hidden"
          >
            <div
              className={`flex flex-col gap-6 absolute inset-0 transition-transform w-[70%] duration-700 ease-in-out${
                isAnimating
                  ? slideDirection === "next"
                    ? "-translate-y-full"
                    : "translate-y-full"
                  : "translate-y-0"
              }`}
            >
              <h1 className="text-6xl font-black mb-2">{currentSlide.title}</h1>
              <h2 className="text-lg ">{currentSlide.content}</h2>
            </div>
          </div>

          <div
            key={currentSlide + "-text"}
            className={`flex-1 transform transition-all duration-1500 w-[70%] ease-in-out ${
              isAnimating
                ? slideDirection === "next"
                  ? "opacity-50 "
                  : " opacity-50  "
                : "translate-x-0 opacity-100"
            }`}
          >
            <div
              key={currentSlide.title + "-image"}
              className="flex-1 w-full relative h-[900px] overflow-hidden shadow-lg"
            >
              <img
                src={currentSlide.img}
                alt={currentSlide.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                  isAnimating
                    ? slideDirection === "next"
                      ? "-translate-y-full"
                      : "translate-y-full"
                    : "translate-y-0"
                }`}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-5">
            {slider.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating || index === currentIndex) return;
                  setSlideDirection(index > currentIndex ? "next" : "prev");
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  startAutoplay();
                }}
                className={`w-4 h-4 rounded-full transition-all duration-1500 ease-in-out ${
                  currentIndex === index ? "bg-[#E17A1B]" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#E17413] h-auto">
        <div className="flex justify-center gap-10 my-40 w-full max-w-5xl">
          
          <div className="flex flex-col gap-6 w-full max-w-xl">
            <img
              src="https://2am.ng/wp-content/uploads/2024/08/2am.ng__001.jpeg"
              alt="Consult"
              className="w-full"
            />
            <Link
              to="/book-consultant"
              className="px-6 py-4 flex justify-center items-center gap-5 bg-black text-white hover:bg-white hover:text-black transition-all ease-in-out duration-500 w-[60%]"
            >
              <p>Book a Consultant</p> <FaArrowCircleRight />
            </Link>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-xl text-white">
            <h1 className="font-bold text-6xl">Got Questions?</h1>
            <p className="text-md">
              If you have questions or you'd just prefer a personalized
              approach, we invite you to schedule a consultation with our talent
              acquisition experts. <br />
              During this call, we'll delve deeper into your specific needs,
              discuss your business goals, and provide tailored solutions.
            </p>
            <p className="text-lg font-bold">
              We are happy to get on a call with you to explore how 2AM TECH can
              elevate the technology stack of your business.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
