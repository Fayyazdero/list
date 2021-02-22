import React from "react";
import {Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css'

export const NavbarD = ({name}) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto items">
            <Link to="/">Home</Link>
            <Link href="/k">Link</Link>
            <div className="text-right">
            <Link to="/sign-in">
                Sign In
            </Link>
            <Link to="/sign-up" className="text-right">
                Sign Out
            </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarD;
