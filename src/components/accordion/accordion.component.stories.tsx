import React from 'react';

import { AccordionComponent } from './accordion.component';
import { utils } from '../../utils';

export default {
    component: AccordionComponent,
    title: 'Accordion Component',
};

export const accordionComponent = () =>
    <AccordionComponent
        items={[
            {
                title: 'Head Title',
                body: {
                    title: 'Body Title',
                    element: utils.lorem
                }
            }
        ]} />;