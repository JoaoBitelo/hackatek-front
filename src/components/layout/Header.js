import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavbarBrand>
          <img></img> Icare Alot
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default Header;
