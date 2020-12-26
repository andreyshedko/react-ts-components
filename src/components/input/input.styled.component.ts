import styled from "styled-components";

type InputProps = {
    readonly isError: true | false | undefined,
}

export const Container = styled.section`
    font-family: "OpenSans", sans-serif;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    position: relative;
`;

export const Input = styled.input<InputProps>`
    flex: 1 1 100%;

    padding: 8px 12px;
    margin: 8px 0;
    box-sizing: border-box;

    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.isError ? '#e63946' : '#bfbfbf'};

    text-indent: 0.5rem;
    font-size: 16px;
    color: #707070;

    :disabled {
      border: 1px solid #969696;
      background-color: #bfbfbf;
      cursor: not-allowed;
    }
`;

export const IconContainer = styled.i`
    color: #ffffff;
    background-color: #bfbfbf;
    padding-top: 1px;
    padding-left: 3px;
    cursor: pointer;

    position: absolute;
    top: calc(50% - 9px);
    left: 6px;
`;

export const ErrorMessageContainer = styled.div`
    color: #e63946;
    left: 0;
`;

export const CloseIconContainer = styled.i<InputProps>`
    color: #969696;
    background-color: #fff;
    padding-top: 1px;
    padding-left: 3px;
    cursor: pointer;

    position: absolute;
    top: ${props => props.isError ? '17px' : '16px'};
    right: 6px;
`;