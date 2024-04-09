import React from "react";
import Rock from "../assets/Rock.svg";

const project = [
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    image:
      "https://www.befunky.com/images/wp/wp-2020-03-black-and-white-photos-with-color-14.jpg?auto=avif,webp&format=jpg&width=944",
  },

  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    image:
      "https://images.unsplash.com/photo-1481126952208-cc3a6eaf68b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw0NjE2MzkzfHxlbnwwfHx8fHw%3D&w=1000&q=80",
  },
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    image:
      "https://images.unsplash.com/photo-1604542031658-5799ca5d7936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80",
  },
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    image:
      "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D",
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
  const { projectName, title, image } = item;
  return (
    <div className="w-[80%] m-auto">
      <div>
        <img className=" more-project-image" src={image} alt="images" />
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
