import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      discountPercent: 0,
      availability: 'In Stock',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async event => {
    event.preventDefault();
    await axios
      .post('/api/products', {
        name: this.state.name,
        price: this.state.price,
        discountPercent: this.state.discountPercent,
        availability: this.state.availability,
      })
      .then(() => this.props.loadData());
  };

  handleChange = function(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Product Name:</label>
        <input
          name="name"
          className="form-control"
          onChange={this.handleChange}
          type="text"
        />
        <br />

        <label>Product Price:</label>
        <input
          name="price"
          className="form-control"
          onChange={this.handleChange}
          type="decimal"
        />
        <br />

        <label>Discount Percentage:</label>
        <input
          name="discountPercent"
          className="form-control"
          onChange={this.handleChange}
          type="number"
        />

        <br />
        <label>Availability:</label>
        <select
          name="availability"
          className="form-control"
          onChange={this.handleChange}
        >
          <option value="In Stock">In Stock</option>
          <option value="Backordered">Backordered</option>
          <option value="Discontinued">Discontinued</option>
        </select>
        <br />
        <button className="btn btn-primary" type="submit">
          Create Product
        </button>
      </form>
    );
  }
}
