import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.css';

export default class Card extends Component {
  handleAddToCartClick = () => {
    const {
      updateState,
      id,
      cardName,
      cardImage,
      cardPrice,
      cartProductList,
      updateCartItem,
    } = this.props;
    const productInfos = {
      id,
      title: cardName,
      imageUrl: cardImage,
      price: cardPrice,
      totalPrice: cardPrice,
      quantity: 1,
    };
    const hasIdInCart = cartProductList.some((product) => product.id === id);

    if (hasIdInCart) {
      updateCartItem('add', id);
      return;
    }

    updateState('cartProductList', [...cartProductList, productInfos]);
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
        <p className={ styles.Price }>
          {cardPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardPrice: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  cartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
