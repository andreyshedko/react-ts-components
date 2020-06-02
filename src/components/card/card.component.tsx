import React from "react";

import styles from './card.module.css';

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
                <section className={styles.img}>
                    <img
                        src={props.imgUrl}
                        alt={props.title} />
                </section>
            }
            <section className={styles.main}>
                <div className={''}>
                    <h3>{props.title}</h3>
                    {props.subTitle &&
                        <h5>{props.subTitle}</h5>
                    }
                </div>
                <div className={''}>
                    {props.body}
                </div>
                {props.action &&
                    <div className={''}>
                        {props.action}
                    </div>
                }
            </section>
        </main>
    </>
);