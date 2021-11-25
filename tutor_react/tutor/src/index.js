import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

