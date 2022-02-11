import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
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
        <Link
          to={ { pathname: `/productDetails/${id}` } }
          data-testid="product-detail-link"
        >
          <div className={ styles.CardTitleContainer }>
            <span className={ styles.CardTitle }>{cardName}</span>
          </div>
        </Link>
        <img src={ cardImage } alt={ cardName } className={ styles.CardImg } />
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
