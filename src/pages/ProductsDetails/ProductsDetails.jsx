import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../../services/api';
import ProductReview from '../../components/ProductReview/ProductReview';
import Reviews from '../../components/Reviews/Reviews';

export default class ProductsDetails extends Component {
  constructor(props) {
    super(props);

    const productId = this.getProductId();

    this.state = {
      product: {},
      reviews: JSON.parse(localStorage.getItem('reviews'))
        ?.filter((item) => item.productId === productId) || [],
    };
  }

  async componentDidMount() {
    const productId = this.getProductId();

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

  getProductId = () => {
    const { match: { params: { productId } } } = this.props;

    return productId;
  }

  onSaveReview = (review) => {
    const { reviews } = this.state;
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const productsReviews = [
      ...reviews,
      review,
    ];

    localStorage.setItem('reviews', JSON.stringify([
      ...storedReviews,
      review,
    ]));

    this.setState({ reviews: productsReviews });
  }

  render() {
    const {
      product: { title, price, thumbnail, attributes },
      reviews,
    } = this.state;

    const productId = this.getProductId();

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

        <ProductReview productId={ productId } onSaveReview={ this.onSaveReview } />
        <Reviews reviews={ reviews } />
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
