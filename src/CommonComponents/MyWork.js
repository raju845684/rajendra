import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import { TypeAnimation } from "react-type-animation";
import Isotope from "isotope-layout";
import { useEffect } from "react";

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
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQm_C9onpbbzSaz-LptOxBLdA_aN0GYFJF1w&s"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-b">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB49M0pdVDAZhbn1B7rSH7QRCBrsPtJNDAA&s"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-a">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://www.crio.do/blog/content/images/2021/03/Javascript-projects--React.png"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-b">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLpuy336hDvu-QK8oCOodA9wl8kc4a9-uIQ&s"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-a">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-b">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1-jXtv_I05r-Dch2eZOevIzOUzu6osLftQ&s"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="grid-item category-c">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRanLrxpNO1zUdLvrSdL7cIOVof19tT8JDqA&s"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
