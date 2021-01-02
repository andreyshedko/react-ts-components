import styled from "styled-components";

export const Main = styled.section`
  font-family: "Open Sans", sans-serif;
  position: relative;
`;

export const FilteredSuggestions = styled.ul`
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  border: 1px solid #bfbfbf;
  padding-left: 0px;
  top: 30px;
  width: 100%;
`;

export const FilteredSuggestionItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  list-style: none;
  box-shadow: 0 0 1px rgba(0,0,0,0.6);
  max-width: 100%;
`;