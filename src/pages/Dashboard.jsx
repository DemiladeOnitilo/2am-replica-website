import React, { useState } from "react";
import Sidebar from "../components/SIdebar";
import NavBar from "../components/NavBar";
import Verification from "../components/Verification";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [closeBar, setCloseBar] = useState(false);

  const handleClose = () => {
    setCloseBar(!closeBar);
  };

  const onPage = location.pathname === "/dashboard";

  return (
    <div>
      {onPage ? (
        <div className="flex flex-col">
          <NavBar />
          <main className="p-12">
            <Outlet />
          </main>
        </div>
      ) : (
        <div className="flex w-full min-h-screen">
          <div>
            <Sidebar closeBar={closeBar} handleClose={handleClose} />
          </div>
          <div
            className={`flex flex-col ${
              closeBar ? "ml-15" : "ml-70"
            } transition-all ease-in-out duration-600`}
          >
            <NavBar />
            <main className="flex flex-col p-12 gap-5">
              <Verification />
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
