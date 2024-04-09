import React from "react";
import Rock from "../assets/Rock.svg";

const project = [
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
  },

  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
  },
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
  },
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
  },
];

const MoreProjects = () => {
  return (
    <div className="mt-[15%] relative">
      <img className="absolute more-pro-logo" src={Rock} alt="logo" />
      <h1 className="text-5xl w-[90%] m-auto mb-12 leading-[62px] font-medium text-[#181717]">
        More Projects
      </h1>
      <div className="grid grid-cols-2 gap-y-16">
        {project.map((item, index) => {
          return <MoreProject key={item} item={item} />;
        })}
      </div>
    </div>
  );
};

const MoreProject = ({ item }) => {
  const { projectName, title, description } = item;
  return (
    <div className="w-[80%] m-auto">
      <div>
        <img
          className=" more-project-image"
          src="https://www.shutterstock.com/shutterstock/photos/2128036841/display_1500/stock-vector--s-retro-vaporwave-aesthetics-digital-screen-user-interface-cute-old-computer-ui-elements-2128036841.jpg"
          alt="images"
        />
      </div>
      <div className="flex flex-col gap-4 ">
        <h1 className="text-lg leading-[21px] font-semibold mt-4 ml-1 ">
          {projectName}
        </h1>
        <p className="text-base leading-[21px] text-[#606060] ml-1">{title}</p>
      </div>
    </div>
  );
};

export default MoreProjects;
