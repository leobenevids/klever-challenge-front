import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 40%;
  padding: 1rem;
  text-align: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h3 {
    margin: 3rem auto;
  }
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  text-align: center;

  thead tr {
    display: flex;
    justify-content: space-between;
    margin-left: 2.5rem;
  }

  tbody tr {
    display: flex;
    margin: 1rem 0;
    justify-content: space-between;
  }

  th {
    font-weight: 600;
  }

  td {
    font-size: 1.8rem;

    span {
      margin-left: 1rem;
    }

    .icon:hover {
      cursor: pointer;
    }
  }
`;
