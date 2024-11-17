import React from "react";
import AboutMe from "../../../CommonComponents/AboutMe";
import MainSlider from "../../../CommonComponents/MainSlider";
import Services from "../../../CommonComponents/Services";
import MyWork from "../../../CommonComponents/MyWork";
import Testimonial from "../../../CommonComponents/Testimonial";
import ContactUs from "../../../CommonComponents/ContactUs";
import ClientLogo from "../../../CommonComponents/ClientLogo";

const Home = () => {
  return (
    <>
      <MainSlider />
      <AboutMe />
      <Services />
      <MyWork />
      <Testimonial />
      <ClientLogo />
      <ContactUs />
    </>
  );
};

export default Home;
