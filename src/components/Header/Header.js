import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import LOGO from "../../assets/images/rajendra.svg";
import { Link, useLocation } from "react-router-dom";
import { getHeader } from "../../api/header";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const [menuActive, setMenuState] = useState(false);
  const [navbarData, setNavbarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation(); // Use this hook to get the current location
  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = (checked) => {
    if (checked) {
      document.querySelector("body").setAttribute("dark-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("dark-theme", "light");
    }
    setDarkMode(checked);
  };

  const toggleHandler = () => {
    setMenuState((prevMenuActive) => !prevMenuActive);
  };

  console.log("isDarkMode", isDarkMode);

  const getNav = async () => {
    try {
      const data = await getHeader();
      setNavbarData(data);
    } catch (error) {
      console.error("Error fetching navbar data:", error);
    }
  };

  useEffect(() => {
    getNav();
  }, []);

  // console.log(navbarData)

  return (
    <div className="rm-header">
      {navbarData &&
        navbarData.map((item, i) => {
          return (
            <Container key={i}>
              <Row>
                <Col lg={12} md={12} sm={12} className="rm-header-col">
                  <div className="rm-logo">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="200.92"
                        height="57"
                        viewBox="0 0 200.92 57"
                      >
                        <defs>
                          <linearGradient
                            id="a"
                            x1="-11.221"
                            y1="0.494"
                            x2="23.872"
                            y2="0.494"
                            gradientUnits="objectBoundingBox"
                          >
                            <stop offset="0" stop-color="#1dcdfe" />
                            <stop offset="0.68" stop-color="#34f5c6" />
                            <stop offset="1" stop-color="#21d0b3" />
                          </linearGradient>
                          <linearGradient
                            id="b"
                            x1="-0.144"
                            y1="0.5"
                            x2="9.137"
                            y2="0.5"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="c"
                            x1="-1.44"
                            y1="0.499"
                            x2="9.659"
                            y2="0.499"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="d"
                            x1="-3.598"
                            y1="0.501"
                            x2="13.317"
                            y2="0.501"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="e"
                            x1="-3.012"
                            y1="0.499"
                            x2="7.504"
                            y2="0.499"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="f"
                            x1="-18.509"
                            y1="0.5"
                            x2="11.23"
                            y2="0.5"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="g"
                            x1="-7.678"
                            y1="0.499"
                            x2="3.487"
                            y2="0.499"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="h"
                            x1="-11.726"
                            y1="0.498"
                            x2="17.971"
                            y2="0.498"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="i"
                            x1="-22.748"
                            y1="0.5"
                            x2="27.103"
                            y2="0.5"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="j"
                            x1="-453.689"
                            y1="0.488"
                            x2="345.843"
                            y2="0.488"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="k"
                            x1="-11.744"
                            y1="0.5"
                            x2="17.996"
                            y2="0.5"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="l"
                            x1="-13.551"
                            y1="0.499"
                            x2="16.146"
                            y2="0.499"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="m"
                            x1="-5.006"
                            y1="0.496"
                            x2="4.979"
                            y2="0.496"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="n"
                            x1="-7.289"
                            y1="-1.247"
                            x2="22.113"
                            y2="-1.247"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="o"
                            x1="-0.25"
                            y1="-0.785"
                            x2="9.414"
                            y2="-0.785"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="p"
                            x1="-1.757"
                            y1="-1.542"
                            x2="10.287"
                            y2="-1.542"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="q"
                            x1="-3.244"
                            y1="-0.699"
                            x2="7.617"
                            y2="-0.699"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="r"
                            x1="-9.951"
                            y1="-0.186"
                            x2="5.808"
                            y2="-0.186"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="s"
                            x1="-7.697"
                            y1="-0.065"
                            x2="3.346"
                            y2="-0.065"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="t"
                            x1="-4.24"
                            y1="-0.452"
                            x2="6.242"
                            y2="-0.452"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="u"
                            x1="-17.038"
                            y1="-0.122"
                            x2="12.447"
                            y2="-0.122"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="v"
                            x1="-7.781"
                            y1="-0.706"
                            x2="7.448"
                            y2="-0.706"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="w"
                            x1="-44.969"
                            y1="-7.448"
                            x2="47.009"
                            y2="-7.448"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="x"
                            x1="-5.056"
                            y1="-0.197"
                            x2="4.852"
                            y2="-0.197"
                            xlinkHref="#a"
                          />
                          <linearGradient
                            id="y"
                            x1="-15.69"
                            y1="0.5"
                            x2="12.064"
                            y2="0.5"
                            xlinkHref="#a"
                          />
                        </defs>
                        <path
                          d="M70.749,23.281a3.081,3.081,0,0,0,0-.342l-7.22-.709a8.489,8.489,0,0,0-.279,1.051Z"
                          transform="translate(16.867 5.928)"
                          fill="url(#a)"
                        />
                        <path
                          d="M18.633,19.541A3.863,3.863,0,0,1,14.339,23.8H9.12v-7L0,15.88V39.1H9.12V30.8h4.813l4.079,8.3H28.373L22.141,29.053c3.331-1.887,5.181-5.219,5.181-9.779v-.659l-8.981-.9A5.067,5.067,0,0,1,18.633,19.541Z"
                          transform="translate(0 4.235)"
                          fill="url(#b)"
                        />
                        <path
                          d="M27.474,22.547a19.456,19.456,0,0,1,7.195-1.71c2.723,0,4.129,1.178,4.129,3.154v.089H32.933c-5.979.139-9.183,2.673-9.183,7.233s2.977,7.5,8.069,7.5A8.322,8.322,0,0,0,38.8,35.783v2.635h8.677V22.952a10.133,10.133,0,0,0-.279-2.381L25.941,18.43ZM38.8,30.552a4.332,4.332,0,0,1-4.041,2.533c-1.71,0-2.673-.874-2.673-2.369s.925-2.242,2.673-2.242H38.8Z"
                          transform="translate(6.333 4.915)"
                          fill="url(#c)"
                        />
                        <path
                          d="M47.739,37.6c0,1.533-.785,2.28-2.1,2.28A5.307,5.307,0,0,1,43.1,39.13L41,45.2a13.325,13.325,0,0,0,6.447,1.495c5.345,0,9.12-2.977,9.12-8.107V21.4L47.7,20.51Z"
                          transform="translate(10.933 5.469)"
                          fill="url(#d)"
                        />
                        <path
                          d="M72.594,23.46H65.1a8.487,8.487,0,0,1,.279-1.051l-8.449-.849a14.186,14.186,0,0,0-.6,4.18c0,7.321,4.864,12.147,12.844,12.147a13.756,13.756,0,0,0,10.615-4.294l-4.6-4.522a7.866,7.866,0,0,1-5.269,2.28A4.636,4.636,0,0,1,65.273,27.8H81.321a18.821,18.821,0,0,0-.114-3.8l-8.613-.874a3.079,3.079,0,0,1,0,.329Z"
                          transform="translate(15.021 5.749)"
                          fill="url(#e)"
                        />
                        <path
                          d="M126.16,35.735h8.854V29.377l-8.854-.887Z"
                          transform="translate(33.643 7.597)"
                          fill="url(#f)"
                        />
                        <path
                          d="M147.669,35.765a8.271,8.271,0,0,0,6.967-3.027v2.635h8.689V32.219L139.74,29.85C140.361,33.435,143.2,35.765,147.669,35.765Z"
                          transform="translate(37.264 7.96)"
                          fill="url(#g)"
                        />
                        <path
                          className="logo-bracket"
                          d="M71.081,40.8l8.74,3.445v3.8L67.56,42.981V38.637L79.821,33.57v3.8Z"
                          transform="translate(18.016 8.952)"
                          fill="#fff"
                        />
                        <path
                          d="M87.727,25.191v-.545L78.86,23.76v11.4l8.867-3.8Z"
                          transform="translate(21.029 6.336)"
                          fill="url(#h)"
                        />
                        <path
                          d="M91.64,25.04v2.787l5.282-2.255Z"
                          transform="translate(24.437 6.677)"
                          fill="url(#i)"
                        />
                        <path
                          d="M115.069,17.23l-.329.139c.1.127.215.241.317.38Z"
                          transform="translate(30.597 4.595)"
                          fill="url(#j)"
                        />
                        <path
                          d="M87.724,48.961V29.72L78.87,33.507V48.961Z"
                          transform="translate(21.032 7.925)"
                          fill="url(#k)"
                        />
                        <path
                          d="M100.507,36.543V25.815l-3.585-.355L91.64,27.715v8.829Z"
                          transform="translate(24.437 6.789)"
                          fill="url(#l)"
                        />
                        <path
                          d="M117.847,27.659h-.076a3.939,3.939,0,0,1-3.623,2.255,4.091,4.091,0,0,1-3.99-3.015L101,26c.583,6.574,4.8,10.741,10.969,10.741a8.183,8.183,0,0,0,6.536-3.027v2.723h8.867V28.9l-9.487-1.165Z"
                          transform="translate(26.933 6.933)"
                          fill="url(#m)"
                        />
                        <path
                          className="logo-bracket"
                          d="M133.058,7.316,124.28,4.01V.21l12.312,4.877v4.37l-12.211,5.067v-3.8Z"
                          transform="translate(33.141 0.056)"
                          fill="#fff"
                        />
                        <path
                          d="M46.529,13.04l-.089,6.511,8.841,1.013.114-7.4Z"
                          transform="translate(12.384 3.477)"
                          fill="url(#n)"
                        />
                        <path
                          d="M14.73,7.152.391,7l-.1,7.486L9.4,15.525V14.093l5.219.076a3.8,3.8,0,0,1,3.952,2.407l8.968,1.013C27.359,11.028,22.723,7.266,14.73,7.152Z"
                          transform="translate(0.077 1.867)"
                          fill="url(#o)"
                        />
                        <path
                          d="M36.757,12.59A30.7,30.7,0,0,0,25.23,14.9l.646,1.773,21.217,2.419C46.13,15.022,42.431,12.679,36.757,12.59Z"
                          transform="translate(6.728 3.357)"
                          fill="url(#p)"
                        />
                        <path
                          d="M69.109,13.081c-6.017-.1-10.488,2.951-12.109,7.967l8.436.963A3.8,3.8,0,0,1,69.1,19.085a3.585,3.585,0,0,1,3.547,3.8l8.6.975C80.5,17.248,76.19,13.169,69.109,13.081Z"
                          transform="translate(15.2 3.487)"
                          fill="url(#q)"
                        />
                        <path
                          d="M142.776,22.032l.1-7.98a8.5,8.5,0,0,0-7.6,4.015v-3.8l-8.867-.114-.241,16.606,8.867,1.013.063-5.067C135.252,23.286,138.216,21.4,142.776,22.032Z"
                          transform="translate(33.645 3.745)"
                          fill="url(#r)"
                        />
                        <path
                          d="M153.063,14.2a30.882,30.882,0,0,0-11.527,2.293l2.115,5.915a19.177,19.177,0,0,1,7.207-1.609c2.723,0,4.1,1.267,4.079,3.2v.076L149.111,24c-6.017,0-9.247,2.533-9.31,7.106a8.168,8.168,0,0,0,.114,1.6l23.547,2.673.177-12.312C163.715,17.544,159.763,14.289,153.063,14.2Zm1.786,16.391a4.319,4.319,0,0,1-4.066,2.356c-1.71,0-2.66-.912-2.647-2.407s.95-2.217,2.711-2.2l4.028.063Z"
                          transform="translate(37.279 3.787)"
                          fill="url(#s)"
                        />
                        <path
                          d="M104.118,22.6c.076-5.535-3.382-9.133-8.474-9.2a8.474,8.474,0,0,0-7.6,3.927V13.643l-8.867-.127L79,24.144l8.867,1.013c.228-2.419,1.7-4.041,3.939-4.053s3.395,1.545,3.369,3.914v.975l6,.684,2.863-1.267Z"
                          transform="translate(21.067 3.571)"
                          fill="url(#t)"
                        />
                        <path
                          d="M123.96.127,115.106,0l-.076,19.963,8.8-3.863Z"
                          transform="translate(30.675)"
                          fill="url(#u)"
                        />
                        <path
                          d="M112.026,13.67c-6.055-.076-10.235,3.965-10.906,10.387l17.29-7.6a8.487,8.487,0,0,0-6.384-2.787Z"
                          transform="translate(26.965 3.645)"
                          fill="url(#v)"
                        />
                        <path
                          d="M99.4,22.88,96.54,24.147l2.837.317Z"
                          transform="translate(25.744 6.101)"
                          fill="url(#w)"
                        />
                        <path
                          d="M101.117,27.491l9.209,1.051a7.41,7.41,0,0,1-.317-2.331c0-3.154,1.773-5.282,4.408-5.244s4.319,2.229,4.231,5.371a6.929,6.929,0,0,1-.684,2.989l9.462.861v.3h0l.139-17.733-8.867,3.8v.519c-.114-.127-.228-.241-.329-.367l-17.29,7.6a15.651,15.651,0,0,0-.089,1.571C101,26.427,101.079,27,101.117,27.491Z"
                          transform="translate(26.931 3.403)"
                          fill="url(#x)"
                        />
                        <path
                          d="M114.3,27.31v.076l9.487,1.165v-.3Z"
                          transform="translate(30.48 7.283)"
                          fill="url(#y)"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div
                    className={`rm-menulist ${menuActive ? "open" : ""}`}
                    onClick={toggleHandler}
                  >
                    <ul className="rm-menu">
                      {Object.entries(item.menu).map(([key, value]) => (
                        <li key={key}>
                          <Link to={value.url}>{value.text}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="rm-lets-talk">
                      <DarkModeSwitch
                        style={{ marginBottom: "0rem" }}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={24}
                      />
                      <Link to="">Let's Talk</Link>
                    </div>
                  </div>
                  <div
                    className={`rm-toggle ${menuActive ? "open" : ""}`}
                    onClick={toggleHandler}
                  >
                    <svg viewBox="0 0 100 100">
                      <path
                        className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                      ></path>
                      <path className="line line2" d="M 20,50 H 80"></path>
                      <path
                        className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                      ></path>
                    </svg>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}
    </div>
  );
};

export default Header;
