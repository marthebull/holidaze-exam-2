import React from "react";
import { Nav } from "./styles";
import { Link } from "react-router-dom";
import { Container, Logo } from "../../../styles/GlobalStyles";
import MenuItems from "./menu-items/index";

const Navbar = () => {
  return (
    <>
      <Container>
        <Nav>
          <Link to="/" className="link">
            <Logo src="https://raw.githubusercontent.com/marthebull/holidaze-exam2023/187f416b0fd1cc2255c1e2d534bf8e89b5ee8657/images/logo-holidaze.svg"></Logo>
          </Link>
          <MenuItems />
        </Nav>
      </Container>
    </>
  );
};

export default Navbar;
