import React from "react";

import styles from './card.module.scss';

export interface CardComponentProps {
    imgUrl?: string;
    title: string;
    subTitle?: string;
    body: string;
    action?: React.ReactElement
}

export const CardComponent: React.FC<CardComponentProps> = (props: CardComponentProps) => (
    <>
        <main className={styles.card}>
            {props.imgUrl &&
                <section className={styles.card_img}>
                    <img
                        src={props.imgUrl}
                        alt={props.title} />
                </section>
            }
            <section className={styles.main}>
                <div className={styles.header}>
                    <h3>{props.title}</h3>
                    {props.subTitle &&
                        <h5>{props.subTitle}</h5>
                    }
                </div>
                <div className={styles.body}>
                    {props.body}
                </div>
                {props.action &&
                    <div className={styles.action}>
                        {props.action}
                    </div>
                }
            </section>
        </main>
    </>
);