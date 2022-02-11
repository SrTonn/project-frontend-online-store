import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.css';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardPrice,
      cardImage,
      dataTestId,
    } = this.props;
    return (
      <div data-testid={ dataTestId } className={ styles.CardContainer }>
        <div className={ styles.CardTitleContainer }>
          <span className={ styles.CardTitle }>{cardName}</span>
        </div>
        <img src={ cardImage } alt={ cardName } className={ styles.CardImg } />
        <button type="submit"> Adicionar ao carrinho 🛒</button>
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
};
