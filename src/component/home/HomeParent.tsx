import React from "react";
import HeroSection from "./Hero";
import FeatureCards from "./Cards";
import ConferenceSection from "./Confrences";
import TrainingCoursesSection from "./TrainningCourse";
// import SevenCardsSection from "./SevenCards";
import FAQSection from "@/@/component/faq/FAQ";
import WhyChooseSection from "@/@/component/home/Whychoose";
import TestimonialSlider from "./Testinomial";
import PartnersSection from "./Partners";
import StatCounter from "@/@/component/about/CountUp";

const HomeParent = () => {
  return (
    <>
      <div className="p-0 m-0 leading-none pt-10">
        {" "}
        {/* ⛔ if using space-y, control it */}
        <HeroSection />
        <FeatureCards />
        <PartnersSection />
        <ConferenceSection />
        <StatCounter />
        <WhyChooseSection />
        <TrainingCoursesSection />
        <TestimonialSlider />
        <FAQSection />
        {/* <SevenCardsSection/> */}
      </div>
    </>
  );
};

export default HomeParent;
