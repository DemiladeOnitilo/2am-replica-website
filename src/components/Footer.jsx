import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = ({ openSignup }) => {
  return (
    <div className="flex flex-col items-center-center bg-black text-white h-auto pl-[450px]">
      <div className=" flex mt-20">
        <div className="w-[35%] flex flex-col gap-5 text-lg text-semibold">
          <Link>
            <img
              src="https://2am.ng/wp-content/uploads/2024/07/logo-removebg-White.png"
              alt="2am Logo"
              className="h-[40px]"
            />
          </Link>
          <p>
            At 2AM TECH Limited, your business success is our priority. We
            provide top-tier talent solutions tailored to your unique needs,
            ensuring you have access to the best professionals through our
            expertise in talent acquisition, recruitment process outsourcing,
            and workforce management.
          </p>
          <p>
            Our personalized approach, innovative strategies, and commitment to
            excellence make us the trusted partner you need to thrive in a
            competitive market. Additionally, we deliver comprehensive business
            automation and ERP solutions to streamline your operations and boost
            efficiency.
          </p>
          <p>
            Email us at{" "}
            <span className="text-[#E17A1B]">
              <a href="mailto:business@2am.ng">business@2am.ng</a>
            </span>
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/">
              <FaLinkedin size={25} />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook size={25} />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter size={25} />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube size={25} />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
        <span className="h-[240px] w-[1px] rounded bg-gray-200 mx-8"></span>
        <div className="flex gap-30">
          <div>
            <h1 className="text-xl font-semibold">Find Talents</h1>
            {[
              "Talents in Nigeria",
              "Talents in Ghana",
              "Talents in South Africa",
              "Talents in Kenya",
              "Talents in Rwanda",
              "Talents in Canada",
              "+ View All",
            ].map((skill) => (
              <div
                key={skill}
                className="hover:text-[#E17A1B] hover:translate-x-4 transition-all ease-in-out duration-400"
              >
                <ul>
                  <li className="mt-2 text-lg">
                    <Link to="/find-talents">{skill}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-xl font-semibold">Company</h1>
            {[
              { id: 1, name: "About Us", link: "/about-us" },
              { id: 2, name: "How It Works", link: "/how-it-works" },
              { id: 3, name: "Free Consultation", link: "/free-consultation" },
              { id: 4, name: "Resources", link: "/resources" },
              {
                id: 5,
                name: "Terms & Conditions",
                link: "/terms-&-conditions",
              },
              { id: 6, name: "Privacy Policy", link: "/privacy-policy" },
            ].map((skill, index) => (
              <div
                key={index}
                className="hover:text-[#E17A1B] hover:translate-x-4 transition-all ease-in-out duration-400"
              >
                <ul>
                  <li className="mt-2">
                    <Link to={skill.link}>{skill.name}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mt-20 text-lg text-semibold w-[75%]">
        <p>
          By joining 2AM TECH Limited, you get one step closer to finding the
          next role or gig that will advance your career and connecting with
          other talented African IT experts in our community. Good luck!
        </p>
        <button
          onClick={openSignup}
          className="bg-flex items-center justify-center gap-4 bg-[#E17A1B] rounded text-white font-bold px-11 py-4 hover:shadow-2xl/40 transition duration-300 ml-[80%] cursor-pointer"
        >
          Join Now
        </button>
      </div>
      <div className="flex justify-between w-[80%] mt-20 mb-5">
        <p>Copyright © 2025 2AM TECH Limited, All Right Reserved</p>
        <div className="flex gap-3">
          <Link to="/News">News</Link>
          <Link to="/about-us">About</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
