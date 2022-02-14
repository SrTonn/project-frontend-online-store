import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from '../../components/ProductCart/ProductCart';
import styles from './styles.module.css';
import { CartButton } from '../../components/CartButton/CartButton';

export default class Cart extends Component {
  render() {
    const { cartProductList, history: { goBack } } = this.props;

    return (
      <div className={ styles.CartContainer }>
        <button type="button" onClick={ goBack }>go back</button>
        <CartButton className={ styles.CartButton } />
        <h2>Carrinho de Compras</h2>

        <section className={ styles.CartItemsContainer }>
          {cartProductList.length === 0
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> : (
              cartProductList.map((product) => (
                <ProductCart
                  key={ product.id }
                  id={ product.id }
                  imageUrl={ product.imageUrl }
                  title={ product.title }
                  quantity={ product.quantity }
                  price={ product.totalPrice }
                  { ...this.props }
                />
              ))
            )}
        </section>

        <h2>
          Valor Total da Compra:
          {' '}
          {cartProductList.reduce((acc, item) => acc + item.totalPrice, 0)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </h2>
        <button type="button">
          <Link
            to={ {
              pathname: 'checkout',
              state: cartProductList,
            } }
            data-testid="checkout-products"
          >
            Finalizar Compra
          </Link>
        </button>
      </div>
    );
  }
}

Cart.propTypes = {
  cartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
