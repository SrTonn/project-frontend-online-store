import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.css';

export default class ProductCart extends Component {
  getLocalStorageCart = () => {
    const { id } = this.props;
    const LsCartProductList = JSON.parse(localStorage.getItem('CartProductList'));
    const itemInCart = LsCartProductList.find((item) => item.id === id);
    return itemInCart.quantity;
  };

  render() {
    const { id, title, imageUrl, price, updateCartItem } = this.props;
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
        <span
          data-testid="shopping-cart-product-quantity"
        >
          {this.getLocalStorageCart()}

        </span>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  updateCartItem: PropTypes.func.isRequired,
};
