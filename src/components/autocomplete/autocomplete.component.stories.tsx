import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { AutocompleteComponent, AutocompleteComponentProps } from './autocomplete.component';

export default {
    component: AutocompleteComponent,
    title: 'Autocomplete Component',
    parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta;

const Template: Story<AutocompleteComponentProps> = (args) => <AutocompleteComponent {...args} />;

export const Autocomplete_Component = Template.bind({});
Autocomplete_Component.args = { suggestions: ['Kiev', 'Kirov', 'Moscow', 'Minsk', 'Prague']}