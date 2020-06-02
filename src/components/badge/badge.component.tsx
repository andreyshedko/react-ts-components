import * as React from "react";
import { NavLink } from 'react-router-dom';

import styles from './badge.module.css';

export interface BadgeComponentProps {
  url: string;
  bodyText: string;
  severity: string
}

export const BadgeComponent: React.FC<BadgeComponentProps> = (props: BadgeComponentProps) => (
  <NavLink
    className={[styles.badge , styles[props.severity]].join(' ')}
    to={props.url}>
    <section className={styles.body}>
      {props.bodyText}
    </section>
  </NavLink>
);