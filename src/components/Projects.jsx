import React from "react";
import Project from "./Project";
import logo from "../assets/project-logo.svg";
import logo2 from "../assets/Rock2.svg";
import logo3 from "../assets/intro-logo.svg";

const project = [
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    description:
      "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    image:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    description:
      "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    image:
      "https://media.istockphoto.com/id/961633870/photo/asphalt-road-and-hills-with-clouds-landscape-at-sunset.jpg?s=612x612&w=0&k=20&c=YE3Yv6YUduNzjT8krxbG3XgSEcJHVFFnMY22caSBmf4=",
  },
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    description:
      "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    image:
      "https://media.istockphoto.com/id/1157979345/photo/road.jpg?s=612x612&w=0&k=20&c=4SGheF1vs56GMGE_GHiPPycdLF3ii-rXhwXLgqGUAFU=",
  },
];

const Projects = () => {
  return (
    <div className="mt-[15%] flex flex-col gap-16 relative">
      <img src={logo} alt="logo" className="absolute project-logo" />
      <img src={logo2} alt="logo" className="absolute project-logo-rock" />
      <img src={logo3} alt="logo" className="absolute project-logo-3" />

      {project.map((item, index) => {
        return <Project key={index} item={item} index={index} />;
      })}
    </div>
  );
};

export default Projects;
