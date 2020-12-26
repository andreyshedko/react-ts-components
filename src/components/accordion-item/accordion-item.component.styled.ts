import styled from "styled-components";

type BodyProps = {
    readonly opened: true | false,
}

export const Main = styled.main`
    width: 100%;
    font-family: "Open Sans", sans-serif;

    &:focus {
        outline: none;
        background-color: #bbbbbb;
    }
`;

export const Head = styled.section`
    min-height: 0.5rem;
    background-color: #969696;
    border-bottom: 1px solid #7b7b7b;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: baseline;
    padding-left: 5px;
    cursor: pointer;
`;

export const Title = styled.h3`
margin-left: 5px;
`;

export const Icon = styled.span`
    padding: 5px;

    &:hover {
        background-color: #bbbbbb;
        border-radius: 3px;
    }
    &:focus {
        outline: none;
        background-color: #bbbbbb;
        border-radius: 3px;
    }
`;

export const Body = styled.section<BodyProps>`
    min-height: 1rem;
    background-color: #bfbfbf;
    padding: 1rem;
    display: ${props => props.opened ? 'block' : 'none'};
`;

export const BodyElement = styled.div`
    max-width: calc(100% - 1rem);
    min-height: 1rem;
    font-size: 14px;
`;