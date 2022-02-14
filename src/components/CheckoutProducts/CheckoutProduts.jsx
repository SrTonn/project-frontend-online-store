import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeadingSecondary from '../HeadindSecondary/HeadingSecondary';
import styles from './styles.module.css';

class CheckoutProduts extends Component {
  render() {
    const { products } = this.props;
    const total = 1000;
    let produtsList;
    if (products && products.length > 0) {
      produtsList = products.map((prod) => (
        <li key={ prod.id } className={ styles.ProductItem }>
          <img
            src={ prod.imageUrl }
            alt={ `Produto ${prod.title}` }
            className={ styles.ProductImg }
          />
          <p className={ styles.ProductDescription }>{ prod.title }</p>
          <h5 className={ styles.ProductPrice }>
            R$
            {' '}
            {prod.price.toFixed(2)}
          </h5>
        </li>
      ));
    } else {
      produtsList = <h1>No products</h1>;
    }

    return (
      <section className={ styles.ProductContainer }>
        <HeadingSecondary title="Revise seus produtos" />
        <ul>
          { produtsList }
        </ul>
        <h5 className={ styles.Total }>
          Total
          {' '}
          <span>{ `R$${total.toFixed(2)}` }</span>
        </h5>
      </section>
    );
  }
}

CheckoutProduts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckoutProduts;
