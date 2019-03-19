import React from 'react';
import axios from 'axios';

const Products = ({ products, loadData }) => {
  const deleteProd = prodId => {
    return axios.delete(`/api/products/${prodId}`).then(() => loadData());
  };

  return (
    <ul id="products" className="list-group">
      {products.map(product => (
        <li key={product.id} className="list-group-item">
          {product.name}
          <br />
          <span>${product.price}</span>
          <br />
          <span className="badge">{product.availability}</span>
          <br />
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => deleteProd(product.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Products;
