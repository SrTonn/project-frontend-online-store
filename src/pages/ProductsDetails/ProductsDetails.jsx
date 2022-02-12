import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../../services/api';
import ButtonPlusMinus from '../../components/ButtonPlusMinus/ButtonPlusMinus';
import { CartButton } from '../../components/CartButton/CartButton';

import styles from './styles.module.css';

export default class ProductsDetails extends Component {
  state = {
    product: {},
    quantity: 0,
  }

  async componentDidMount() {
    const { match: { params: { productId } } } = this.props;

    const product = await getProductDetails(productId);

    this.setState({
      product: {
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail.replace('I.jpg', 'W.webp'),
        attributes: product.attributes,
      },
    });
  }

handleClick = () => {
}

handleClickQuantity = (operator = 'add') => {
  this.setState((prevState) => ({
    quantity: operator === 'add' ? prevState.quantity + 1 : prevState.quantity - 1,
  }));
}

render() {
  console.log(this.props);
  const {
    product: { title, price, thumbnail, attributes }, quantity,
  } = this.state;

  const attrList = attributes?.map((item) => (
    <li key={ item.id }>
      {item.name}
      {': '}
      {item.value_name}
    </li>
  ));

  return (
    <>
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <CartButton className={ styles.CartButton } />
      </Link>

      <div>
        <h2 data-testid="product-detail-name">
          {title}
          {' '}
          {`R$${price}`}
        </h2>

        <div>
          <img src={ thumbnail } alt={ title } />
          <div>
            <ul>
              {attrList}
            </ul>
          </div>
        </div>
      </div>
      <ButtonPlusMinus
        operator="add"
        handleClickQuantity={ this.handleClickQuantity }
      />
      <span>{ quantity }</span>
      <ButtonPlusMinus
        operator="minus"
        handleClickQuantity={ this.handleClickQuantity }
      />
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
      </Link>
    </>
  );
}
}

ProductsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
};
