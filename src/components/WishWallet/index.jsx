import React from "react";
import star from "../../assets/shooting-star.svg";

import {Wrapper} from './styles'

const WishWallet = () => {
  return (
    <Wrapper>
      <img src={star} alt="shooting star" />
      <span>Wish Wallet</span>
    </Wrapper>
  );
};

export default WishWallet;
