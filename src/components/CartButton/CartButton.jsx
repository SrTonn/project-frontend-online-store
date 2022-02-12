import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class CartButton extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={ className }>
        <Link
          to="/cart"
        >
          <span
            data-testid="shopping-cart-button"
            role="img"
            aria-label="shopping-cart"
          >
            🛒

          </span>
        </Link>
      </div>
    );
  }
}

export default CartButton;

CartButton.propTypes = {
  className: PropTypes.string.isRequired,
};
