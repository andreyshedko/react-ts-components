import * as React from "react";
import { ChangeEvent, MouseEvent, KeyboardEvent, PureComponent } from "react";
import { InputComponent } from "../input/input.component";
import { FilteredSuggestionItem, FilteredSuggestions, Input, Main } from "./autocomplete.styled.component";

export interface AutocompleteComponentProps {
  suggestions: string[];
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLElement>) => void;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
}
export interface AutocompleteComponentState {
  filter?: string | undefined;
  filteredSuggestions?: string[] | undefined;
  selectedValue?: string | undefined;
}
export class AutocompleteComponent extends PureComponent<AutocompleteComponentProps, AutocompleteComponentState> {

  static state: Readonly<AutocompleteComponentState> = {
    filter: undefined,
    filteredSuggestions: undefined,
    selectedValue: undefined
  };


  setFilter = (filterValue: string): void => {
    this.setState({filter: filterValue});
  }

  setFilteredSuggestions = (): void => {
    this.setState({
      filteredSuggestions:
        this.props.suggestions
          .filter(suggestion =>
            suggestion.toLowerCase().includes(this.state.filter!.toLowerCase()))
    });
  }

  render() {
    return (
      <Main>
        <p>
          {this.state.filter}
          {this.state.selectedValue}
          {this.state.filteredSuggestions}
        </p>
        <InputComponent
          type={"text"}
          required={true}
          placeholder={this.props.placeholder || ''}
          showClearIcon={true}
          onChange={(value) => {
            this.setFilter(value);
            if (this.state.filter && this.state.filter.length > 1) {
              this.setFilteredSuggestions()
            }
          }}
        />
        {this.state.filteredSuggestions
          && this.state.filteredSuggestions!.length > 0
          && !this.state.selectedValue &&
          <FilteredSuggestions>
            {filteredSuggestions!.map((suggestion, index) =>
              <FilteredSuggestionItem
                tabIndex={0}
                key={index}
                onKeyDown={(event) => {
                  switch (event.key) {
                    case "Enter": {
                      setSelectedValue(suggestion);
                      setFilter('');
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
                onClick={(event) => {
                  setSelectedValue(suggestion);
                  setFilter('');
                  props.onClick(event);
                }}
              >
                {suggestion}
              </FilteredSuggestionItem>)
            }
          </FilteredSuggestions>
        }
      </Main>
    )
  }
};