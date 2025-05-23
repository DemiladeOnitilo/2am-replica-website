import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from './heroSlides';
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa'


const Hero = ({scrollToSection}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const autoplayRef = useRef();


  const goToPrevSlide = () => {
    if (isAnimating) return;
    startAutoplay(); 
    setSlideDirection('prev');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    if (isAnimating) return;
    startAutoplay(); 
    setSlideDirection('next');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 100); 
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

  const currentSlide = heroSlides[currentIndex];

  return (
    <div className="relative bg-[url(https://2am.ng/wp-content/uploads/2024/07/2am.ng-Main-Banner.jpg)] bg-no-repeat bg-cover h-[85vh] overflow-hidden flex items-center justify-center px-10">
      <div className="flex items-center justify-between gap-10 w-full max-w-6xl mt-20">

        <div
          key={currentIndex + '-text'}
          className={`
            flex-1 transform transition-all duration-700 ease-in-out w-1/5
            ${isAnimating ? 'translate-y-30 opacity-50' : 'translate-y-0 opacity-100'}
          `}
        >
            <div className="relative overflow-hidden flex flex-col gap-4 w-full">
                <h1 className="text-2xl md:text-4xl font-bold text-red-600 ">
                    {currentSlide.title}
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold ">
                    {currentSlide.subTitle}
                </h2>
                <p className="text-lg md:text-lg text-gray-900 w-[80%]">
                    {currentSlide.info}
                </p>
                <Link
                    to={currentSlide.link}
                    className="flex items-center justify-center gap-4 bg-black text-white font-bold px-6 py-4 hover:bg-shadow-2xl/20 transition duration-300 w-[40%] group"
                >
                    LEARN MORE
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                      <FaArrowRight />
                    </span>
                </Link>
                <div
                    className={`absolute inset-0 z-10 transition-transform duration-300 ease-in-out ${
                    isAnimating
                        ? slideDirection === 'next'
                          ? 'translate-y-0'
                          : 'translate-y-0'
                        : slideDirection === 'next'
                            ? 'translate-y-full'
                            : 'translate-y-full'
                    }`}
                />
            </div>
          
        </div>
        <button onClick={scrollToSection} className="absolute bottom-8 bg-black text-white  hover:bg-orange-600 transition ease-in-out duration-300 animate-bounce cursor-pointer">   
            <div className="relative overflow-hidden text-white bg-black group custom-btn">
                <FiChevronDown className="relative z-10" size={30} />
                <span className="overlay absolute inset-0 bg-orange-500 z-0"></span>
            </div>
        </button>

        <div
          key={currentIndex + '-img'}
          className={`
            flex-1 transform transition-all duration-700 ease-in-out w-1/5 bg-white
            ${
              isAnimating
                ? slideDirection === 'next'
                  ? 'opacity-50  bg-white'
                  : ' opacity-50  bg-white'
                : 'translate-x-0 opacity-100  bg-white'
            }
          `}
        >
          <div className="relative w-full h-[600px]  shadow-lg overflow-hidden">
            <img
                src={currentSlide.img}
                alt={currentSlide.subTitle}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isAnimating ? 'opacity-0' : 'opacity-100'
                    }`}
            />
            <div
                className={`absolute inset-0 bg-white z-10 transition-transform duration-300 ease-in-out ${
                isAnimating
                    ? slideDirection === 'next'
                      ? 'translate-x-0'
                      : 'translate-x-0'
                    : slideDirection === 'next'
                        ? 'translate-x-full'
                    : 'translate-x-full'
                }`}
            />
        </div>

        </div>
      </div>

      <div className="absolute bottom-15 left-259.5 transform -translate-x-1/2 flex ">
        <button
          onClick={goToPrevSlide}
          className="relative overflow-hidden bg-[#E17A1B] text-white p-3 transition ease-in-out duration-300 group custom-btn"
        >
            <FiChevronLeft className="relative z-10" size={40} />
            <span className="overlay absolute inset-0 bg-black z-0"></span>
        </button>
        <button
          onClick={goToNextSlide}
          className="relative overflow-hidden bg-[#E17A1B] text-white p-3  transition ease-in-out duration-300 group custom-btn"
        >
            <FiChevronRight className="relative z-10" size={40} />
            <span className="overlay absolute inset-0 bg-black z-0"></span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
