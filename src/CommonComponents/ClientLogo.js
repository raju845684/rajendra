import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CLIENTLOGO1, CLIENTLOGO2, CLIENTLOGO3, CLIENTLOGO4 } from "../assets/images";

const ClientLogo = () => {
  return (
    <div className="rm-client-logo">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <ul>
                <li>
                    <a href="https://www.cantabnyc.org/" target="_blank"><img src={CLIENTLOGO1} alt=""/></a>
                </li>
                <li>
                    <a href="https://www.twocreate.in/" target="_blank"><img src={CLIENTLOGO2} alt=""/></a>
                </li>
                <li>
                    <a href="https://www.v2stech.com/" target="_blank"><img src={CLIENTLOGO3} alt=""/></a>
                </li>
                <li>
                    <a href="https://www.setzerlawfirm.com/" target="_blank"><img src={CLIENTLOGO4} alt=""/></a>
                </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ClientLogo;
