import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Testimonial = () => {
  return (
    <div className="rm-testimonial">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Col lg={12} md={12} sm={12} className="rm-global-heading">
              <div className="rm-text-left">
                <h3>
                  Testimonial
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
