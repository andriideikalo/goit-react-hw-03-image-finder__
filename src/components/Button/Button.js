import { PropTypes } from 'prop-types';
import React from 'react';

const Button = ({ onClick }) => (
  <div className="SectionButton">
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
