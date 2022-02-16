import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ButtonPlusMinus from '../ButtonPlusMinus/ButtonPlusMinus';
import styles from './styles.module.css';

export default class ProductCart extends Component {
  render() {
    const {
      id,
      title,
      imageUrl,
      price,
      quantity,
      availableQuantity,
      updateCartItem,
    } = this.props;
    const isDisabledAddOne = quantity >= availableQuantity;

    return (
      <div className={ styles.CartItemContainer }>
        <button
          onClick={ () => updateCartItem('remove', id) }
          type="button"
          id={ id }
          name="remove"
        >
          remover
        </button>
        <img src={ imageUrl } className={ styles.TagImg } alt={ title } />
        <div
          data-testid="shopping-cart-product-name"
          style={ {
            display: '-webkit-box',
            overflow: 'hidden',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
          } }
        >
          <abbr
            title={ title }
          >
            {title}

          </abbr>
        </div>
        <ButtonPlusMinus
          operator="minus"
          onClick={ () => updateCartItem('less', id) }
          dataTestId="product-decrease-quantity"
        />
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <ButtonPlusMinus
          operator="add"
          onClick={ () => updateCartItem('add', id) }
          className={ `${isDisabledAddOne ? 'disabled' : null}` }
          isDisabled={ isDisabledAddOne }
          dataTestId="product-increase-quantity"
        />
        <span className={ styles.Price }>
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </div>
    );
  }
}

ProductCart.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  updateCartItem: PropTypes.func.isRequired,
};
