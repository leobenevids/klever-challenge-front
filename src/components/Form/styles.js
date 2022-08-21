import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  padding: 1rem;
  align-items: center;

  @media screen and (min-width: 1280px) {
    width: 20%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    h3 {
      font-weight: 600;
    }
  }

  input {
    margin: 1rem 0;
  }
`;
