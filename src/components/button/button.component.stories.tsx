import React from 'react';
import { actions } from '@storybook/addon-actions';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { ButtonComponent } from './button.component';

export default {
  component: ButtonComponent,
  title: 'Button Component',
};

const eventsFromNames = actions('onClick', 'onKeyDown', 'onFocus', 'onBlur');

export const severityInfo = () =>
  <ButtonComponent
    severity="info" text={"Test"}
    {...eventsFromNames} />;

export const severityWarning = () =>
  <ButtonComponent
    severity="warning"
    text={"Test"}
    {...eventsFromNames} />

export const severityDanger = () =>
  <ButtonComponent
    severity="danger"
    text={"Test"}
    {...eventsFromNames} />

export const withIcon = () =>
  <ButtonComponent
    icon={faCoffee}
    severity="info"
    text={"Test"}
    {...eventsFromNames} />;

export const disabledButton = () =>
  <ButtonComponent
    icon={faCoffee}
    severity="info"
    disabled={true}
    text={"Test"}
    {...eventsFromNames} />;