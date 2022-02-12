import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonPlusMinus extends React.Component {
  render() {
    const { handleClickQuantity, operator } = this.props;
    return (
      <button
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
};
