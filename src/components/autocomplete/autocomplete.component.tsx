import * as React from "react";
import { useReducer } from "react";
import { ErrorBoundary } from "../error.boundary/error.boundary.component";
import { InputComponent } from "../input/input.component";
import { FilteredSuggestionItem, FilteredSuggestions, Main } from "./autocomplete.styled.component";

export interface AutocompleteComponentProps {
  suggestions: string[];
  placeholder?: string;
  onValueSelected: (suggestion: string) => string;
  onChange?: (event: React.ChangeEvent) => React.ChangeEvent;
}

export interface IFilterState {
  filterValue: string;
  filteredValues: string[];
  selectedValue: string;
}

export interface IFilterAction {
  type: string;
  payload?: string | string[];
}

export enum actions {
  setFilter = 'setFilter',
  setFilteredValue = 'setFilteredValue',
  setSelectedValue = 'SetSelectedValue',
  reset = 'reset'
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
      return { ...state, filteredValues: filteredValues };
    case actions.setSelectedValue:
      return { ...state, selectedValue: action.payload as string }
    case actions.reset:
      return { ...state, filterValue: '', filteredValues: [], selectedValue: '' }
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
          name={"autocomplete"}
          required={true}
          placeholder={props.placeholder || ''}
          value={state.filterValue}
          showClearIcon={true}
          onChange={(value) => {
            if (value) {
              dispatch({ type: actions.setFilter, payload: value });
            }
            if (value && value.length > 2) {
              dispatch({ type: actions.setFilteredValue, payload: props.suggestions });
            }
          }}
          onKeyDown={(event) => {
            switch (event.key) {
              case "Backspace": {
                dispatch({ type: actions.reset });
                const currentValue = (event.currentTarget as HTMLInputElement).value;
                dispatch({ type: actions.setFilter, payload: currentValue });
                if (currentValue && currentValue.length > 2) {
                  dispatch({ type: actions.setFilteredValue, payload: props.suggestions });
                } else {
                  dispatch({ type: actions.reset })
                }
                break;
              }
              default: {
                break;
              }
            }
          }}
          onClick={(event) => {
            const currentValue = (event.currentTarget as HTMLInputElement).value;
            if (currentValue && currentValue.length > 2) {
              dispatch({ type: actions.reset });
              dispatch({ type: actions.setFilter, payload: currentValue });
            }
          }}
          onClear={() => {
            dispatch({ type: actions.reset });
          }}
        />
        {state.filteredValues
          && state.filteredValues.length > 0
          && !(state.selectedValue.length > 0) &&
          <FilteredSuggestions>
            {state.filteredValues.map((suggestion, index) =>
              <FilteredSuggestionItem
                tabIndex={0}
                key={index}
                onKeyDown={(event) => {
                  switch (event.key) {
                    case "Enter": {
                      dispatch({ type: actions.reset });
                      dispatch({ type: actions.setSelectedValue, payload: props.suggestions });
                      dispatch({ type: actions.setFilter, payload: suggestion });
                      props.onValueSelected(suggestion);
                      break;
                    }
                    case "ArrowDown": {
                      if (!event.currentTarget.nextElementSibling) {
                        event.preventDefault();
                      } else {
                        (event.currentTarget.nextElementSibling as HTMLElement).focus();
                      }
                      break;
                    }
                    case "ArrowUp": {
                      if (!event.currentTarget.previousElementSibling) {
                        event.preventDefault();
                      } else {
                        (event.currentTarget.previousElementSibling as HTMLElement).focus();
                      }
                      break;
                    }
                    default: {
                      break;
                    }
                  }
                }}
                onClick={() => {
                  dispatch({ type: actions.reset });
                  dispatch({ type: actions.setSelectedValue, payload: props.suggestions });
                  dispatch({ type: actions.setFilter, payload: suggestion });
                  props.onValueSelected(suggestion);
                }}
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