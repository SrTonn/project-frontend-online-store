import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

export default class App extends React.Component {
  state = {
    inputSearch: '',
  }

  handleChange = () => {
    console.log('ativei');
  }

  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={ () => (
            <Home
              { ...this.state }
              onChange={ this.handleChange }
            />) }
        />
      </Switch>
    );
  }
}
