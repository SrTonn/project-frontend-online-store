import React, { Component } from 'react';
import HeadingSecondary from '../HeadindSecondary/HeadingSecondary';

class CheckoutProduts extends Component {
  render() {
    const { products } = this.props;
    const total = '1000';
    const produtsList = products.map((prod) => (
      <li key={ prod.id }>
        <img src="#" alt={ `Produto ${prod.title}` } />
        <p>{ prod.title }</p>
        <h5>
          Total:
          {' '}
          <span>{prod.price}</span>
        </h5>
      </li>
    ));

    return (
      <section>
        <HeadingSecondary title="Revise seus produtos" />
        <ul>
          <img src="#" alt="Nome do Produto" />
          { produtsList }
        </ul>
        <h5>
          Total
          <span>{total}</span>
        </h5>
      </section>
    );
  }
}

export default CheckoutProduts;
