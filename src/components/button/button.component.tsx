import * as React from "react";

import styles from './button.module.css';

export interface ButtonComponentProps {
  text: string;
  severity: string;
  disabled?: boolean;
  icon?: string;
  onClick: (e: MouseEvent) => HTMLElement;
  onKeyDown: (e: KeyboardEvent) => HTMLElement;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => (
  <button
    className={[styles.button, styles[props.severity]].join(' ')}
    onClick={(e: React.MouseEvent<HTMLButtonElement>): HTMLElement => props.onClick(e as any)}
    onKeyDown={(e: React.KeyboardEvent<HTMLElement>): HTMLElement => props.onKeyDown(e as any)}
    // onBlur={}
    // onFocus={}
    disabled={props.disabled ?? false}>
    {props.icon &&
      <i className={props.icon}></i>
    }
    {props.text}
  </button>
);