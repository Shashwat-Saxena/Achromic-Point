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
import GlobalOfficeSection from "../contact/GlobalOffice";
import IntroSection from "./Intro";

const HomeParent = () => {
  return (
    <>
      <div className=" pt-10">
        {" "}
        {/* ⛔ if using space-y, control it */}
        <main className="p-0 m-0 leading-none ">
          <HeroSection />
        </main>
        <PartnersSection />
        <FeatureCards />
        <ConferenceSection />
        <StatCounter />
        <WhyChooseSection />
        <TrainingCoursesSection />
        {/* <IntroSection /> */}
        <TestimonialSlider />
        <FAQSection />
        <GlobalOfficeSection />
        {/* <SevenCardsSection/> */}
      </div>
    </>
  );
};

export default HomeParent;
