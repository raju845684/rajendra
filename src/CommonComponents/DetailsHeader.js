import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DetailsHeader = ({ pageName }) => {
  return (
    <div className="details-page-header">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1>
              Home - <span>{pageName}</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailsHeader;
