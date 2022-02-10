import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default class Categories extends Component {
  render() {
    const {
      categories,
    } = this.props;

    return (
      <nav className={ styles.CategoryContainer }>
        <h1>Categorias:</h1>
        {categories
          .map((item) => (
            <Link key={ item.id } to={ `/product/${item.id}` }>
              <label data-testid="category" htmlFor={ item.id }>
                <input type="radio" id={ item.id } name="category" value={ item.id } />
                { item.name }
              </label>
            </Link>
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
