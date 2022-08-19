import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Form from "../../components/Form";
import Header from "../../components/Header";

import { Wrapper } from "../../styles/GlobalStyles";
import { Container } from "./styles";

const EditToken = () => {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Container>
          <div>
            <h1>Edit Token</h1>
            <NavLink to="/">
              <button className="back-button">Return</button>
            </NavLink>
          </div>
          <Form />
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export default EditToken