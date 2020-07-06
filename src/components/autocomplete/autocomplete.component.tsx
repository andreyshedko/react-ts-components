import * as React from "react";

import styles from './autocomplete.module.scss';

export interface BadgeComponentProps {
  suggestions: unknown[];
  onClick: (e: MouseEvent) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  onKeyUp: (e: KeyboardEvent) => void;
  onFocus: (e: FocusEvent) => void;
  onBlur: (e: FocusEvent) => void;
}

export const BadgeComponent: React.FC<BadgeComponentProps> = (props: BadgeComponentProps) => {

  return (
    <></>
  )
};