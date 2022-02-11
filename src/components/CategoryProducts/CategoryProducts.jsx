import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Card from '../Card/Card';

class CategoryProducts extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const { categoryId } = this.props;
    const { results: products } = await getProductsFromCategoryAndQuery(categoryId);
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    console.log(products[0]);
    const productsEl = products.map((prod) => (<Card
      id={ prod.id }
      key={ prod.id }
      dataTestId="product"
      cardName={ prod.title }
      cardPrice={ `R$${prod.price}` }
      cardImage={ prod.thumbnail.replace('I.jpg', 'W.webp') }
    />
    ));
    return (
      <div>
        {productsEl}
      </div>
    );
  }
}

CategoryProducts.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

export default CategoryProducts;
