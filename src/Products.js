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
          <span
            style={
              product.discountPercent > 0
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            }
          >
            ${product.price}
          </span>
          <br />
          {product.discountPercent > 0 ? (
            <span className="badge badge-success">
              $
              {(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
            </span>
          ) : (
            ''
          )}
          <br />
          <span style={{ margin: '12px 0 0 0' }} className="badge">
            {product.availability}
          </span>
          <br />
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
