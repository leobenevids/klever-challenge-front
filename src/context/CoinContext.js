import { createContext, useState } from "react";

// context
export const CoinContext = createContext();

// provider
export const CoinContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

  return (
    <CoinContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinContext.Provider>
  );
};
