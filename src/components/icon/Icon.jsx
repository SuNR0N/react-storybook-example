import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as apple } from '../../assets/icons/apple.svg';
import { ReactComponent as aws } from '../../assets/icons/aws.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as github } from '../../assets/icons/github.svg';
import { ReactComponent as google } from '../../assets/icons/google.svg';
import { ReactComponent as html5 } from '../../assets/icons/html5.svg';
import { ReactComponent as js } from '../../assets/icons/js.svg';
import { ReactComponent as linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as microsoft } from '../../assets/icons/microsoft.svg';

import './Icon.scss';

export const IconType = {
  'apple': apple,
  'aws': aws,
  'facebook': facebook,
  'github': github,
  'google': google,
  'html5': html5,
  'js': js,
  'linkedin': linkedin,
  'microsoft': microsoft,
};

export const Icon = (props) => {
  const {
    color,
    size,
    type,
  } = props;

  if (!IconType[type]) {
    throw new Error(`Icon with type '${type}' does not exist`);
  }

  const IconTag = IconType[type];

  return (
    <IconTag
      className={`icon icon-${size}`}
      style={{ color }} />
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  size: 'md',
};