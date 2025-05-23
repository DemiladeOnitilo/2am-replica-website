import React from "react";
import { Link } from "react-router-dom";
import TalentsContainer from "../components/TalentsContainer";
import TalentsSkills from "../components/TalentsSkills";
import Clients from "../components/Clients";

const SearchedTalent = () => {
  return (
    <div className="my-20">
      <div className="bg-[url(https://2am.ng/wp-content/uploads/2024/09/Main-Background-2am.ng_.jpg)] bg-no-repeat bg-cover h-[40vh] text-white flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-black mt-30">Discover Talents</h1>
        <div className="flex gap-3 text-lg">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          {" / "}
          <p>Discover Talents</p>
        </div>
      </div>
        <TalentsContainer />
        <TalentsSkills />
        <Clients />
    </div>
  );
};

export default SearchedTalent;
