import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonPlusMinus extends React.Component {
  render() {
    const { onClick, operator, className, isDisabled, dataTestId } = this.props;
    return (
      <button
        className={ className }
        type="button"
        onClick={ () => onClick(operator) }
        disabled={ isDisabled }
        data-testid={ dataTestId }
      >
        {operator === 'add' ? '+' : '-'}
      </button>
    );
  }
}

ButtonPlusMinus.defaultProps = {
  className: '',
};

ButtonPlusMinus.propTypes = {
  onClick: PropTypes.func.isRequired,
  operator: PropTypes.func.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
