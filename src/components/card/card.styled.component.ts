import styled from "styled-components";

export const Card = styled.main`
    border-radius: 3px;
    text-align: left;
    height: fit-content;
    width: 100%;
    max-width: 300px;
    font-family: "OpenSans", sans-serif;
    user-select: none;
`;

export const Main = styled.section`
    padding: 1rem;
    border: 1px solid #bfbfbf;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
`;

export const Body = styled.div`
    font: 1rem;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex: auto;
    button {
        margin-top: 1rem;
        margin-right: 1rem;
    }
`;

export const Image = styled.img`
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`;