import * as React from "react";

import styles from './badge.module.scss';

export interface BadgeComponentProps {
  text: string;
  severity: string;
  onClick: (e: MouseEvent) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

export const BadgeComponent: React.FC<BadgeComponentProps> = (props: BadgeComponentProps) => {

  return (
    <main
      className={[styles.badge, styles.info].join(' ')}
      onClick={(e: React.MouseEvent<HTMLButtonElement>): void => props.onClick(e as unknown as MouseEvent)}
      onKeyDown={(e: React.KeyboardEvent<HTMLElement>): void => props.onKeyDown(e as unknown as KeyboardEvent)}>
      <section className={styles.body}>
        {props.text}
      </section>
    </main>
  )
};