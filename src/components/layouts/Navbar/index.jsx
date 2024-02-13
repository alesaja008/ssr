import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import logoBs from "../../../assets/img/logo/logo-white.png";
import Link from "next/link";
import { useState } from "react";

const NavbarBs = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <Navbar bg="red_custom" expand="lg" className="p-2 fixed-top red_custom">
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image
              src={logoBs}
              className="d-inline-block align-top logo-bs"
              alt="BS"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 text-left">
              <Nav.Link as={Link} href="/">
                Beranda
              </Nav.Link>

              <NavDropdown
                title="Profile"
                id="basic-nav-dropdown"
                onClick={() => setDropdown(!dropdown)}
              >
                <NavDropdown.Item as={Link} href="/profile/tentang-kami">
                  Tentang Kami
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/profile/award">
                  Award
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/profile/testimoni">
                  Testimoni
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/profile/hubungi-kami">
                  Hubungi Kami
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} href="/events/event-recap">
                  Event Recap
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} href="/product">
                Product
              </Nav.Link>

              <NavDropdown title="Insight" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} href="/insight/technology">
                  Technology
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/insight/knowledge">
                  Knowledge
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/insight/blog">
                  Blog
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="https://bintangsempurna.co.id/career/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Career
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarBs;
