import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { Wrapper } from "../../styles/GlobalStyles";
import { Container, Table } from "./styles";

import { BiEdit } from "react-icons/bi";

// components
import Header from "../../components/Header";
import WishWallet from "../../components/WishWallet";

const Home = () => {
  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const items = getData("tokenList");

  return (
    <Fragment>
      <Header />
      <Wrapper>

        <Container>
          <div>
            <WishWallet />
            <NavLink to="/add">
              <button className="progress-button">Add Token</button>
            </NavLink>
          </div>

          {items ? (
            <Table>
              <thead>
                <tr>
                  <th>Tokens</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.token}>
                    <td>{item.token}</td>
                    <td>{item.balance}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No token registered.</p>
          )}
        </Container>

      </Wrapper>
    </Fragment>
  );
};

export default Home;
