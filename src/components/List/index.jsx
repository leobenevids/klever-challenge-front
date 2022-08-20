import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// services
import { getListCoins } from "../../services/localStorage";

// hooks
import { useCoinContext } from "../../hooks/useCoinContext";

// styles
import { Container, Table } from "./styles";

// components
import WishWallet from "../WishWallet";
import Item from "../Item";

const List = () => {
  const { coins, setCoins } = useCoinContext();
  const navigate = useNavigate();

  useEffect(() => {
    setCoins(getListCoins());
  }, []);

  return (
    <Container>
      <div>
        <WishWallet />
        <button
          className="progress-button"
          onClick={() => navigate("/create-coin")}
        >
          Add Token
        </button>
      </div>

      {coins.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Tokens</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <Item coin={coin} key={coin.id} setCoins={setCoins} />
            ))}
          </tbody>
        </Table>
      ) : (
        <h3>No token registered.</h3>
      )}
    </Container>
  );
};

export default List;
