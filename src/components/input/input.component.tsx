import * as React from "react";

import styles from './input.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export interface InputComponentProps {
    type: string;
    required: boolean;
    value: string;
    minlength?: number;
    maxlength?: number;
    placeholder?: string;
    disabled?: boolean;
    showSpinner?: boolean;
    styles?: string;
    isError?: boolean;
    errorMessage?: string;
    onClick: (e: React.MouseEvent) => void;
    onKeyUp: (e: React.KeyboardEvent) => void;
    onFocus: (e: React.FocusEvent) => void;
    onBlur: (e: React.FocusEvent) => void;
    onChange: (e: React.ChangeEvent) => void;
}

export const InputComponent: React.FC<InputComponentProps> = (props: InputComponentProps) => {

    const error = props.isError ? "error" : '';
    const style = props.styles ? [styles.textInput, props.styles, error].join(' ') : styles.textInput;
    return (
        <div className={styles.inputContainer}>
            <input
                value={props.value}
                minLength={props.minlength || 1}
                maxLength={props.maxlength || 100}
                required={props.required || false}
                type={props.type}
                placeholder={props.placeholder || ''}
                className={style}
                disabled={props.disabled || false}
                onChange={(e) => props.onChange(e)}
                onFocus={(e) => props.onFocus(e)}
                onClick={(e) => props.onClick(e)}
                onKeyUp={(e) => props.onKeyUp(e)}
            />
            {props.showSpinner &&
                <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faCircleNotch} />
                </div>
            }
            {props.isError && props.errorMessage &&
                <div className={error}>
                    {props.errorMessage}
                </div>
            }
        </div>
    )

};