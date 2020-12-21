import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);

  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  const userLinks = (
    <>
      <NavItem>
        <span className="navbar-text mr-3">{user && user.name}</span>
      </NavItem>
      <Button onClick={() => dispatch({ type: "LOGOUT_SUCCESS" })}>
        Logout
      </Button>
    </>
  );
  const guestLinks = (
    <>
      <Login />
      <Register />
    </>
  );

  return (
    <div>
      <Navbar color="primary" dark expand="md" className="mb-5">
        <Container>
          <Link to="/" className="navbar-text h3">
            chartbook
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-2"></NavItem>
              {isAuth ? userLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Example;
