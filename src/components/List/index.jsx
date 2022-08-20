import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getListCoins } from "../../services/localStorage";
import { useCoinContext } from "../../hooks/useCoinContext";
import { Wrapper, Container, Table } from "./styles";
import Header from "../Header";
import WishWallet from "../WishWallet";
import Item from "../Item";

const List = () => {
  const { coins, setCoins } = useCoinContext();
  const navigate = useNavigate();

  useEffect(() => {
    setCoins(getListCoins());
  }, []);

  return (
    <Fragment>
      <Header />
      <Wrapper>
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
      </Wrapper>
    </Fragment>
  );
};

export default List;
