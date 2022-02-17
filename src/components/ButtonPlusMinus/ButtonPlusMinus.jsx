import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonPlusMinus extends React.Component {
  render() {
    const { handleClickQuantity, operator, className } = this.props;
    return (
      <button
        className={ className }
        type="button"
        onClick={ () => handleClickQuantity(operator) }
      >
        {operator === 'add' ? '+' : '-'}

      </button>
    );
  }
}

ButtonPlusMinus.propTypes = {
  handleClickQuantity: PropTypes.func.isRequired,
  operator: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
