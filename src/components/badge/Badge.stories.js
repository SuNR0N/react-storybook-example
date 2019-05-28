import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  text,
} from '@storybook/addon-knobs';

import { Badge } from './Badge';

const types = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Info: 'info',
};

const stories = storiesOf('Badge', module)
  .addDecorator(withKnobs);

stories
  .add('default', () => {
    const type = select('Type', types, types.Primary);
    const value = text('Value', 'Badge');

    return (
      <Badge
        type={type}
        value={value}
      />
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
            <Badge
              type={type}
              value={label}
            />
          </li>
        ))}
      </ul>
    )
  });