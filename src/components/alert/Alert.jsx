import React from 'react';
import PropTypes from 'prop-types';

import './Alert.scss';

export const Alert = (props) => {
  const {
    children,
    type,
  } = props;

  return (
    <div
      className={`alert alert-${type}`}
      role="alert"
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  type: 'primary',
};