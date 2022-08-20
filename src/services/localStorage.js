export const getListCoins = () => {
  if (!localStorage["coins"]) {
    localStorage["coins"] = "[]";
  }

  let coins = localStorage["coins"];
  coins = JSON.parse(coins);
  return coins;
};

export const addCoin = (coin) => {
  const coins = getListCoins();
  coins.push(coin);
  localStorage["coins"] = JSON.stringify(coins);
};

export const removeCoin = (id) => {
  let coins = getListCoins();
  coins = coins.filter((coin) => coin.id !== id);
  localStorage["coins"] = JSON.stringify(coins);
};

export const getCoinById = (id) => {
  const coins = getListCoins();
  const coin = coins.find((coin) => coin.id === id);
  return coin;
};

export const editCoin = (id, newCoin) => {
  let coins = getListCoins();
  coins = coins.filter((coin) => coin.id !== id);
  coins.push(newCoin);
  localStorage["coins"] = JSON.stringify(coins);
};
