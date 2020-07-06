import React from 'react';
import { actions } from '@storybook/addon-actions';

import { InputComponent } from './input.component';

export default {
  component: InputComponent,
  title: 'Input Component',
};

const eventsFromNames = actions('onChange', 'onClick', 'onKeyDown', 'onFocus', 'onBlur', 'onKeyUp');

export const textInputComponent = () =>
  <InputComponent
    type={"text"}
    required={true}
    value={"value"}
    {...eventsFromNames} />;

export const disabledTextInputComponent = () =>
  <InputComponent
    type={"text"}
    disabled={true}
    required={false}
    value={"value"}
    {...eventsFromNames} />;

export const errorStateTextInputComponent = () =>
  <InputComponent
    type={"text"}
    required={false}
    value={"value"}
    isError={true}
    errorMessage={'Error Message'}
    {...eventsFromNames} />;