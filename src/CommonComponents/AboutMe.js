import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import { TypeAnimation } from "react-type-animation";
import Tild from "../components/CommonVector/Tild";

const AboutMe = () => {
  return (
    <div className="rm-aboutme">
      <Container>
        <Row>
          {/* <Tild className="left-tild" /> */}
          <Col lg={12} md={12} sm={12} className="rm-global-heading">
            <div className="rm-text-right">
              <h3>
                About Me
                <span className="">
                  <svg
                    className="title-underline"
                    viewBox="0 0 328 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 29C110 8.62517 326 -19.8996 326 29"
                      stroke="url(#paint0_linear_47_128)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_47_128"
                        x1="2.50784"
                        y1="22.0412"
                        x2="322.486"
                        y2="65.0473"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#1dcefc"></stop>
                        <stop offset="1" stopColor="#2fe9c0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h3>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="rm-content">
            <h6>Hi there !</h6>
            <h5>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "I'm Rajendra Mohanty, a MERN Stack Developer",
                  500,
                  "I'm Rajendra Mohanty, a Software Engineer",
                  500,
                  "I'm Rajendra Mohanty, a Full Stack Engineer",
                  500,
                  "I'm Rajendra Mohanty, a UI/UX Developer",
                  500,
                ]}
                speed={50}
                // style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </h5>
            <p>
              {
                " I'm Rajendra Mohanty, a Web Developer and Full Stack Developer specializing in the MERN stack. I create dynamic and responsive user interfaces using React, ensuring an engaging user experience.On the server side, I implement robust logic and APIs with Node.js and Express.js. I efficiently manage and manipulate data with MongoDB, ensuring seamless integration and performance."
              }
            </p>
            <p>
              My expertise spans both front-end and back-end development,
              allowing me to build comprehensive and high-performing web
              applications.
            </p>
            {/* <ul>
              <li className="rm-bg">
                <Link to="/">Download CV</Link>
              </li>
              <li>
                <Link to="/">Send Message</Link>{" "}
              </li>
            </ul> */}
          </Col>
          {/* <Col lg={} md={12} sm={12}></Col> */}
          <Col
            lg={6}
            md={12}
            sm={12}
            className="rm-progressbar align-self-center"
          >
            {/* <div className="rm-progressbar-single">
              <span>HTML 5 / SCSS</span>
              <div className="bar">
                <Progress percent={95} />
              </div>
            </div> */}
            <div className="rm-progressbar-single">
              <span>MUI / TailWind / BootStrap / CSS3</span>
              <div className="bar">
                <Progress percent={80} />
              </div>
            </div>
            <div className="rm-progressbar-single">
              <span>JavaScript / jQuery</span>
              <div className="bar">
                <Progress percent={85} />
              </div>
            </div>
            <div className="rm-progressbar-single">
              <span>React / Redux</span>
              <div className="bar">
                <Progress percent={95} />
              </div>
            </div>
            <div className="rm-progressbar-single">
              <span>Mongodb / Express</span>
              <div className="bar">
                <Progress percent={95} />
              </div>
            </div>
            {/* <div className="rm-progressbar-single">
              <span>Adobe XD - PhotoShop - Illustrator / Figma </span>
              <div className="bar">
                <Progress percent={80} />
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
