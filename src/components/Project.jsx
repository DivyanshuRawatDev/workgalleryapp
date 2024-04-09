import React from "react";
import logo from "../assets/click.svg";

const Project = ({ item, index, size }) => {
  const { projectName, title, description, image } = item;
  console.log(size);
  return (
    <>
      {index !== 0 ? <hr className="bg-black h-[2px] w-[89%] m-auto" /> : ""}
      <div className="flex gap-12 w-[89%] m-auto justify-between">
        <div className="w-[35%] flex flex-col gap-8 ">
          <h1 className="text-xl leading-[24px] font-semibold">
            {projectName}
          </h1>
          <p className="text-lg leading-[21px] text-[#181717]">{title}</p>
          <p className="text-base text-[#606060]">{description}</p>
          <a className="mt-16 underline" href="/">
            Source file ↗
          </a>
        </div>
        <div className="relative">
          <a href="/">
            <img src={logo} alt="logo" className="absolute arrow-logo" />
          </a>
          <img className="w-[600px] project-img " src={image} alt="images" />
        </div>
      </div>
    </>
  );
};

export default Project;
