import * as React from "react";

import styles from './button.module.css';

export interface ButtonComponentProps {
  text: string;
  severity: string;
  disabled?: boolean;
  icon?: string;
  onClick: (e: MouseEvent) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => (
  <button
    className={[styles.button, styles[props.severity]].join(' ')}
    onClick={(e: React.MouseEvent<HTMLButtonElement>): void => props.onClick(e as any)}
    onKeyDown={(e: React.KeyboardEvent<HTMLElement>): void => props.onKeyDown(e as any)}
    // onBlur={}
    // onFocus={}
    disabled={props.disabled ?? false}>
    {props.icon &&
      <i className={props.icon}></i>
    }
    {props.text}
  </button>
);