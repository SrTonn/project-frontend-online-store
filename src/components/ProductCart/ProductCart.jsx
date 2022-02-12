import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.css';

export default class ProductCart extends Component {
  render() {
    const { id, title, imageUrl, price, quantity, updateCartItem } = this.props;
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
          style={ {
            display: '-webkit-box',
            overflow: 'hidden',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
          } }
        >
          <abbr
            title={ title }
            data-testid="shopping-cart-product-name"
          >
            {title}

          </abbr>
        </div>
        <span>-</span>
        <button
          onClick={ () => updateCartItem('less', id) }
          type="button"
          id={ id }
          data-testid="product-decrease-quantity"
          name="less"
        >
          Remover
        </button>
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <button
          type="button"
          id={ id }
          name="add"
          data-testid="product-increase-quantity"
          onClick={ () => updateCartItem('add', id) }
        >
          Adicionar
        </button>
        <span>+</span>
        <span className={ styles.Price }>
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </div>
    );
  }
}

ProductCart.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  updateCartItem: PropTypes.func.isRequired,
};
