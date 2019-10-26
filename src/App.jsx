import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
import "https://code.jquery.com/jquery-3.3.1.slim.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js";
*/
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import { Button } from 'reactstrap';

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
