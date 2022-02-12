import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import { getProductsFromCategoryAndQuery, getCategories } from '../../services/api';
import styles from './styles.module.css';
import Categories from '../../components/Categories/Categories';
import CategoryProducts from '../../components/CategoryProducts/CategoryProducts';

export default class Home extends Component {
  state = {
    categories: [],
    hasSearched: false,
    categoryClicked: false,
    categoryId: '',
  }

  async componentDidMount() {
    const list = await getCategories();

    this.setState({ categories: list });
  }

  handleClick = async () => {
    const { inputSearch, updateState } = this.props;
    const { results } = await getProductsFromCategoryAndQuery(null, inputSearch) || [];
    updateState('productList', results);
    this.setState(() => ({ hasSearched: true }));
  }

  handleCategoryClick = async ({ target }) => {
    const categoryId = target.id;
    this.setState({ categoryClicked: true, categoryId });
  }

  render() {
    const { inputSearch, productList, updateState } = this.props;
    const { hasSearched, categories, categoryClicked, categoryId } = this.state;
    return (
      <>
        <div className={ styles.SearchDiv }>
          <Input
            name="inputSearch"
            dataTestId="query-input"
            value={ inputSearch }
            className={ styles.SearchInput }
            { ...this.props }
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Buscar

          </button>

          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <span role="img" aria-label="shopping-cart">🛒 Carrinho de Compras</span>
          </Link>

        </div>
        {!hasSearched && (
          <p
            className={ styles.TagP }
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}

        <div className={ styles.MenuAndCards }>
          <Categories
            categories={ categories }
            onInputClick={ this.handleCategoryClick }
          />
          <main className={ styles.ContainerCards }>
            {productList && productList.length > 0
              && (
                productList.map(({ id, price, title, thumbnail }) => (
                  <Card
                    key={ id }
                    dataTestId="product"
                    cardName={ title }
                    cardPrice={ price }
                    cardImage={ thumbnail.replace('I.jpg', 'W.webp') }
                    id={ id }
                    updateState={ updateState }
                    { ...this.props }
                  />
                )))}
            { categoryClicked && <CategoryProducts categoryId={ categoryId } /> }
            {hasSearched && productList
            && productList.length === 0 ? <p>Nenhum produto foi encontrado</p> : null }
          </main>
        </div>
      </>
    );
  }
}

Home.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
