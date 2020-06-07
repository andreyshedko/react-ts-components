import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
  component: ButtonComponent,
  title: 'Button'
};

export const severityInfo = () => <ButtonComponent severity="info" text={"Test"} onClick={action('clicked')} onKeyDown={action('key down')} />;

export const severityWarning = () =>  <ButtonComponent severity="warning" text={"Test"} onClick={action('clicked')} onKeyDown={action('key down')} />