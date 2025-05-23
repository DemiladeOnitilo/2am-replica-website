import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center items-center gap-2 mt-20">
        <h1 className="text-4xl font-bold">Top Satisfied Clients</h1>
      </div>
      <div className="mx-auto w-[60%] px-4">
        <Slider {...settings}>
          {[
            "https://2am.ng/wp-content/uploads/2024/07/customer-logo-8.png",
            "https://2am.ng/wp-content/uploads/2024/07/customer-logo-2.png",
            "https://2am.ng/wp-content/uploads/2024/07/customer-logo-5.png",
            "https://2am.ng/wp-content/uploads/2024/07/customer-logo-7.png",
            "https://2am.ng/wp-content/uploads/2024/07/Logos-mtn.jpg",
            "https://2am.ng/wp-content/uploads/2024/07/Logos-atos.jpg",
            "https://2am.ng/wp-content/uploads/2024/07/customer-logo-6.png",
            "https://2am.ng/wp-content/uploads/2024/08/Simartis-logo-e1722945120550.png",
            "https://2am.ng/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-10.29.23.jpeg",
            "https://2am.ng/wp-content/uploads/2024/07/Logos-Glo.jpg",
            "https://2am.ng/wp-content/uploads/2024/07/Logos-axa.png",
          ].map((logo) => (
            <div key={logo} className="flex justify-center items-center p-2">
              <img
                src={logo}
                alt="client logo"
                className="h-20 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
