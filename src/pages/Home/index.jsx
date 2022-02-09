import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import styles from './styles.module.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <Input
          name="inputSearch"
          { ...this.props }
        />
        <p
          className={ styles.TagP }
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <span>🛒 Carrinho de Compras</span>
        </Link>
      </>
    );
  }
}
