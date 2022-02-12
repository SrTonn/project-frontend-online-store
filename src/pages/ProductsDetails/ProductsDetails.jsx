import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../../services/api';
import ButtonPlusMinus from '../../components/ButtonPlusMinus/ButtonPlusMinus';

export default class ProductsDetails extends Component {
  state = {
    product: {},
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

  render() {
    const {
      product: { title, price, thumbnail, attributes },
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
          <span role="img" aria-label="shopping-cart">🛒 Carrinho de Compras</span>
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
        <ButtonPlusMinus />
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
