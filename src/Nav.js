import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
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
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/api/products/sales">
          Sales
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
