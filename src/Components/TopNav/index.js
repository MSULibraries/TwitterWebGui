import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav>
        <NavItem eventKey={1}>
          <Link to="/about">About</Link>
        </NavItem>

        <NavItem eventKey={2}>
          <Link to="/tweets">Tweets</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <Link to="/hashtags">Hash Tags</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
