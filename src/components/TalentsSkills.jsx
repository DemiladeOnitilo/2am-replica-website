import React from "react";
import { Link } from "react-router-dom";

const TalentsSkills = () => {
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center gap-2 mt-20">
        <h1 className="text-4xl font-bold">Find Talents by Skills</h1>
      </div>
      <div className="w-fit mx-auto grid grid-cols-4  items-center">
        {[
          "Scrum Framework",
          "Product Lifecycle Management",
          "Design Systems",
          "Frontend Technologies",
          "Backend Technologies",
          "Mobile UI/UX Design",
        ].map((skill) => (
          <Link
            key={skill}
            to="/find-talents"
            className={`border border-gray-100 flex justify-center items-center text-center font-semibold hover:shadow-xl/20 transition-all duration-300 p-5 ${ isHome ? "h-[300px] w-[400px]" : "h-[300px] w-[250px]"}`}
          >
            <h1>{skill}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TalentsSkills;
