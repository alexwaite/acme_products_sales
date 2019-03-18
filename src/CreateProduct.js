import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async event => {
    event.preventDefault();
    await axios.post('/api/products', {
      name: this.state.name,
      price: this.state.price,
    });
  };

  handleChange = function(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Product Name:</label>
        <input name="name" onChange={this.handleChange} type="text" />

        <label>Product Price:</label>
        <input name="price" onChange={this.handleChange} type="number" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
