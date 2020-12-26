import React from 'react';
import { AccordionComponent } from './accordion.component';

import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';


export default {
    component: AccordionComponent,
    title: 'Accordion Component',
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            ),
        }
    },
};

export const accordionComponent = () =>
    <AccordionComponent items={[
        {
            title: 'Test Title 1',
            body: {
                title: 'Body Title 1',
                element: 'sasasasasasasass'
            },
            isOpened: false
        },
        {
            title: 'Test Title 2',
            body: {
                title: 'Body Title 2',
                element: <>React Node</>
            },
            isOpened: false
        }
    ]} />;