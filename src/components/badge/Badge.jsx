import React from 'react';
import PropTypes from 'prop-types';

import './Badge.scss';

export const Badge = (props) => {
  const {
    type,
    value,
  } = props;

  return (
    <span className={`badge badge-${type}`}>{value}</span>
  );
}

Badge.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
};

Badge.defaultProps = {
  type: 'primary',
};