import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userSlice";

const Login = ({ openSignup, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setKeepSignedIn(checked);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Validate input fields
    if (!email || !password) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const isEmail = /\S+@\S+\.\S+/.test(email);
    if (!isEmail) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Users in localStorage:", users);

    // Check for matching user
    const foundUser = users.find(
      (user) =>
        (user.email === email || user.username === email) && // Allow login with email or username
        user.password === password
    );
    console.log("Found User:", foundUser);

    if (!foundUser) {
      toast.error("Invalid email, username, or password.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Dispatch login action
    dispatch(loginUser({ email, password }));

    if (keepSignedIn) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      sessionStorage.removeItem("loggedInUser");
    } else {
      sessionStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      localStorage.removeItem("loggedInUser");
    }

    toast.success("Logged in successfully!", {
      position: "top-right",
      autoClose: 2000,
    });

    // Close modal and navigate to dashboard
    onClose();
    navigate("/dashboard/settings/edit-profile");
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 w-full h-full border-b border-gray-300 px-8 py-7"
      >
        <div className="flex flex-col gap-4 w-full h-full">
          <input
            name="email"
            type="text" // Changed to "text" to allow username or email
            value={formData.email}
            onChange={handleChange}
            placeholder="Type email or username"
            className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 p-3 outline-none rounded focus:border-[#E17A1B] transition-all ease-in-out duration-500"
          />
        </div>
        <div className="flex flex-col gap-4 w-[45%] items-left">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="w-4 h-4 border border-black accent-green-400 "
              checked={keepSignedIn}
              onChange={handleChange}
              name="keepSignedIn"
            />
            <label htmlFor="keepSignedIn" className="text-xs">
              Keep me logged in
            </label>
          </div>

          <button
            className="bg-[#E17A1B] text-white font-bold px-8 py-2 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 "
          >
            Log In
          </button>
        </div>
      </form>

      <div>
        <ToastContainer />
      </div>

      <div className="flex flex-col justify-center items-center gap-2 w-full h-full px-15 py-7">
        <p className="text-xs text-gray-500 text-center leading-loose">
          By registering, you agree to our Terms of Service and Privacy Policy.
          We collect and process your personal data in accordance with
          applicable data protection laws, including the General Data Protection
          Regulation (GDPR). Your data will be used to facilitate your use of
          our platform and for communication purposes.{" "}
          <Link to="/privacy-policy" className="text-blue-400 cursor-pointer">
            Terms & Conditions
          </Link>
        </p>
      </div>

      <div className="flex items-center text-xs w-full h-full border-t border-gray-300">
        <button
          onClick={openSignup}
          className="cursor-pointer border-r border-gray-300 px-9 py-6"
        >
          <p>
            Not a member? <span className="text-blue-400">Signup Now</span>
          </p>
        </button>
        <button className="cursor-pointer px-9 py-6">
          <p className="text-blue-400">Reset password?</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
