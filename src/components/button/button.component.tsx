import * as React from "react";

import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import styles from './button.module.scss';

export interface ButtonComponentProps {
  text: string;
  severity: string;
  disabled?: boolean;
  icon?: IconDefinition;
  notification?: string;
  onClick: (e: MouseEvent) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  onFocus: (e: FocusEvent) => void;
  onBlur: (e: FocusEvent) => void;
}

const className = cx.bind(styles);

export const ButtonComponent: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => {

  const button_style = className(styles.button, {
    warning: props.severity,
    info: props.severity,
    danger: props.severity
  });

  return (
  <button
    className={button_style}
    onClick={(e: React.MouseEvent<HTMLButtonElement>): void => props.onClick(e as any)}
    onKeyDown={(e: React.KeyboardEvent<HTMLElement>): void => props.onKeyDown(e as any)}
    onFocus={(e: React.FocusEvent<HTMLElement>): void => props.onFocus(e as any)}
    onBlur={(e: React.FocusEvent<HTMLElement>): void => props.onBlur(e as any)}
    disabled={props.disabled ?? false}>
    {props.icon &&
      <FontAwesomeIcon icon={props.icon} />
    }
    {props.text}
    {props.notification &&
        <span className={cx(styles.button, props.severity)}>
          {props.notification}
        </span>
    }
  </button>)
};