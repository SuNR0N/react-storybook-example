import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  color,
} from '@storybook/addon-knobs';

import {
  Icon,
  IconType,
} from './Icon';

const types = Object.keys(IconType);
const sizes = {
  'Small': 'sm',
  'Medium': 'md',
  'Large': 'lg',
  'X-Large': 'xl',
};

const stories = storiesOf('Icon', module)
  .addDecorator(withKnobs);

stories
  .add('default', () => {
    const colorCode = color('Color', '#000000');
    const type = select('Type', types, types[0]);
    const size = select('Size', sizes, sizes.Medium);

    return (
      <Icon
        color={colorCode}
        size={size}
        type={type}
      />
    );
  });

stories
  .add('all', () => {
    const colorCode = color('Color', '#000000');
    const size = select('Size', sizes, sizes.Medium);

    return (
      <div>
        {types.map((type) => {
          return (
            <Icon
              key={type}
              color={colorCode}
              size={size}
              type={type}
            />
          );
        })}
      </div>
    );
  });