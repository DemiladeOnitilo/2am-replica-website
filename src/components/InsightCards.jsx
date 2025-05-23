import React from "react";
import { Link } from "react-router-dom";

const InsightCards = ({ img, title, to, toMessage }) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-3 p-8 shadow-[0_0_15px_rgba(0,0,0,0.15)]">
      <img src={img} alt={title} className="h-15 w-15" />
      <h1 className="text-xl">{title}</h1>
      <Link to={to} className="text-sm text-blue-300">
        {toMessage}
      </Link>
    </div>
  );
};

export default InsightCards;
