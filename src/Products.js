import React from 'react';

const Products = ({ products }) => {
  return (
    <ul id="products">
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};
export default Products;
