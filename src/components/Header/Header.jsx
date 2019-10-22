import React from 'react';
import css from "./Header.module.css"
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className={css.header}>
            <Navbar/>

            <h1 className={css.h1}>WEB DEVELOPMENT</h1>
        </div>
    );
};

export default Header;