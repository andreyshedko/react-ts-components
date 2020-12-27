import styled from "styled-components";

export const Main = styled.section`
  font-family: "Open Sans", sans-serif;
  position: relative;
`;

export const Input = styled.input`
    flex: 1 1 100%;

    padding: 8px 12px;
    margin: 8px 0;
    box-sizing: border-box;

    border-width: 1px;
    border-style: solid;
    border-color: '#bfbfbf';

    text-indent: 0.5rem;
    font-size: 16px;
    color: #707070;

    :disabled {
      border: 1px solid #969696;
      background-color: #bfbfbf;
      cursor: not-allowed;
    }
`;

export const FilteredSuggestions = styled.ul`
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  border: 1px solid #bfbfbf;
`;

export const FilteredSuggestionItem = styled.li`
  padding: 0.5rem;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  cursor: pointer;
`;