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

const dummyData = [
  {
    id: 1,
    title: "Robnhood nl",
    link: "https://robnhood.nl/",
    img: PROJECT1,
    tags: ["Javascript", "Web"],
  },
  {
    id: 2,
    title: "Pathlock",
    link: "https://pathlock.com/",
    img: PROJECT2,
    tags: ["React Js", "UI"],
  },
  {
    id: 3,
    title: "Q fix",
    link: "https://www.qfixinfo.com/index.php",
    img: PROJECT3,
    tags: ["Javascript", "PHP"],
  },
  {
    id: 4,
    title: "Fissara",
    link: "https://www.fissara.com/homepage/",
    img: PROJECT4,
    tags: ["Javascript", "UI"],
  },
  {
    id: 5,
    title: "True Farm Foods",
    link: "https://truefarmfoods.com/",
    img: PROJECT5,
    tags: ["Javascript", "UI"],
  },
  {
    id: 6,
    title: "Meganrachel",
    link: "https://meganrachel.com/",
    img: PROJECT6,
    tags: ["Javascript", "UI"],
  },
  {
    id: 7,
    title: "Injured Care",
    link: "https://www.injuredcare.com/",
    img: PROJECT7,
    tags: ["Javascript", "Jquery"],
  },
  {
    id: 8,
    title: "Cantabnyc",
    link: "https://www.cantabnyc.org/",
    img: PROJECT8,
    tags: ["Javascript", "BootStrap"],
  },
  // Add more dummy items here...
];

const ITEMS_PER_LOAD = 10;
const MyWork = () => {
  const location = useLocation();
  const [itemsToShow, setItemsToShow] = useState(
    dummyData.slice(0, ITEMS_PER_LOAD)
  );
  const [itemsLoaded, setItemsLoaded] = useState(ITEMS_PER_LOAD);

  const loadMore = () => {
    const newItemsLoaded = itemsLoaded + ITEMS_PER_LOAD;
    setItemsToShow(dummyData.slice(0, newItemsLoaded));
    setItemsLoaded(newItemsLoaded);
  };
  const pagesWithLoadMore = ["/portfolio", "/about", "/services"];
  const itemsToRender =
    location.pathname === "/" ? itemsToShow.slice(0, 8) : itemsToShow;

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
                {itemsToRender.map((item) => (
                  <div className="grid-item" key={item.id}>
                    <Card>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card.Img
                          variant="top"
                          src={item.img}
                          alt={item.title}
                        />
                      </a>
                      <Card.Body>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Card.Title>{item.title}</Card.Title>
                        </a>
                        <Card.Text>
                          {item.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                          ))}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          {pagesWithLoadMore.includes(location.pathname) && (
            <Col lg={12} md={12} sm={12} className="rm-content text-center">
              {itemsToShow.length < dummyData.length && (
                <Button className="loadmore" onClick={loadMore}>
                  Load more
                </Button>
              )}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default MyWork;
