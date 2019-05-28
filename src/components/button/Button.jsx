import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export const Button = (props) => {
  const {
    size,
    text,
    type,
    ...rest
  } = props;

  return (
    <button
      className={`button button-${type} button-${size}`}
      {...rest}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  size: 'md',
  type: 'primary',
};