import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../../services/api';

export default class ProductsDetails extends Component {
  state = {
    product: {},
  }

  async componentDidMount() {
    const { match: { params: { productId } } } = this.props;

    const product = await getProductDetails(productId);

    this.setState({ product });
    console.log(product);
  }

  render() {
    const {
      product,
    } = this.state;
    // console.log(this.props);

    const attrList = product.attributes.map((item) => (
      <li key={ item.id }>
        {item.name}
        {': '}
        {item.value_name}
      </li>));

    return (
      <div>
        <h2>
          {product.title}
          {' '}
          {product.price}
        </h2>

        <div>
          <img src={ product.pictures[0].url } alt={ product.title } />

          <div>
            <ul>
              {attrList}
            </ul>

          </div>
        </div>

      </div>
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
