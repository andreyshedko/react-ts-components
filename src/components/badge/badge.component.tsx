import * as React from "react";

import { Main, Body } from './badge.styled.component';

export interface BadgeComponentProps {
  text: string;
  severity: 'info' | 'warning' | 'danger';
  onClick: (e: MouseEvent) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

export const BadgeComponent: React.FC<BadgeComponentProps> = (props: BadgeComponentProps) => {

  return (
    <Main
      severity={props.severity}
      onClick={(e: React.MouseEvent<HTMLButtonElement>): void => props.onClick(e as unknown as MouseEvent)}
      onKeyDown={(e: React.KeyboardEvent<HTMLElement>): void => props.onKeyDown(e as unknown as KeyboardEvent)}>
      <Body>
        {props.severity}
      </Body>
    </Main>
  )
};