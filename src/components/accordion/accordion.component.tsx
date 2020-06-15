import React, { useState } from "react";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './accordion.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface AccordionItem {
  title: string;
  body: {
    title: string;
    element: string | React.ReactElement | React.ReactNode;
  }
}

export interface AccordionComponentProps {
  items: AccordionItem[];
}

export const AccordionComponent: React.FC<AccordionComponentProps> = (props: AccordionComponentProps) => {

  let [isOpened, setOpenState] = useState(false);

  return (
    <main className={styles.accordion}>
      {props.items.map(item => {
        return (
          <>
            <section className={styles.head} onClick={() => setOpenState(isOpened = !isOpened)}>
              <span className={styles.icon}>
                {isOpened ?
                  <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
                }
              </span>
              <span>
                <h2>{item.title}</h2>
              </span>
            </section>
            <section className={[styles.item, isOpened ? styles.opened : styles.hidden].join(' ')}>
              {item.body.title &&
                <h3>{item.body.title}</h3>
              }
              {item.body.element}
            </section>
          </>
        )
      })
      }
    </main>
  )
};