import * as React from "react";

import styles from './button.module.css';

export interface ButtonComponentProps {
  text: string;
  severity: string;
  disabled?: boolean;
  icon?: string;
  onClick: (e: any) => any
}

interface ButtonEventTarget extends EventTarget {
  value: string
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => (
  <button
    className={[styles.button, styles[props.severity]].join(' ')}
    onClick={(e: React.MouseEvent<HTMLElement>) => props.onClick(e.currentTarget.innerText)}
    // onEnter={}
    // onBlur={}
    // onFocus={}
    disabled={props.disabled ?? false}>
    {props.icon &&
      <i className={props.icon}></i>
    }
    {props.text}
  </button>
);