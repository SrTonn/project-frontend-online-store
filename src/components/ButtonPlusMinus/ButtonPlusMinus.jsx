import React from 'react';
import { Link } from 'react-router-dom';

export default class ButtonPlusMinus extends React.Component {
  state = {
    quantidade: 0,
  }

  handleClickMinus = () => {
    this.setState((prevState) => ({
      quantidade: prevState.quantidade - 1,
    }));
  }

  handleClickPlus = () => {
    this.setState((prevState) => ({
      quantidade: prevState.quantidade + 1,
    }));
  }

  render() {
    const {
      quantidade,
    } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.handleClickMinus }>-</button>
        <span>{ quantidade }</span>
        <button type="button" onClick={ this.handleClickPlus }>+</button>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </Link>
      </div>
    );
  }
}
