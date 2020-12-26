import React from 'react';
import { actions } from '@storybook/addon-actions';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ButtonComponent, ButtonComponentProps } from './button.component';

export default {
  component: ButtonComponent,
  title: 'Button Component',
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta;

const eventsFromNames = actions('onClick', 'onKeyDown', 'onFocus', 'onBlur');

const Template: Story<ButtonComponentProps> = (args) => <ButtonComponent {...args} />;

export const Button_Component = Template.bind({});
Button_Component.args = {severity: "info", text: "Test"}

export const withIcon = () =>
  <ButtonComponent
    icon={faCoffee}
    severity={"info"}
    text={"Test"}
    {...eventsFromNames} />;