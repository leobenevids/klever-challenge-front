import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
--purple: #13152a;
--violet: #aa33b5;
--white: #fefefc;
--gray: #646464;
--red: #920000;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--purple);
    color: var(--white);
    font-family: Montserrat;
    font-weight: 600;
}

input {
    padding-left: 0.5rem;
    border-radius: 5px;
    border: none;
    height: 2rem;
    font-weight: 800;
    font-family: Montserrat;
    font-size: 1.2rem;
}

input:focus {
    outline: none;
}

button {
    width: 120px;
    height: 40px;
    color: var(--white);
    font-family: Montserrat;
    font-weight: 600;
    border: none;
    border-radius: 5px;
}

button:hover {
    cursor: pointer;
    opacity: 0.9;
    transition: 0.3s ease-in-out;
}

.progress-button {
    background: var(--violet)
}

.back-button {
    background: var(--gray);
}

.remove-button {
    background: var(--red);
}
`;

