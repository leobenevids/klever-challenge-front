import React from "react";

import { NavWrapper, NavContainer } from "./styles";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <img src={logo} alt="klever logo" />
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;
