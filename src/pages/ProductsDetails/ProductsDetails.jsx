import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../../services/api';
import ProductReview from '../../components/ProductReview/ProductReview';
import Reviews from '../../components/Reviews/Reviews';
import ButtonPlusMinus from '../../components/ButtonPlusMinus/ButtonPlusMinus';
import { CartButton } from '../../components/CartButton/CartButton';
import styles from './styles.module.css';

export default class ProductsDetails extends Component {
  state = {
    product: {},
    quantity: 1,
    reviews: [],
  }

  async componentDidMount() {
    const { match: { params: { productId } } } = this.props;
    const product = await getProductDetails(productId);

    this.setState({
      product: {
        id: productId,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail.replace('I.jpg', 'W.webp'),
        attributes: product.attributes,
      },
      reviews: JSON.parse(localStorage.getItem('reviews'))
        ?.filter((item) => item.productId === productId) || [],
    });
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

  handleClick = () => {
    const { updateCartItem,
      match: { params: { productId } },
      cartProductList,
      updateState,
    } = this.props;
    const { quantity, product } = this.state;

    const hasIdInCart = cartProductList
      .some((productInfo) => productInfo.id === productId);

    if (hasIdInCart) {
      updateCartItem('add', productId, quantity);
      return;
    }
    const productInfos = {
      id: productId,
      title: product.title,
      imageUrl: product.thumbnail,
      price: product.price,
      totalPrice: quantity * product.price,
      quantity,
    };
    updateState('cartProductList', [...cartProductList, productInfos]);
  }

  handleClickQuantity = (operator = 'add') => {
    this.setState((prevState) => {
      if (operator === 'minus') {
        return { quantity: prevState.quantity <= 1 ? 1 : prevState.quantity - 1 };
      }
      return { quantity: prevState.quantity + 1 };
    });
  }

  render() {
    const {
      product: { title, price, thumbnail, attributes, id }, quantity, reviews,
    } = this.state;

    const {
      cartProductList,
    } = this.props;

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
        >
          <CartButton
            className={ styles.CartButton }
            cartList={ cartProductList.length }
          />
        </Link>

        <div>
          <h2 data-testid="product-detail-name">
            {title}
            {' - '}
            {price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
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
          operator="minus"
          handleClickQuantity={ this.handleClickQuantity }
        />
        <span>{quantity}</span>
        <ButtonPlusMinus
          operator="add"
          handleClickQuantity={ this.handleClickQuantity }
        />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>

        <ProductReview productId={ id } onSaveReview={ this.onSaveReview } />
        <Reviews reviews={ reviews } />
      </>
    );
  }
}

ProductsDetails.propTypes = {
  cartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
  updateCartItem: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
};
