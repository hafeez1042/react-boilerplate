import React from 'react';
import { Link } from 'react-router-dom';

const { style } = require('./style.scss');

export default (props) => {
  return (
    <footer className={`${style}`}>
      &copy; 2018 React Simple Boilerplate
    </footer>
  );
};
