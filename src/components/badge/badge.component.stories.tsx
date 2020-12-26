import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { BadgeComponent, BadgeComponentProps } from './badge.component';

export default {
    component: BadgeComponent,
    title: 'Badge Component',
    parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta;

const Template: Story<BadgeComponentProps> = (args) => <BadgeComponent {...args} />;

export const Badge_Component = Template.bind({});
Badge_Component.args = {text: 'Test Text', severity: 'info'}