import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import styles from './styles.module.css';

class Products extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const { match: { params: { categoryId } } } = this.props;
    const { results: products } = await getProductsFromCategoryAndQuery(categoryId);
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    console.log(products[0]);
    const productsEl = products.map((prod) => {
      const imgSrc = prod.thumbnail.replace('-I.jpg', '-W.webp');
      return (
        <div key={ prod.id } data-testid="product">
          <img className={ styles.ProductImg } src={ imgSrc } alt={ prod.title } />
          <h5>{prod.title}</h5>
          <h6>{prod.price.toFixed(2)}</h6>
        </div>
      );
    });
    return (
      <div>
        {productsEl}
      </div>
    );
  }
}

Products.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Products;
