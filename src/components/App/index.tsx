import React from 'react';
import Header from '../Header';
import NavBar from  '../NavBar';
import Footer from  '../Footer';

import '../../styles/global.scss'
const { style } = require('./style.scss');

export default ({children}) => {
  return (
    <div className={`${style}`}>
      <Header />
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
