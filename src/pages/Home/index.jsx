import React, { Component } from 'react';
import Input from '../../components/Input';
import styles from './styles.module.css';
import Categories from '../../components/Categories';
import { getCategories } from '../../services/api';

export default class Home extends Component {
  state = {
    categories: [],
  }

  async componentDidMount() {
    const list = await getCategories();

    this.setState({ categories: list });
  }

  render() {
    const {
      categories,
    } = this.state;

    return (
      <>
        <Input
          name="inputSearch"
          { ...this.props }
        />
        <p
          className={ styles.TagP }
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Categories categories={ categories } />
      </>
    );
  }
}
