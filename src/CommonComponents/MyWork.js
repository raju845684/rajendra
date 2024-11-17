import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import { TypeAnimation } from "react-type-animation";
import Isotope from "isotope-layout";
import { useEffect } from "react";
import {
  PROJECT1,
  PROJECT2,
  PROJECT3,
  PROJECT4,
  PROJECT5,
  PROJECT6,
  PROJECT7,
} from "../assets/images";

const MyWork = () => {
  const gridRef = useRef(null);
  const [isotope, setIsotope] = useState(null);
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(gridRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      isotope.arrange({ filter: activeFilter });
    }
  }, [isotope, activeFilter]);

  const filters = [
    { label: "Show All", filter: "*" },
    { label: "Mobile App", filter: ".category-a" },
    { label: "React App", filter: ".category-b" },
    { label: "Web Design", filter: ".category-c" },
    { label: "Adobe XD", filter: ".category-d" },
  ];

  return (
    <div className="rm-work">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="rm-global-heading">
            <div className="rm-text-right">
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
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} className="rm-content">
            <div>
              <div className="all_btn">
                {filters.map(({ label, filter }) => (
                  <Button
                    key={filter}
                    className={activeFilter === filter ? "active" : ""}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {label}
                  </Button>
                ))}
              </div>

              <div className="grid" ref={gridRef}>
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyWork;
