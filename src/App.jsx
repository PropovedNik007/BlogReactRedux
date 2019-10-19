import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from "./components/Header.jsx";
import Navbar from "./components/Main/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
