import React from 'react';
import { Link } from 'react-router-dom';

import { style } from './style.scss';

export default (props) => {
  return (
    <nav className={`${style}`}>
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/about">About</Link>
    </nav>
  );
};
