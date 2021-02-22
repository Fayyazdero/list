import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

export const NavbarD = ({ user }) => {
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    setLoginData(() => user);
  }, [user]);

  function signOut() {
    localStorage.setItem("userInfo", JSON.stringify({}));
    setLoginData({});
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto items">
            <Link to="/">Home</Link>
            <Link href="/k">Link</Link>
              {!loginData.email && <Link to="/sign-in" className="text-right">Sign In</Link>}
              {loginData.email && (
                <Link
                  to="/sign-up"
                  className="text-right"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Link>
              )}
               {loginData.email && <span className="avatar">{[...loginData.email][0]}</span>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarD;
