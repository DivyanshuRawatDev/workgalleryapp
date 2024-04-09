import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import MoreProjects from "../components/MoreProjects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <MoreProjects />
      <Footer />
    </div>
  );
};

export default Home;
