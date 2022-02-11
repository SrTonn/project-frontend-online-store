import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.css';

export default class Card extends Component {
  state = {
    cartProductList: [],
  }

  handleAddToCartClick = () => {
    const { updateState, id, cardName, cardImage, cardPrice } = this.props;
    const { cartProductList } = this.state;
    const productInfos = {
      id,
      title: cardName,
      imageUrl: cardImage,
      price: cardPrice,
    };
    this.setState((prevState) => ({
      cartProductList: [...prevState.cartProductList, productInfos],
    }));
    updateState('cartProductList', [...cartProductList, productInfos]);
    console.log(productInfos);
  }

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
          <span
            className={ styles.CardTitle }
            style={ {
              display: '-webkit-box',
              overflow: 'hidden',
              '-webkit-line-clamp': '2',
              '-webkit-box-orient': 'vertical',
            } }
          >
            {cardName}
          </span>
        </div>
        <img src={ cardImage } alt={ cardName } className={ styles.CardImg } />
        <button
          className={ styles.Button }
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ this.handleAddToCartClick }
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
  updateState: PropTypes.func.isRequired,
};
