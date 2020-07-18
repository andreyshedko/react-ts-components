import styled from "styled-components";

export const Container = styled.section`
    position: relative;
`;

export const Input = styled.input`
    padding: 8px 12px;
    margin: 8px 0;
    box-sizing: border-box;
    text-indent: 0.5rem;
    border: 1px solid #bfbfbf;
    font-size: 16px;
    :disabled {
      border: 1px solid #969696;
      background-color: #bfbfbf;
    }
    :not(:valid) {
      border: 1px solid #e63946;
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 10px;
    top: calc(50% - 10px);
`;

export const ErrorContainer = styled.div`
    color: #e63946;
`;