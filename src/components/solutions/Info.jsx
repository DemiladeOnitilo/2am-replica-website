import React from "react";

const Info = ({ title, para1, para2, id }) => {
  return (
    <div id={id} className="relative h-[65vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url(https://2am.ng/wp-content/uploads/2024/07/vision.png)] bg-no-repeat bg-cover scale-140 opacity-20 h-full"></div>
      <div className="relative flex flex-col px-5 gap-15 z-10 w-[58%] text-left ml-60">
        <h1 className="text-7xl font-semibold">{title}</h1>
        <div className="text-lg flex flex-col gap-5">
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
