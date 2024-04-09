import React from "react";

const Project = ({ item }) => {
  const { projectName, title, description } = item;
  return (
    <div className="flex gap-12 w-[89%] m-auto justify-between">
      <div className="w-[35%] flex flex-col gap-8 ">
        <h1 className="text-xl leading-[24px] font-semibold">{projectName}</h1>
        <p className="text-lg leading-[21px] text-[#181717]">{title}</p>
        <p className="text-base text-[#606060]">{description}</p>
        <a className="" href="/">
          Source file
        </a>
      </div>
      <div>
        <img
          className="w-[600px]"
          src="https://www.shutterstock.com/shutterstock/photos/2128036841/display_1500/stock-vector--s-retro-vaporwave-aesthetics-digital-screen-user-interface-cute-old-computer-ui-elements-2128036841.jpg"
          alt="images"
        />
      </div>
    </div>
  );
};

export default Project;
