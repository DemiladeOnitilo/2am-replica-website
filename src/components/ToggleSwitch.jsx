import { useState } from "react";

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <div>
      <label className="flex items-center space-x-2 cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={onChange}
          />
          <div
            className={`w-12 h-7 rounded-full ${
              checked ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition transform ${
              checked ? "translate-x-5" : ""
            }`}
          ></div>
        </div>
        <span className="text-sm text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
