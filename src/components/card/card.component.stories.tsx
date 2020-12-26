import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { CardComponent, CardComponentProps } from './card.component';
import { utils } from '../../utils';
import { ButtonComponent } from '../button/button.component';
import { actions } from '@storybook/addon-actions';

export default {
  component: CardComponent,
  title: 'Card Component',
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta;

const eventsFromNames = actions('onClick', 'onKeyDown', 'onFocus', 'onBlur');

const Template: Story<CardComponentProps> = (args) => <CardComponent {...args} />;

export const Card_Component = Template.bind({});
Card_Component.args = { title: "Test Title", body: "Test body text", imgUrl: 'https://picsum.photos/300/300'}

export const cardWithOneActionButton = () =>
  <CardComponent
    title={'Card with action abutton'}
    body={utils.lorem}
    imgUrl={'https://picsum.photos/300/300'}>
    <ButtonComponent
      text="Test"
      severity="info"
      {...eventsFromNames} />
  </ CardComponent>;

export const cardWithTwoActionButtons = () =>
  <CardComponent
    title={'Card without action button'}
    body={utils.lorem}
    imgUrl={'https://picsum.photos/300/300'}>
    <ButtonComponent
      text="Long Test"
      severity="info"
      {...eventsFromNames} />

    <ButtonComponent
      text="Test"
      severity="warning"
      {...eventsFromNames} />
  </ CardComponent>;