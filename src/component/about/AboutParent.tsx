import React from "react";
import MissionVisionValues from "./ThreeCards";
import AboutPage from "./About";
import StatCounter from "./CountUp";

const AboutParent = () => {
  return (
    <>
      <AboutPage />
      <MissionVisionValues />
      < StatCounter />
    </>
  );
};

export default AboutParent;
