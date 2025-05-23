import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchableDiv from "../components/SearchableDiv";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../store/userSlice";
import { location } from "../components/location";

const Signup = ({ onClose, openLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    title: "Mr",
    email: "",
    phoneNumber: "",
    password: "",
    retypePassword: "",
    type: "",
    terms: false,
    location: "",
  });
  const [title, setTitle] = useState(false);
  const [locations, setLocations] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, username, email, phoneNumber } = formData;

    const usernameExists = users.some((user) => user.username === username);
    const emailExists = users.some((user) => user.email === email);
    const phoneNumberExists = users.some(
      (user) => user.phoneNumber === phoneNumber
    );

    if (usernameExists) {
      toast.error("Username already taken. Please input another.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (emailExists) {
      toast.error("Email already taken. Please input another.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (phoneNumberExists) {
      toast.error("Phone Number already taken. Please input another.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!firstName || !lastName || !username || !email || !phoneNumber) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        className: "",
        autoClose: 3000,
      });
      return;
    }

    const isEmail = /\S+@\S+\.\S+/.test(email);

    if (!isEmail) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        className: " z-[100000000]",
        autoClose: 3000,
      });
      return;
    }
    const isUsername = /^[a-zA-Z0-9_]+$/.test(username);
    if (!isUsername) {
      toast.error(
        "Username can only contain letters, numbers, and underscores.",
        {
          position: "top-right",
          className: "",
          autoClose: 3000,
        }
      );
      return;
    }
    if (!/^\d{10,15}$/.test(phoneNumber)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    toast.success("Successful!", {
      position: "top-right",
      className: "",
      autoClose: 2000,
    });

    setActiveStep((prevStep) => prevStep + 1);

    console.log("Form Data after Step 1:", formData);
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    const { password, retypePassword, type, terms } = formData;

    if (!password || !retypePassword) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        className: "",
        autoClose: 3000,
      });
      return;
    }

    if (password !== retypePassword) {
      toast.error("Passwords do not match.", {
        position: "top-right",
        className: "",
        autoClose: 3000,
      });
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        position: "top-right",
        className: "",
        autoClose: 3000,
      });
      return;
    }

    if (!type) {
      toast.error("Please select a type.", {
        position: "top-right",
        className: "",
        autoClose: 3000,
      });
      return;
    }

    if (terms !== true) {
      toast.error("Please check the terms and conditions box.", {
        position: "top-right",
        className: "",
        autoClose: 3000,
      });
      return;
    }

    console.log("Dispatching signupUser with:", formData);
    dispatch(signupUser(formData));

    toast.success("Account setup complete!", {
      position: "top-right",
      autoClose: 2000,
    });

    setActiveStep(3);

    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      title: "",
      email: "",
      phoneNumber: "",
      password: "",
      retypePassword: "",
      type: "",
      terms: false,
      location: "",
    });
  };

  const handleTitle = () => {
    setTitle(!title);
  };

  const handleSelectTitle = (e) => {
    setFormData((prev) => ({ ...prev, title: e.target.value }));
    setTitle(false);
  };

  const handleLocation = () => {
    setLocations(!locations);
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full text-gray-400 px-4 py-7">
      <div className="relative flex justify-center items-center text-black w-full">
        {activeStep === 1 ? (
          <h2 className="text-3xl font-black">Let's get you started</h2>
        ) : activeStep === 2 ? (
          <h2 className="text-3xl font-black">You're almost there..</h2>
        ) : (
          <h2 className="text-3xl font-black">Congratulations</h2>
        )}
      </div>
      <div className="flex justify-center items-center text-center w-[70%] ">
        {activeStep === 1 ? (
          <p>
            Become a part of our thriving network of businesses and talents.
          </p>
        ) : activeStep === 2 ? (
          <p>
            Whether you're seeking top-tier professionals or looking to showcase
            your skills, 2am.ng is your platform to succeed.
          </p>
        ) : (
          <p>
            Thank you for joining 2am.ng community. You are one step closer to
            achieving your goals. If you have and questions, please email us at
            hello@2am.ng.
          </p>
        )}
      </div>
      <div className="flex justify-center items-center gap-5 ">
        {[1, 2, 3].map((step, index) => (
          <div className="flex justify-center items-center gap-4" key={index}>
            <div
              className={`border-2 rounded-full w-10 h-10 flex justify-center items-center ${
                activeStep === 1 && step === 1
                  ? "border-[#E17A1B] text-[#E17A1B]"
                  : activeStep > step || activeStep === 3
                  ? "border-green-400"
                  : "border-gray-300"
              }`}
            >
              {activeStep > step || activeStep === 3 ? (
                <FaCircleCheck className="text-green-400 h-10 w-10 rounded-full" />
              ) : (
                `0${step}`
              )}
            </div>
            {step !== 3 && <span className="bg-gray-300 w-8 h-[2px]"></span>}
          </div>
        ))}
      </div>
      {activeStep === 1 && (
        <div className="flex flex-col gap-15  w-full h-full">
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-2 w-full h-full text-sm"
          >
            <div className="flex">
              <div className="relative">
                <div
                  onClick={handleTitle}
                  className="border border-r-0 border-gray-300 flex gap-4 justify-center items-center p-3 cursor-pointer transition-all ease-in-out duration-500"
                >
                  <p>{formData.title}</p>
                  <HiOutlineChevronDown className="text-gray-400" />
                </div>
                {title && (
                  <div className="absolute top-15 flex flex-col gap-2 bg-white border w-full h-auto border-gray-300 rounded-lg  shadow-lg z-10 transition-all ease-in-out duration-500">
                    {["Mr", "Mrs", "Miss"].map((label) => (
                      <button
                        key={label}
                        type="button"
                        value={label}
                        onClick={handleSelectTitle}
                        className="text-left p-3 hover:bg-blue-400 hover:text-white rounded"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
              />
            </div>
            <div>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
              />
            </div>
            <div>
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Type Username"
                className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
              />
            </div>
            <div className="col-span-2">
              <input
                name="phoneNumber"
                type="number"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[#E17A1B] text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 w-[50%] "
            >
              Start Now
            </button>
          </form>
          <div className="flex justify-center items-center w-full h-full">
            <p>
              Already have an account?{" "}
              <span
                onClick={openLogin}
                className="text-[#E17A1B] cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      )}
      {activeStep === 2 && (
        <div className="flex flex-col gap-5 w-full h-auto">
          <p className="text-md">
            Please try to add strong password, minimum 6 characters
          </p>
          <form
            action="submit"
            onSubmit={handleForm2Submit}
            className="flex flex-col gap-7 w-full h-full"
          >
            <div className="grid grid-cols-2 gap-2 w-full text-sm">
              <div className="relative flex col-span-2">
                <input
                  name="Location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
                  readOnly
                />

                <button
                  type="button"
                  className="absolute right-0 top-1 border-l border-gray-300 flex items-center justify-center cursor-pointer h-6 p-5"
                  onClick={handleLocation}
                >
                  <HiOutlineChevronDown className="text-gray-400" size={20} />
                </button>

                {locations && (
                  <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                    <SearchableDiv
                      content={location}
                      onSelect={(selected) => {
                        setFormData((prev) => ({
                          ...prev,
                          location: selected,
                        }));
                        setLocation(false); // close dropdown
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="relative flex">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password*"
                  className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
                />
              </div>
              <div className="relative flex">
                <input
                  name="retypePassword"
                  type="password"
                  value={formData.retypePassword}
                  onChange={handleChange}
                  placeholder="Retype Password*"
                  className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-black">Start as:</h3>
              <div className="transition-all ease-in-out duration-500 flex flex-col w-full h-full">
                <div className="block">
                  <label className="relative h-12 flex items-center text-sm gap-2 pl-6 cursor-pointer border border-b-0 border-gray-300 p-3">
                    <input
                      type="radio"
                      name="type"
                      value="freelancer"
                      onChange={handleChange}
                      checked={formData.type === "freelancer"}
                      className="h-5 w-5 cursor-pointer accent-green-500 border-0 "
                    />
                    Freelancer{" "}
                    <span className="text-sm">
                      (Signup as freelancer & get hired)
                    </span>
                  </label>
                </div>
                <div className="block">
                  <label className="relative h-12 flex items-center text-sm gap-2 pl-6 cursor-pointer border border-gray-300 p-3">
                    <input
                      type="radio"
                      name="type"
                      value="employer"
                      onChange={handleChange}
                      checked={formData.type === "employer"}
                      className="h-5 w-5 cursor-pointer accent-green-500 border-0 "
                    />
                    Employer{" "}
                    <span className="text-sm">
                      (Signup as company/service seeker & post jobs)
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-2 ">
              <input
                type="checkbox"
                name="terms"
                onChange={handleChange}
                checked={formData.terms}
                className="w-4 h-4 border cursor-pointer border-black accent-green-400 "
              />
              <label className="text-sm text-black">
                By registering, you agree to our Terms of Service and Privacy
                Policy. We collect and process your personal data in accordance
                with applicable data protection laws, including the General Data
                Protection Regulation (GDPR). Your data will be used to
                facilitate your use of our platform and for communication
                purposes.{" "}
                <Link
                  to="/privacy-policy"
                  className="text-blue-400 cursor-pointer"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>
            <div className="flex gap-5 w-[40%] text-sm font-bold">
              <button
                onClick={() => setActiveStep(1)}
                className="bg-[#E17A1B] text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 w-[50%] "
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#E17A1B] text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 w-[50%] "
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      )}
      {activeStep === 3 && (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
          <p>Complete Your profile and gety hired</p>
          <Link
            to="/dashboard/settings/edit-profile"
            onClick={onClose}
            className="bg-[#E17A1B] flex justify-center items-center text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 "
          >
            Go to Dashboard
          </Link>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Signup;
