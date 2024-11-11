import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const HeaderAmin = () => {
  return (
    <div className="admin-header">
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/admin">ADMIN PANEL Dashboard</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Rajendra</a>
              <img src="" alt="Rkm" />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderAmin;
