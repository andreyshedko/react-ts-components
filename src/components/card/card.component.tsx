import React from "react";

import styles from './card.module.css';

export interface CardComponentProps {
    imgUrl?: string;
    title: string;
    subTitle?: string;
    body: string;
    children?: React.ReactNode | React.ReactElement
}

export const CardComponent: React.FC<CardComponentProps> = (props: CardComponentProps) => (
    <>
        <main className={styles.card}>
            {props.imgUrl &&
                <>
                    <img
                        src={props.imgUrl}
                        alt={props.title} />
                </>
            }
            <section className={styles.main}>
                <>
                    <h3>{props.title}</h3>
                    {props.subTitle &&
                        <h4>{props.subTitle}</h4>
                    }
                </>
                <div className={styles.body}>
                    {props.body}
                </div>
                {props.children &&
                    <div className={styles.actions}>
                        {props.children}
                    </div>
                }
            </section>
        </main>
    </>
);