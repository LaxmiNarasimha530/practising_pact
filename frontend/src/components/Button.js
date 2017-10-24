import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, onclick }) => (
  <button
    onClick={onclick}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export { Button as default };
