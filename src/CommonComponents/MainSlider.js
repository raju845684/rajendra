import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { RAENDRA } from "../assets/images";

const MainSlider = () => {
  return (
    <div className="rm-main-slider">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="rm-content">
            <div className="rm-info">
              <h5>Hello</h5>
              <h1>
                <strong>I'am Rajendra</strong>
                <strong></strong>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "MERN Stack Developer",
                    5000,
                    "Software Engineer",
                    5000,
                    "Full Stack Engineer",
                    5000,
                    "UI/UX Developer",
                    5000,
                  ]}
                  speed={50}
                  // style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </h1>

              <p>
                As a Full Stack Engineer in the MERN stack, I architect and
                develop robust web applications using MongoDB, Express.js,
                React, and Node.js. Leveraging my expertise in both front-end
                and back-end technologies, I ensure seamless integration,
                optimal performance, and exceptional user experience. I pride
                myself on delivering top-notch solutions tailored to meet client
                requirements and consistently exceed expectations with
                innovative approaches and attention to detail.
              </p>
              <ul>
                <li className="rm-bg">
                  <a href="mailto:raju845684@gmail.com?subject=Hiring Inquiry&body=Hello,%20I%20would%20like%20to%20hire%20you.">
                    Hire Me
                  </a>{" "}
                </li>
                <li>
                  <a href="/Rajendara-Resume.pdf" download="Rajendara-resume">
                    Download CV
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="rm-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="367"
                height="413"
                viewBox="0 0 367 413"
              >
                <g transform="translate(-242 -562)">
                  <rect
                    width="355"
                    height="395"
                    transform="translate(242 580)"
                    fill="#1e4748"
                  />
                  <rect
                    width="353"
                    height="398"
                    transform="translate(256 562)"
                    fill="#090a1a"
                  />
                </g>
              </svg>
            </div>
          </Col>
          <img src={RAENDRA} alt="rajend" className="rajendra-photo" />
          <Col lg={6} md={12} sm={12} className="rm-icon">
            {/* <MainProfile /> */}

            <div className="rm-doots">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="254"
                height="518"
                viewBox="0 0 254 518"
              >
                <g transform="translate(-41 -401)">
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(41 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(63 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(85 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(107 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(129 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(151 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(173 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(195 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(217 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(239 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(261 907)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 401)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 489)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 577)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 665)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 753)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 841)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 423)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 511)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 599)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 687)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 775)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 863)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 445)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 533)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 621)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 709)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 797)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 885)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 467)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 555)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 643)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 731)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 819)"
                    fill="#484848"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="translate(283 907)"
                    fill="#484848"
                  />
                </g>
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainSlider;
