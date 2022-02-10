import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default class App extends React.Component {
  state = {
    inputSearch: '',
    productList: [],
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({
      [name]: value,
    }));
  }

  updateState = (key, value) => {
    this.setState(() => ({
      [key]: value,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                { ...this.state }
                onChange={ this.handleChange }
                updateState={ this.updateState }
              />
            ) }
          />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
