import React from 'react';

import { CardComponent } from './card.component';
import { utils } from '../../utils';
import { ButtonComponent } from '../button/button.component';
import { actions } from '@storybook/addon-actions';

export default {
  component: CardComponent,
  title: 'Card Component',
};

const eventsFromNames = actions('onClick', 'onKeyDown', 'onFocus', 'onBlur');

export const defaultCard = () =>
  <CardComponent
    title={'Card without image'}
    body={utils.lorem} />;

export const defaultCardWithSubtitle = () =>
  <CardComponent
    title={'Card without image'}
    subTitle={'Card with subtitle'}
    body={utils.lorem} />;

export const cardWithImage = () =>
  <CardComponent
    title={'Card without image'}
    body={utils.lorem}
    imgUrl={'https://picsum.photos/300/300'} />;

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