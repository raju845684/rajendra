import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "David",
      role: "Marketing Manager",
      image:
        "https://innius.com/wp-content/uploads/2018/02/Olav-with-bkgrd-785x1030.jpg",
      text: "Working with this team has been a game-changer. Their support system is absolutely unparalleled, and their solutions truly stand out effortlessly!",
    },
    {
      id: 2,
      name: "Anna",
      role: "Designer",
      image:
        "https://innius.com/wp-content/uploads/2018/02/Erik-with-bkgrd-785x1030.jpg",
      text: "They set the gold standard for excellence. We've been relying on their unmatched expertise, and they've never let us down confidently.",
    },
    {
      id: 3,
      name: "John",
      role: "Software Engineer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ivwcBgmGtt15t8FfrmVcERcgaY2ajg1J-g&s",
      text: "Exceptional in every way! Their dedication, creativity, and outstanding support are the reasons we trust them completely and wholeheartedly.",
    },
    {
      id: 4,
      name: "Sophia",
      role: "HR Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLXGVOByPdPaKy75tt5W3ege8iewGhx8GD2DrND8oD1iGyNiU4jjQSL9aktTukOXSETA&usqp=CAU",
      text: "A true industry leader. Their professionalism, reliability, and innovative ideas are unmatched, making them our top choice every time.",
    },
    {
      id: 5,
      name: "Chris",
      role: "CEO",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vLVc3SR98zLY_7weH19vsN2efd_VcxrJCg&s",
      text: "We’ve worked with many teams, but none as efficient, supportive, proactive, and innovative as this one. Highly recommend them confidently!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate the testimonials array to place the active one first
  const rotatedTestimonials = [
    testimonials[activeIndex],
    ...testimonials.slice(0, activeIndex),
    ...testimonials.slice(activeIndex + 1),
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

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
          <Col lg={12} md={12} sm={12}>
            <div className="testimonial-container">
              <div className="circle-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="circle-layout-svg"
                  viewBox="0 0 484.562 484.562"
                >
                  <g
                    id="Ellipse_297"
                    data-name="Ellipse 297"
                    transform="translate(181.873) rotate(31)"
                    fill="none"
                    stroke="#1dcefc"
                    strokeWidth="1"
                    strokeDasharray="15 10"
                  >
                    <ellipse
                      cx="176.563"
                      cy="176.563"
                      rx="176.563"
                      ry="176.563"
                      stroke="none"
                    />
                    <ellipse
                      cx="176.563"
                      cy="176.563"
                      rx="176.063"
                      ry="176.063"
                      fill="none"
                    />
                  </g>
                </svg>

                {rotatedTestimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`circle-item ${
                      index === 0 ? "active" : "" // Fix active on the right
                    }`}
                    style={{
                      transform: `rotate(${
                        (360 / rotatedTestimonials.length) * index
                      }deg) translate(150px) rotate(-${
                        (360 / rotatedTestimonials.length) * index
                      }deg)`,
                      transition: "all 0.6s ease",
                    }}
                    onClick={() =>
                      handleClick(testimonials.indexOf(testimonial))
                    }
                  >
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                ))}
              </div>
              <div className="testimonial-content">
                <FaPlay className="play" />
                <div className="relative">
                  <p>{testimonials[activeIndex].text}</p>
                  <h4>{testimonials[activeIndex].name}</h4>
                  <span>{testimonials[activeIndex].role}</span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rectangle"
                  viewBox="0 0 660 197"
                >
                  <g
                    id="Rectangle_46"
                    data-name="Rectangle 46"
                    fill="none"
                    stroke="#1dcefc"
                    strokeWidth="1"
                    strokeDasharray="10 5"
                  >
                    <rect width="660" height="197" rx="15" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="659"
                      height="156"
                      rx="8.5"
                      fill="none"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
