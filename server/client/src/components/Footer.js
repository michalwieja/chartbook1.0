import React from "react";
import { Container, Navbar } from "reactstrap";
const Footer = () => {
  return (
    <footer>
      <Navbar color="primary" dark expand="md" className="mt-5 ">
        <Container>
          <span className="navbar-text text-center w-100">MW 2020</span>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
