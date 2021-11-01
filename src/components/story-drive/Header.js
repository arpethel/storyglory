import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Image, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Navbar expand="sm">
        <Navbar.Brand href="/">
          <Image
            alt="Story Glory Logo"
            src="StoryGlory.svg"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title="Stories" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/stories"
                className="link"
                activeClassName="active"
                exact
              >
                View Stories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/add"
                className="link"
                activeClassName="active"
              >
                Create a Story
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/update-profile" className="link">
                {currentUser.email}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item variant="link" onClick={handleLogout}>
                {error && <Alert variant="danger">{error}</Alert>}
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Learn More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
