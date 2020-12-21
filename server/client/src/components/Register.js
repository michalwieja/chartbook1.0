import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavItem,
  NavLink,
} from "reactstrap";
const Register = () => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
  };

  return (
    <>
      <NavItem>
        <NavLink onClick={toggle}>Register</NavLink>
      </NavItem>

      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={toggle}>Please register</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Trader</Label>
              <Input
                type="name"
                name="name"
                placeholder="Trader"
                required={true}
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="email"
                required={true}
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="password"
                required={true}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Submmit
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Register;
