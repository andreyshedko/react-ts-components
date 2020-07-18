import React from "react";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Main, Head, Icon, Body, BodyElement } from './accordion-item.component.styled';
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
    <Main>
        <Head
          onClick={() => {
            props.onClick();
          }}>
          <Icon>
            {props.isOpened ?
              <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
            }
          </Icon>
          <span>
            <h2>{props.config.title}</h2>
          </span>
        </Head>
        <Body
          opened={props.isOpened}>
          {props.config.body.title &&
            <h3>{props.config.body.title}</h3>
          }
          <BodyElement>
            {props.config.body.element}
          </BodyElement>
        </Body>
    </Main>
  )
};