import React, { useEffect } from "react";
import { FaX } from "react-icons/fa6";

const Modal = ({ isLogin, isSignup, isOpen, children, onClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center overflow-hidden">
      <div
        className="fixed inset-0 bg-black/15 backdrop-blur-xs pointer-events-auto"
        onClick={onClose}
      ></div>

      {isLogin ? (
        <div className="bg-white rounded-xl shadow-md z-10 w-[410px] h-auto flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-full border-b border-gray-300 px-7 py-5">
            <h2 className="text-xl font-semibold">Login</h2>
            <FaX onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="flex w-full h-full">{children}</div>
        </div>
      ) : (
        isSignup && (
          <div className="relative bg-white rounded-xl shadow-md z-10 w-[730px] h-auto flex flex-col justify-center items-center">
              <FaX
                onClick={onClose}
                className="cursor-pointer absolute right-5 top-3"
              />
            <div className="flex w-full h-full ">{children}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Modal;
