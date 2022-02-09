import React, { Component } from 'react';
import Input from '../../components/Input';
import styles from './styles.module.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <Input />
        <p
          className={ styles.TagP }
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}
