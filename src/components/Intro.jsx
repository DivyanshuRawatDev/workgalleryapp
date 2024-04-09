import React from "react";
import logo from "../assets/intro-logo.svg";

const Intro = () => {
  return (
    <div className="flex justify-around mt-[8%] items-center relative w-[98%]">
      <img src={logo} className="absolute intro-logo" alt="logo" />
      <div className="m-0">
        <h1 className="text-[#181717] text-6xl w-[40%] font-medium leading-[76px] ml-16">
          Hello, I'm Andres Gallardo
        </h1>
      </div>
      <div className="">
        <p className="text-3xl text-[#606060] w-[508px] leading-[37px] mr-4 font-normal">
          Unleash Creativity, Capture Vision:
        </p>
        <p className="text-3xl text-[#606060] w-[400px] leading-[37px] mr-4 font-normal">
          Your Journey Through My Portfolio Begins Here.
        </p>
      </div>
    </div>
  );
};

export default Intro;
