import * as React from "react";

import styles from './button.module.scss';

export interface ButtonComponentProps {
  text: string;
  severity: string;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => (
    <button className={styles.button}>
      {props.text}
    </button>
);