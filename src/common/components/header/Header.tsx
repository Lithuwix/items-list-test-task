import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header_wrapper}>
            <h1 className={s.main_title}>Test Homework</h1>
            <input className={s.search_input} type="text" placeholder="Search"/>
        </div>
    )
}

export default Header;