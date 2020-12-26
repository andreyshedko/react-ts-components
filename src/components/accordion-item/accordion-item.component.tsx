import React from "react";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Main, Head, Title, Icon, Body, BodyElement } from './accordion-item.component.styled';
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
  onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export const AccordionItemComponent: React.FC<AccordionItemComponentProps> = (props: AccordionItemComponentProps) => {

  return (
    <Main tabIndex={0}>
      <Head
        onClick={() => {
          props.onClick();
        }}
        onKeyDown={(event) => {
          props.onKeyDown(event as React.KeyboardEvent<HTMLElement>);
        }}>
        <Icon tabIndex={0}
          onKeyDown={(event) => {
            props.onKeyDown(event as React.KeyboardEvent<HTMLElement>);
          }}>
          {props.isOpened ?
            <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
          }
        </Icon>
        <Title>
          {props.config.title}
        </Title>
      </Head>
      <Body
        opened={props.isOpened}>
        {props.config.body.title &&
          <h4>{props.config.body.title}</h4>
        }
        <BodyElement>
          {props.config.body.element}
        </BodyElement>
      </Body>
    </Main>
  )
};