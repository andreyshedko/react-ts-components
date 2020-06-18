import React from "react";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './accordion-item.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface AccordionItem {
  title: string;
  body: {
    title: string;
    element: string | React.ReactElement | React.ReactNode;
  },
  isOpened: boolean;
}

export interface AccordionItemComponentProps {
  config: AccordionItem;
  isOpened: boolean;
  onClick: () => void;
}

export const AccordionItemComponent: React.FC<AccordionItemComponentProps> = (props: AccordionItemComponentProps) => {

  return (
    <main className={styles.accordion}>
      <>
        <section
          className={styles.head}
          onClick={() => {
            props.onClick();
          }}>
          <span className={styles.icon}>
            {props.isOpened ?
              <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
            }
          </span>
          <span>
            <h2>{props.config.title}</h2>
          </span>
        </section>
        <section className={[styles.item, props.isOpened ? styles.opened : styles.hidden].join(' ')}>
          {props.config.body.title &&
            <h3>{props.config.body.title}</h3>
          }
          <div className={styles.item_body}>{props.config.body.element}</div>
        </section>
      </>
    </main>
  )
};