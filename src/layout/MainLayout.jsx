import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const MainLayout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard")

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [location]);

  const openSignup = () => {
    setIsSignupOpen(true);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className=" rounded-full  shadow-2xl/200 bg-white">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar openLogin={() => setIsLoginOpen(true)} openSignup={openSignup} />}
      <main className="flex-grow">
        <Outlet context={{openSignup}} />
      </main>
      {isLoginOpen && (
        <Modal
          isOpen={isLoginOpen}
          isLogin={true}
          onClose={() => setIsLoginOpen(false)}
        >
          <Login
            openSignup={openSignup}
            onClose={() => setIsLoginOpen(false)}
          />
        </Modal>
      )}
      {isSignupOpen && (
        <Modal
          isOpen={isSignupOpen}
          isSignup={true}
          onClose={() => setIsSignupOpen(false)}
        >
          <Signup
            openLogin={openLogin}
            onClose={() => setIsSignupOpen(false)}
          />
        </Modal>
      )}

      {!isDashboard && <Footer openSignup={openSignup} />}
    </div>
  );
};

export default MainLayout;
