import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    font-family: "OpenSans", sans-serif;
`;

export const Input = styled.input`
    padding: 8px 12px;
    margin: 8px 0;
    box-sizing: border-box;
    text-indent: 0.5rem;
    border: 1px solid #bfbfbf;
    font-size: 16px;
    color: #707070;
    :disabled {
      border: 1px solid #969696;
      background-color: #bfbfbf;
      cursor: not-allowed;
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 10px;
    top: calc(50% - 10px);
`;

export const ErrorContainer = styled.div`
    color: #e63946;
    position: absolute;
    top: 50px;
    left: 0;
    ~ input[type="text"] {
      border-color: red;
    }
`;

export const CloseIconContainer = styled.div`
    color: #969696;
    position: absolute;
    top: 32%;
    left: 12%;
    background-color: #fff;
    padding-top: 1px;
    padding-left: 3px;
    cursor: pointer;
`;