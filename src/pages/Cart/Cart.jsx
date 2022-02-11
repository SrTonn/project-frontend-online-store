import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCart from '../../components/ProductCart/ProductCart';
import styles from './styles.module.css';

export default class Cart extends Component {
  render() {
    const { cartProductList } = this.props;
    return (
      <div className={ styles.CartContainer }>
        <h2>Carrinho de Compras</h2>

        <section className={ styles.CartItemsContainer }>
          {cartProductList.length === 0 ? <p>Seu carrinho está vazio!!!</p> : (
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
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}

Cart.propTypes = {
  cartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
