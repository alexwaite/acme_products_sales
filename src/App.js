import React, { Component } from 'react';
import Nav from './Nav';
import { HashRouter, Route } from 'react-router-dom';
import Products from './Products';
import CreateProduct from './CreateProduct';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    return axios
      .get('/api/products')
      .then(response => this.setState({ products: response.data }));
  };

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Acme Products/Sales</h1>
          <Nav products={this.state.products} />
          <Route exact path="/" render={() => <h4>Welcome to Acme!</h4>} />
          <Route
            exact
            path="/api/products"
            render={() => (
              <Products
                products={this.state.products}
                loadData={this.loadData}
              />
            )}
          />
          <Route
            exact
            path="/api/products/sales"
            render={() => (
              <Products
                products={this.state.products.filter(
                  product => product.discountPercent > 0
                )}
                loadData={this.loadData}
              />
            )}
          />
          <Route
            exact
            path="/api/products/create"
            render={() => <CreateProduct loadData={this.loadData} />}
          />
        </div>
      </HashRouter>
    );
  }
}
