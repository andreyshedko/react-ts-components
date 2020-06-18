import React from 'react';
import { AccordionComponent } from './accordion.component';


export default {
    component: AccordionComponent,
    title: 'Accordion Component',
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
                element: 'sasasasasasasass'
            },
            isOpened: false
        }
    ]} />;