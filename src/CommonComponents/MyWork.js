import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  PROJECT1,
  PROJECT2,
  PROJECT3,
  PROJECT4,
  PROJECT5,
  PROJECT6,
  PROJECT7,
  PROJECT8,
} from "../assets/images";
import Tild from "../components/CommonVector/Tild";

const MyWork = () => {
  const location = useLocation();
  return (
    <div className="rm-work">
      <Container>
        <Row>
          {location.pathname !== "/portfolio" && <Tild className="left-tild" />}
          <Col lg={12} md={12} sm={12} className="rm-global-heading">
            <div className="rm-text-right">
              {location.pathname !== "/portfolio" && (
                <h3>
                  My Work
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
              )}
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} className="rm-content">
            <div>
              <div className="grid">
                <div className="grid-item category-a">
                  <Card>
                    <a href={"https://robnhood.nl/"} target="_blank">
                      <Card.Img variant="top" src={PROJECT1} alt="" />
                    </a>
                    <Card.Body>
                      <a href={"https://robnhood.nl/"} target="_blank">
                        <Card.Title>Robnhood nl</Card.Title>
                      </a>
                      <Card.Text>
                        <span>Robnhood nl</span>, <span>UI</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-b">
                  <Card>
                    <a href={"https://pathlock.com/"} target="_blank">
                      <Card.Img variant="top" src={PROJECT2} alt="" />
                    </a>
                    <Card.Body>
                      <a href={"https://pathlock.com/"} target="_blank">
                        <Card.Title>Pathlock</Card.Title>
                      </a>
                      <Card.Text>
                        <span>Robnhood nl</span>, <span>UI</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-a">
                  <Card>
                    <a
                      href={"https://www.qfixinfo.com/index.php"}
                      target="_blank"
                    >
                      <Card.Img variant="top" src={PROJECT3} alt="" />
                    </a>
                    <Card.Body>
                      <a
                        href={"https://www.qfixinfo.com/index.php"}
                        target="_blank"
                      >
                        <Card.Title>Q fix </Card.Title>
                      </a>
                      <Card.Text>
                        <span>Web</span>, <span>UI</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-b">
                  <Card>
                    <a
                      href={"https://www.fissara.com/homepage/"}
                      target="_blank"
                    >
                      <Card.Img variant="top" src={PROJECT4} alt="" />
                    </a>
                    <Card.Body>
                      <a
                        href={"https://www.fissara.com/homepage/"}
                        target="_blank"
                      >
                        <Card.Title>fissara</Card.Title>
                      </a>
                      <Card.Text>
                        <span>Web</span>, <span>UI</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-a">
                  <Card>
                    <a href={"https://truefarmfoods.com/"} target="_blank">
                      <Card.Img variant="top" src={PROJECT5} alt="" />
                    </a>
                    <Card.Body>
                      <a href={"https://truefarmfoods.com/"} target="_blank">
                        <Card.Title>True Farm Foods</Card.Title>
                      </a>
                      <Card.Text>
                        <span>Web</span>, <span>UI</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-b">
                  <Card>
                    <a href={"https://meganrachel.com/"} target="_blank">
                      <Card.Img variant="top" src={PROJECT6} alt="" />
                    </a>
                    <Card.Body>
                      <a href={"https://meganrachel.com/"} target="_blank">
                        <Card.Title>Meganrachel</Card.Title>
                      </a>
                      <Card.Text>
                        <span>Web</span>, <span>UI</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-c">
                  <Card>
                    <a href={"https://www.injuredcare.com/"} target="_blank">
                      <Card.Img variant="top" src={PROJECT7} alt="" />
                    </a>
                    <Card.Body>
                      <a href={"https://www.injuredcare.com/"} target="_blank">
                        <Card.Title>Injured Care</Card.Title>
                      </a>
                      <Card.Text>
                        <span>Web</span>, <span>UI</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-c">
                  <Card>
                    <a href={"https://www.cantabnyc.org/"} target="_blank">
                      <Card.Img variant="top" src={PROJECT8} alt="" />
                    </a>
                    <Card.Body>
                      <a href={"https://www.cantabnyc.org/"} target="_blank">
                        <Card.Title>Cantabnyc</Card.Title>
                      </a>
                      <Card.Text>
                        <span>Web</span>, <span>UI</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyWork;
