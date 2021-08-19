import React from 'react';
import {NavLink} from "react-router-dom";
import BearIcon from "../../svg/BearIcon";

import style from './navbar.module.css';

const NavBar = () => {
    return (
        <div className={style.contentBottom}>
            <div className="container">
                <div className={style.bearIcon}>
                    <BearIcon width={166} fill="#494949" />
                </div>
                <h1 className={style.title}>-Cool Babies-</h1>
                <nav className={style.navigation}>
                    <ul>
                        <li>
                            <NavLink to='/home' activeClassName={style.active} >home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/girls' activeClassName={style.active} >girls</NavLink>
                        </li>
                        <li>
                            <NavLink to='/boys' activeClassName={style.active} >boys</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' activeClassName={style.active} >about us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' activeClassName={style.active} >contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
