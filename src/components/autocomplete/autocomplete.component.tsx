import * as React from "react";
import { useReducer } from "react";
import { ErrorBoundary } from "../error.boundary/error.boundary.component";
import { InputComponent } from "../input/input.component";
import { FilteredSuggestionItem, FilteredSuggestions, Main } from "./autocomplete.styled.component";

export interface AutocompleteComponentProps {
  suggestions: string[];
  placeholder?: string;
  onValueSelected: (suggestion: string) => string;
}

export interface IFilterState {
  filterValue: string;
  filteredValues: string[];
  selectedValue: string;
}

export interface IFilterAction {
  type: string;
  payload: string | string[];
}

export enum actions {
  setFilter = 'setFilter',
  setFilteredValue = 'setFilteredValue'
}

export const reducer = (state: IFilterState, action: IFilterAction): IFilterState => {
  switch (action.type) {
    case actions.setFilter:
      return { ...state, filterValue: action.payload as string };
    case actions.setFilteredValue:
      const filteredValues = (action.payload as string[])
        .filter(suggestion =>
          suggestion.toLowerCase().includes(state.filterValue.toLowerCase())
        )
      return {
        ...state,
        filteredValues: filteredValues
      };
    default:
      return state;
  }
}

export const AutocompleteComponent: React.FC<AutocompleteComponentProps> = (props: AutocompleteComponentProps) => {

  const initialState: IFilterState = { filterValue: '', filteredValues: [], selectedValue: '' };

  const [state, dispatch] = useReducer(reducer, initialState as IFilterState);

  return (
    <ErrorBoundary>
      <Main>
        <InputComponent
          type={"text"}
          required={true}
          placeholder={props.placeholder || ''}
          showClearIcon={true}
          onChange={(value) => {
            if (value) {
              dispatch({ type: actions.setFilter, payload: value });
            }
            if (value && value.length > 1) {
              dispatch({ type: actions.setFilteredValue, payload: props.suggestions })
            }
          }}
          onKeyDown={(event) => {
            switch (event.key) {
              case "Backspace": {
                dispatch({ type: actions.setFilter, payload: (event.currentTarget as HTMLInputElement).value });
                const currentValue = (event.currentTarget as HTMLInputElement).value;
                if (currentValue && currentValue.length > 2) {
                  dispatch({ type: actions.setFilteredValue, payload: props.suggestions });
                } else {
                  dispatch({ type: actions.setFilter, payload: '' });
                  dispatch({ type: actions.setFilteredValue, payload: [] });
                }
                break;
              }
              default: {
                break;
              }
            }
          }}
        />
        {state.filteredValues
          && state.filteredValues.length > 0
          && !state.selectedValue &&
          <FilteredSuggestions>
            {state.filteredValues.map((suggestion, index) =>
              <FilteredSuggestionItem
                tabIndex={0}
                key={index}
              // onKeyDown={(event) => {
              //   switch (event.key) {
              //     case "Enter": {
              //       setSelectedValue(suggestion);
              //       setFilter('');
              //       props.onValueSelected(suggestion)
              //       break;
              //     }
              //     case "ArrowDown": {
              //       if (!event.currentTarget.nextElementSibling) {
              //         event.preventDefault();
              //       } else {
              //         (event.currentTarget.nextElementSibling as HTMLElement).focus();
              //       }
              //       break;
              //     }
              //     case "ArrowUp": {
              //       if (!event.currentTarget.previousElementSibling) {
              //         event.preventDefault();
              //       } else {
              //         (event.currentTarget.previousElementSibling as HTMLElement).focus();
              //       }
              //       break;
              //     }
              //     default: {
              //       break;
              //     }
              //   }
              // }}
              // onClick={(event) => {
              //   setSelectedValue(suggestion);
              //   setFilter('');
              //   props.onValueSelected(suggestion);
              // }}
              >
                {suggestion}
              </FilteredSuggestionItem>)
            }
          </FilteredSuggestions>
        }
      </Main>
    </ErrorBoundary>
  )
};