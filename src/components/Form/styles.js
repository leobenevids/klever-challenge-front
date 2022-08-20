import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 33.3%;
  padding: 1rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 600;
    }
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  input {
    margin: 1rem 0;
  }

  button {
    margin: 1rem 0 1rem auto;
  }
`;
