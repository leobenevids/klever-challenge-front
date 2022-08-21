import { useContext } from "react";

// my context
import { CoinContext } from "../context/CoinContext";

export const useCoinContext = () => {
  const context = useContext(CoinContext);

  return context;
};
