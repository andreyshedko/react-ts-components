import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Button, Notification } from './button.styled.component';

export interface ButtonComponentProps {
  text: string;
  severity: 'info' | 'warning' | 'danger';
  disabled?: boolean;
  icon?: IconDefinition;
  notification?: string;
  onClick: (e: MouseEvent) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  onFocus: (e: FocusEvent) => void;
  onBlur: (e: FocusEvent) => void;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => {

  return (
  <Button
    severity={props.severity}
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
        <Notification
          disabled={props.disabled}
          severity={props.severity}>
          {props.notification}
        </Notification>
    }
  </Button>)
};