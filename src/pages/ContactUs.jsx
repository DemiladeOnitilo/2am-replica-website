import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      // Remove error if fixed
      if (name === "name" && value.trim() !== "") {
        delete newErrors.name;
      }

      if (name === "email") {
        if (value.trim() === "") {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Email address is invalid";
        } else {
          delete newErrors.email;
        }
      }

      if (name === "message" && value.trim() !== "") {
        delete newErrors.message;
      }

      return newErrors;
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors in the form before submitting.", {
        position: "top-right",
        className: "mt-40",
        autoClose: 3000,
      });
      return; 
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);

      toast.success("Message Sent Successfully!", {
        position: "top-right",
        className: "mt-40",
        autoClose: 2000,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <div className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url(https://2am.ng/wp-content/uploads/2024/07/vision.png)] bg-no-repeat bg-cover scale-160 opacity-20 h-full"></div>
        <div className="relative flex flex-col px-5 gap-7 z-10 text-left ml-60 w-[60%] text-xl mt-20">
          <h1 className="text-7xl font-semibold">We're here to help!</h1>
          <p>
            Whether you’re an employer seeking top talent, a skilled
            professional looking for new opportunities, or have general
            inquiries, we’re ready to assist you.
          </p>
          <p>
            Reach us via the contact details below, or simply leave a message!
          </p>
          <div>
            <h3 className="text-gray-500 font-bold">2AM TECH Limited</h3>
            <p>🏠 160, Awolowo Way, Ikoyi, Lagos</p>
            <p>📧 business@2am.ng</p>
          </div>
        </div>
      </div>
      <div className="relative h-auto flex justify-center overflow-hidden bg-[#E17A1B]">
        <div className="absolute inset-0 z-0 bg-[url(https://2am.ng/wp-content/uploads/2024/08/1687910072_en-idei-club-p-orange-technology-dizain-krasivo-4-1.jpg)] bg-no-repeat bg-cover transform opacity-20"></div>
        <div className="relative flex flex-col items-center my-30 px-5 gap-7 z-10 text-left w-[60%] text-md">
          <div className="text-white font-bold w-[40%] text-center">
            <h1 className="text-6xl">Leave us a message</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white w-[50%] h-auto p-15"
          >
            <p>
              Fields marked with an <span className="text-red-500">*</span> are
              required
            </p>
            <div className="relative flex flex-col gap-3">
              <label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                className={`border border-gray-300 bg-gray-100 h-15 outline-none pl-9 ${
                  errors.name
                    ? "border-red-500"
                    : formData.name
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              {errors.name && (
                <div className="absolute top-9 right-0 bg-red-500 h-15 py-4 px-6 transition-all ease-in-out duration-300">
                  <p className="font-black text-2xl text-white">!</p>
                </div>
              )}
              {formData.name && !errors.name && (
                <div className="absolute top-9 right-0 text-green-500 py-4 px-6 transition-all ease-in-out duration-300">
                  <FaCircleCheck className="text-green-500" size={30} />
                </div>
              )}
            </div>
            <div className="relative flex flex-col gap-3">
              <label htmlFor="name">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                className={`border border-gray-300 bg-gray-100 h-15 outline-none pl-9 ${
                  errors.email
                    ? "border-red-500"
                    : formData.email
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              {errors.email && (
                <div className="absolute top-9 right-0 bg-red-500 h-15 py-4 px-6 transition-all ease-in-out duration-300">
                  <p className="font-black text-2xl text-white">!</p>
                </div>
              )}
              {formData.email && !errors.email && (
                <div className="absolute top-9 right-0 text-green-500 py-4 px-6 transition-all ease-in-out duration-300">
                  <FaCircleCheck className="text-green-500" size={30} />
                </div>
              )}
            </div>
            <div className="relative flex flex-col gap-3">
              <label htmlFor="name">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                type="text"
                onChange={handleChange}
                value={formData.message}
                className={`border border-gray-300 bg-gray-100 h-40 outline-none pl-9 pt-9 resize-y ${
                  errors.message
                    ? "border-red-500"
                    : formData.message
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
              {errors.message && (
                <div className="absolute top-9 right-0 bg-red-500 h-15 py-4 px-6 transition-all ease-in-out duration-300">
                  <p className="font-black text-2xl text-white">!</p>
                </div>
              )}
              {formData.message && !errors.message && (
                <div className="absolute top-9 right-0 text-green-500 py-4 px-6 transition-all ease-in-out duration-300">
                  <FaCircleCheck className="text-green-500" size={30} />
                </div>
              )}
            </div>

            <button
              className="bg-black text-white px-2 py-4 transition duration-300 ease-in-out transform hover:shadow-2xl/20  cursor-pointer w-1/2 font-bold"
            >
              <p>Submit</p>
            </button>
            {(errors.message || errors.name || errors.email) && (
              <p className="text-red-500">
                Please correct errors before submitting this form.
              </p>
            )}
            <div>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
