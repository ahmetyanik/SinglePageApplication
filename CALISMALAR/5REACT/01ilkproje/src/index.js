import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar';
import './index.css';



ReactDOM.render(
  <React.StrictMode>

  <Navbar/>
  <Main/>

  </React.StrictMode>,
  document.getElementById('root')
);