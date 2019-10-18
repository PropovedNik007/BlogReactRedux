import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Article from "./Article.js";
import Footer from "./Footer";


function App() {
  return (
    <div className='app-wrapper'>
        <Nav />
        <Main />
        <Article />
        <Footer />
    </div>
  );
}

export default App;
