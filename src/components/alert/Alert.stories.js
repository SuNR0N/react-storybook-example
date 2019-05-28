import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  text,
} from '@storybook/addon-knobs';

import { Alert } from './Alert';

const types = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Info: 'info',
};

const stories = storiesOf('Alert', module)
  .addDecorator(withKnobs);

stories
  .add('default', () => {
    const alertText = text('Text', 'Lorem ipsum');
    const type = select('Type', types, types.Primary);

    return (
      <Alert type={type}>{alertText}</Alert>
    );
  });

stories
  .add('with custom content', () => {
    const type = select('Type', types, types.Primary);

    return (
      <Alert type={type}>
        <span>Hello <strong>World</strong>!</span>
      </Alert>
    );
  });

stories
  .add('all', () => {
    return (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(types).map(([label, type]) => (
          <li
            key={type}
            style={{ margin: '.5rem 0' }}
          >
            <Alert type={type}>{label}</Alert>
          </li>
        ))}
      </ul>
    )
  });