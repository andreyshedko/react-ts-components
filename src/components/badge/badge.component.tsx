import * as React from "react";
import { NavLink } from 'react-router-dom';

import styles from './badge.module.scss';

export interface BadgeComponentProps {
  url: string;
  bodyText: string;
  severity: string;
}

export const BadgeComponent = (props: BadgeComponentProps) => (
  <NavLink
    className={[styles.badge , styles[`badge_${props.severity}`]].join(' ')}
    to={props.url}>
    <section className={styles.badge_body}>
      {props.bodyText}
    </section>
  </NavLink>
);