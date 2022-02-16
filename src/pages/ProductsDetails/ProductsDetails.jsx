import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../../services/api';
import ProductReview from '../../components/ProductReview/ProductReview';
import Reviews from '../../components/Reviews/Reviews';
import ButtonPlusMinus from '../../components/ButtonPlusMinus/ButtonPlusMinus';
import { CartButton } from '../../components/CartButton/CartButton';
import styles from './styles.module.css';
import { FreeShippingTag } from '../../components/FreeShippingTag/FreeShippingTag';

export default class ProductsDetails extends Component {
  state = {
    product: {},
    quantity: 1,
    reviews: [],
  };

  async componentDidMount() {
    const {
      match: {
        params: { productId },
      },
    } = this.props;
    const product = await getProductDetails(productId);
    const { id, title, price, thumbnail, attributes, shipping } = product;

    this.setState({
      product: {
        id,
        title,
        price,
        thumbnail: thumbnail.replace('I.jpg', 'W.webp'),
        attributes,
        freeShipping: shipping.free_shipping,
      },
      reviews:
        JSON.parse(localStorage.getItem('reviews'))?.filter(
          (item) => item.productId === productId,
        ) || [],
    });
  }

  onSaveReview = (review) => {
    const { reviews } = this.state;
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const productsReviews = [...reviews, review];

    localStorage.setItem('reviews', JSON.stringify([...storedReviews, review]));

    this.setState({ reviews: productsReviews });
  };

  handleClick = () => {
    const {
      updateCartItem,
      match: {
        params: { productId },
      },
      cartProductList,
      updateState,
    } = this.props;
    const { quantity, product } = this.state;

    const hasIdInCart = cartProductList.some(
      (productInfo) => productInfo.id === productId,
    );

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
  };

  handleClickQuantity = (operator = 'add') => {
    this.setState((prevState) => {
      if (operator === 'minus') {
        return {
          quantity: prevState.quantity <= 1 ? 1 : prevState.quantity - 1,
        };
      }
      return { quantity: prevState.quantity + 1 };
    });
  };

  render() {
    const {
      product: { title, price, thumbnail, attributes, id, freeShipping },
      quantity,
      reviews,
    } = this.state;

    const attrList = attributes?.map((item) => (
      <li key={ item.id }>
        {item.name}
        {': '}
        {item.value_name}
      </li>
    ));

    const numberOfColumns = {};
    const magicNumber16 = 16;
    if (attributes?.length <= magicNumber16) {
      numberOfColumns.columns = '1';
    } else if (attributes?.length <= magicNumber16 * 2) {
      numberOfColumns.columns = '2';
    } else {
      numberOfColumns.overflow = 'auto';
    }

    return (
      <>
        <Link to="/cart">
          <CartButton className={ styles.CartButton } />
        </Link>

        <div>
          <div className={ styles.Header }>
            <h2 data-testid="product-detail-name">
              {title}
              {' - '}
              {price?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h2>
            {freeShipping ? <FreeShippingTag /> : null}
          </div>
          <div className={ styles.ImgAndAttr }>
            <img src={ thumbnail } alt={ title } />
            <div className={ styles.AttributesList }>
              <ul style={ numberOfColumns }>{attrList}</ul>
            </div>
          </div>
        </div>

        <div className={ styles.CartButtons }>
          <ButtonPlusMinus
            operator="minus"
            handleClickQuantity={ this.handleClickQuantity }
            className={ styles.MinusButton }
          />
          <span>{quantity}</span>
          <ButtonPlusMinus
            operator="add"
            handleClickQuantity={ this.handleClickQuantity }
            className={ styles.AddButton }
          />
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleClick }
            className={ styles.AddToCartButton }
          >
            Adicionar ao carrinho
          </button>
        </div>

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
