import React from "react";
import Navbar from "../components/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="container h-[100%] mx-auto ">
      <div className="w-full">
        <Navbar />
      </div>

      {children}
    </div>
  );
};

export default MainLayout;
