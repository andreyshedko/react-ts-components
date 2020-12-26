import React from 'react';
import { actions } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import { InputComponent, InputComponentProps } from './input.component';

export default {
  component: InputComponent,
  title: 'Input Component',
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta;

const eventsFromNames = actions('onChange', 'onClick', 'onKeyDown', 'onFocus', 'onBlur', 'onKeyUp');

const Template: Story<InputComponentProps> = (args) => <InputComponent {...args} />;

export const Input_Component = Template.bind({});
Input_Component.args = {type: 'Text', required: true, showClearIcon: true}

export const textInputComponentWithIcon = () =>
  <InputComponent
    type={"text"}
    required={false}
    showSpinner={true}
    {...eventsFromNames} />;

export const errorStateTextInputComponent = () =>
  <InputComponent
    type={"text"}
    required={false}
    showClearIcon={true}
    isError={true}
    errorMessage={'Error Message'}
    {...eventsFromNames} />;