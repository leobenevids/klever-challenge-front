import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  padding: 2rem;
  border-radius: 5px;

  h3 {
    color: #111;
    font-size: 16px;
  }


  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }


`;
