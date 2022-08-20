import { Wrapper, Container } from "./styles";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="klever logo" />
      </Container>
    </Wrapper>
  );
};

export default Header;
