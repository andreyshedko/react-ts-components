import * as React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Container, Input, IconContainer, ErrorMessageContainer, CloseIconContainer } from './input.styled.component';

export interface InputComponentProps {
    type: string;
    required: boolean;
    minlength?: number;
    maxlength?: number;
    placeholder?: string;
    disabled?: boolean;
    showSpinner?: boolean;
    styles?: string;
    isError?: boolean;
    errorMessage?: string;
    showClearIcon?: boolean;
    onClick: (e: React.MouseEvent) => void;
    onKeyUp: (value: string) => void;
    onFocus: (e: React.FocusEvent) => void;
    onBlur: (e: React.FocusEvent) => void;
    onChange: (value: string) => void;
}

export const InputComponent: React.FC<InputComponentProps> = (props: InputComponentProps) => {

    let [value, changeValue] = useState('');

    return (
        <Container>
            {props.showSpinner &&
                <IconContainer>
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                </IconContainer>
            }
            {props.showClearIcon && value.length > 0 &&
                <CloseIconContainer
                    isError={props.isError}
                    onClick={() => {
                        changeValue(value = '');
                        props.onChange(value);
                    }
                    }>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseIconContainer>
            }
            <Input
                tabIndex={0}
                isError={props.isError}
                value={value}
                minLength={props.minlength || 1}
                maxLength={props.maxlength || 100}
                required={props.required || false}
                type={props.type}
                placeholder={props.placeholder || ''}
                disabled={props.disabled || props.showSpinner || false}
                onChange={(e) => {
                    changeValue(e.target.value);
                    props.onChange(value);
                }}
                onFocus={(e) => props.onFocus(e)}
                onClick={(e) => props.onClick(e)}
                onKeyUp={(e) => {
                    props.onKeyUp(value);
                }}
            />
            {props.isError && props.errorMessage &&
                <ErrorMessageContainer>
                    {props.errorMessage}
                </ErrorMessageContainer>
            }
        </Container>
    )

};