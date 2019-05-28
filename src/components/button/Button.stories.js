import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  text,
} from '@storybook/addon-knobs';

import { Button } from './Button';

const types = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Info: 'info',
  'Outline Primary': 'outline-primary',
  'Outline Secondary': 'outline-secondary',
  'Outline Success': 'outline-success',
  'Outline Danger': 'outline-danger',
  'Outline Warning': 'outline-warning',
  'Outline Info': 'outline-info',
};

const sizes = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
};

const stories = storiesOf('Button', module)
  .addDecorator(withKnobs);

stories
  .add('default', () => {
    const size = select('Size', sizes, sizes.Medium);
    const type = select('Type', types, types.Primary);
    const value = text('Value', 'Click Me');

    return (
      <Button
        size={size}
        text={value}
        type={type}
      />
    );
  });

stories
  .add('all', () => {
    const size = select('Size', sizes, sizes.Medium);

    return (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(types)
          .filter(([label]) => !label.includes('Outline'))
          .map(([label, type]) => (
            <li
              key={type}
              style={{ margin: '.5rem 0' }}
            >
              <Button
                size={size}
                text={label}
                type={type}
              />
            </li>
          ))}
      </ul>
    )
  });

stories
  .add('all outlined', () => {
    const size = select('Size', sizes, sizes.Medium);

    return (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(types)
          .filter(([label]) => label.includes('Outline'))
          .map(([label, type]) => (
            <li
              key={type}
              style={{ margin: '.5rem 0' }}
            >
              <Button
                size={size}
                text={label}
                type={type}
              />
            </li>
          ))}
      </ul>
    )
  });