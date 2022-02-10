import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Products from './components/Products/Products';

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
          <Route path="/product/:categoryId" component={ Products } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
