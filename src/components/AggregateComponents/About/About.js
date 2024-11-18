import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutMe from "../../../CommonComponents/AboutMe";
import Services from "../../../CommonComponents/Services";
import MyWork from "../../../CommonComponents/MyWork";
import Testimonial from "../../../CommonComponents/Testimonial";
import ClientLogo from "../../../CommonComponents/ClientLogo";
import ContactUs from "../../../CommonComponents/ContactUs";
import DetailsHeader from "../../../CommonComponents/DetailsHeader";

const About = () => {
  return (
    <>
      <DetailsHeader pageName={"About"}/>
      <AboutMe />
      <Services />
      <MyWork />
      <Testimonial />
      <ClientLogo />
      <ContactUs />
    </>
  );
};

export default About;
