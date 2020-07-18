import React from "react";

import { Card, Main, Body, Actions, Image } from './card.styled.component';

export interface CardComponentProps {
    imgUrl?: string;
    title: string;
    subTitle?: string;
    body: string;
    children?: React.ReactNode | React.ReactElement
}

export const CardComponent: React.FC<CardComponentProps> = (props: CardComponentProps) => (
    <Card>
        {props.imgUrl &&
            <Image
                src={props.imgUrl}
                alt={props.title}>
            </Image>
        }
        <Main>
            <h3>{props.title}</h3>
            {props.subTitle &&
                <h4>{props.subTitle}</h4>
            }
            <Body>
                {props.body}
            </Body>
            {props.children &&
                <Actions>
                    {props.children}
                </Actions>
            }
        </Main>
    </Card>
);