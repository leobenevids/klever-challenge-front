import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  padding: 1rem;
  text-align: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    margin: 3rem auto;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  th {
    font-weight: 600;
  }

  td {
    font-size: 1.5rem;
  }
`;
