import React, { Fragment, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { FormWrapper } from "./styles";

const Form = () => {
  const navigate = useNavigate();

  const initialValues = { token: "", balance: "" };

  const [tokenData, setTokenData] = useState(initialValues);

  let tokenList = [];

  const storeData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  // handle onChange function
  const handleChange = (e) => {
    setTokenData({ ...tokenData, [e.target.name]: e.target.value });
  };

  // handle onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (getData("tokenList") === null) {
      tokenList = [];
    } else {
      tokenList = getData("tokenList");
    }

    tokenList.push(tokenData);
    console.log(tokenData);
    storeData("tokenList", tokenList);
    setTokenData(initialValues);

    navigate("/");
  };

  return (
    <Fragment>
      <FormWrapper onSubmit={handleSubmit}>
        <label>Token</label>
        <input
          type="text"
          name="token"
          value={tokenData.token}
          onChange={handleChange}
          required
        />

        <label>Balance</label>
        <input
          type="number"
          name="balance"
          value={tokenData.balance}
          onChange={handleChange}
          required
        />

        <button type="submit" className="progress-button">
          Save
        </button>
      </FormWrapper>
    </Fragment>
  );
};

export default Form;
