import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  padding: 1rem;
  align-items: center;
  /* border: 1px solid white; */

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid gold; */

    h2 {
      font-weight: 600;
    }
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  /* border: 1px solid red; */

  input {
    margin: 1rem 0;
  }

  button {
    margin: 1rem 0 1rem auto;
  }
`;
