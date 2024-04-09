import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between mr-6 items-center">
      <img src={logo} alt="logo" />
      <div className="flex gap-8 text-2xl font-semibold">
        <a href="/">Work</a>
        <a href="/">Platform</a>
        <a href="/">Profile</a>
      </div>
    </div>
  );
};

export default Navbar;
