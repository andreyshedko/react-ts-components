import * as React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Container, Input, IconContainer, ErrorMessageContainer, CloseIconContainer } from './input.styled.component';

export interface InputComponentProps {
    type: string;
    required: boolean;
    name: string;
    minlength?: number;
    maxlength?: number;
    placeholder?: string;
    disabled?: boolean;
    showSpinnerIcon?: boolean;
    styles?: string;
    isError?: boolean;
    errorMessage?: string;
    showClearIcon?: boolean;
    value?: string;
    onClick?: (e: React.MouseEvent) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
    onChange?: (value: string) => void;
    onClear?: () => void;
}

export const InputComponent: React.FC<InputComponentProps> = (props: InputComponentProps) => {

    let [value, changeValue] = useState('');

    return (
        <Container>
            {props.showSpinnerIcon &&
                <IconContainer>
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                </IconContainer>
            }
            {props.showClearIcon && value.length > 0 &&
                <CloseIconContainer
                    isError={props.isError}
                    onClick={() => {
                        changeValue(value = '');
                        if (props && props.onChange && props.onClear) {
                            props.onChange(value);
                            props.onClear();
                        }
                    }
                    }>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseIconContainer>
            }
            <Input
                tabIndex={0}
                isError={props.isError}
                value={props.value || value}
                minLength={props.minlength || 1}
                maxLength={props.maxlength || 100}
                required={props.required || false}
                type={props.type}
                placeholder={props.placeholder || ''}
                disabled={props.disabled || props.showSpinnerIcon || false}
                onChange={(e) => {
                    if (props && props.onChange) {
                        props.onChange(e.target.value);
                        changeValue(e.target.value);
                    }
                }}
                onFocus={(e) => {
                    if (props && props.onFocus) {
                        props.onFocus(e);
                    }
                }}
                onClick={(e) => {
                    if (props && props.onClick)
                        props.onClick(e);
                }}
                onKeyDown={(event) => {
                    if (props && props.onKeyDown) {
                        props.onKeyDown(event);
                    }
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