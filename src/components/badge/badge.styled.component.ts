import styled from "styled-components";

type MainProps = {
    readonly severity: 'info' | 'warning' | 'danger',
}

const severity = new Map([
    ['info', '#007bff'],
    ['warning', '#ff9f1c'],
    ['danger', '#e63946']]
)

export const Main = styled.main<MainProps>`
    padding: 1rem;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "OpenSans", sans-serif;
    font-size: 2rem;
    user-select: none;
    background-color: ${props => severity.get(props.severity)};
`;

export const Body = styled.section`
    color: #fff;
`;