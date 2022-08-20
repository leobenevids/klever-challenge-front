import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";

export const useCoinContext = () => {
  const context = useContext(CoinContext);

  return context;
};
