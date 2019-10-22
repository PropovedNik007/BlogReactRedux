import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Section/>
            <Footer/>
        </div>
    );
};

export default App;
