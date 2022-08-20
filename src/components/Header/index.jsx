import { Wrapper } from "./styles";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="klever logo" />
    </Wrapper>
  );
};

export default Header;
