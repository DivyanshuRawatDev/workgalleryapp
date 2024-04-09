import React from "react";
import Project from "./Project";

const project = [
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    description:
      "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
  },

  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    description:
      "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
  },
  {
    projectName: "01/PROJECT NAME",
    title:
      "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
    description:
      "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
  },
];

const Projects = () => {
  return (
    <div className="mt-[15%] flex flex-col gap-16">
      {project.map((item, index) => {
        return <Project key={index} item={item} />;
      })}
    </div>
  );
};

export default Projects;
