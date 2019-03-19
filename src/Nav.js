import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ products }) => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/api/products">
          Products
          <span
            className="badge badge-primary"
            style={{ margin: '0 0 0 10px' }}
          >
            {products.length}
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/api/products/sales">
          Sales
          <span
            className="badge badge-primary"
            style={{ margin: '0 0 0 10px' }}
          >
            {products.filter(product => product.discountPercent > 0).length}
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/api/products/create">
          Create
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
