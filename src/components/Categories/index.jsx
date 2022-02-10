import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const {
      categories,
    } = this.props;

    return (
      <nav>
        <h1>Categorias:</h1>
        {categories
          .map((item) => (
            <label key={ item.id } data-testid="category" htmlFor={ item.id }>
              <input type="radio" id={ item.id } name="category" value={ item.id } />
              { item.name }
            </label>
          ))}
      </nav>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
