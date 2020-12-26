import React from 'react';
import { actions } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import { AccordionComponent, AccordionComponentProps } from './accordion.component';

const eventsFromNames = actions('onClick', 'onKeyDown');

export default {
    component: AccordionComponent,
    title: 'Accordion Component',
    parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta;

const Template: Story<AccordionComponentProps> = (args) => <AccordionComponent {...args} />;

export const Accordion_Component = Template.bind({});
Accordion_Component.args = {
    items: [
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
    ]
}