import React from 'react';
import { actions } from '@storybook/addon-actions';

import { BadgeComponent } from './badge.component';

export default {
    component: BadgeComponent,
    title: 'Badge',
};

const eventsFromNames = actions('onClick', 'onKeyDown');

export const severityInfo = () =>
    <BadgeComponent
        severity="info"
        text={"Test"}
        url={'#'}
        {...eventsFromNames} />;

export const severityWarning = () =>
    <BadgeComponent
        severity="warning"
        text={"Test"}
        url={'#'}
        {...eventsFromNames} />

export const severityDanger = () =>
    <BadgeComponent
        severity="danger"
        text={"Test"}
        url={'#'}
        {...eventsFromNames} />