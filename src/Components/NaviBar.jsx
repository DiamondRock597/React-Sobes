import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Navbar.Brand>
          <h1>Test</h1>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <div className="nav-link">
              <Link to="/" style={{ textDecoration: "none" }}>
                Продажа
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/Rent" style={{ textDecoration: "none" }}>
                Аренда
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/Villages" style={{ textDecoration: "none" }}>
                Посёлки
              </Link>
            </div>
            <div className="nav-link">
              <Link to="/About" style={{ textDecoration: "none" }}>
                О компании
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
