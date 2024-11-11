import React from "react";
import "./admin-css.css";
// import LOGO from "../../assets/images/rajendra.svg";
import { Col, Nav, Row, Tab } from "react-bootstrap";

const SidebarAdmin = () => {
  return (
    <div className="admin-sidebar">
      <div className="ad-logo">
        {/* <img src={LOGO} alt="logo" /> */}
      </div>
      <div className="ad-menu">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default SidebarAdmin;
