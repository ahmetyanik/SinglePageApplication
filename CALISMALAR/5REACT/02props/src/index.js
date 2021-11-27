import React from 'react';
import ReactDOM from 'react-dom';
import AnaIcerik from './components/AnaIcerik';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <Header/>
  <AnaIcerik/>
  <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

