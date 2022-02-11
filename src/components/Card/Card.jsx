import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardPrice,
      cardImage,
      dataTestId,
      id,
    } = this.props;

    return (
      <div data-testid={ dataTestId } className={ styles.CardContainer }>
        <div className={ styles.CardTitleContainer }>
          <Link
            to={ { pathname: `/productDetails/${id}` } }
            data-testid="product-detail-link"
          >
            <span className={ styles.CardTitle }>{cardName}</span>
          </Link>
        </div>
        <img src={ cardImage } alt={ cardName } className={ styles.CardImg } />
        <button
          className={ styles.Button }
          type="submit"
          data-testid="product-add-to-cart"
        >
          <span role="img" aria-label="add-cart"> Adicionar ao Carrinho 🛒</span>
        </button>
        <p className={ styles.Price }>{cardPrice}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardPrice: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
