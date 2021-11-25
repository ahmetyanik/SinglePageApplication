import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

