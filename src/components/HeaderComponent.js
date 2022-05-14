import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={logo} width={120} height={"100%"} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  NHÂN VIÊN
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/department">
                  PHÒNG BAN
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/salary">
                  BẢNG LƯƠNG
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
