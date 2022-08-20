// assets
import logo from "../../assets/logo.svg";

// styles
import { Wrapper } from "./styles";


const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="klever logo" />
    </Wrapper>
  );
};

export default Header;
