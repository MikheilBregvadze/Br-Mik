import React, {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode'
import CartIcon from "../../../svg/CartIcon";
import LoginIcon from "../../../svg/LoginIcon";
import Authentication from "../index";
import {consoleLog, getItemFromLocalStorage} from "../../../services/common";

import style from './header.module.css';
import {getUser} from "../../../services/services";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [isAuth, setIsAuth] = useState(getItemFromLocalStorage('accessToken'));
    const [showDropDown, setShowDropDown] = useState(false);
    const [client, setClient] = useState(null);
    const showLoginModal = () => {
        setShowModal(true);
    }
    useEffect(() => {
        if(isAuth) {
            getUser(jwt_decode(getItemFromLocalStorage('accessToken')).id)
                .then(res => {
                    setClient(res.data);
                })
                .catch(error => {
                    consoleLog(error);
                })
        }
    }, [isAuth])

    const updateHeader = (_id) => {
        setIsAuth(true);
        setShowModal(false);
    }
    const logOutUser = () => {
        setIsAuth(false);
        localStorage.removeItem('accessToken');
    }
    return (
        <>
            <Authentication
                authenticatedClient={updateHeader}
                showModalLogin={showModal}
                closeModalLoginModal={() => setShowModal(false)}
            />
            <header className={style.header}>
                <div className="container">
                    <div className={style.content}>
                        <div className={style.contentLeft}>TEL. 123-456-7890</div>
                        <div className={style.contentRight}>
                            {!isAuth ?
                                <div onClick={showLoginModal} className={style.loginParent}>
                                    <LoginIcon fill="rgb(196, 88, 88)" width={26} />
                                    <span>Log In</span>
                                </div> :
                                <div onClick={() => setShowDropDown(!showDropDown)} className={style.userMenu}>
                                    <LoginIcon fill="rgb(196, 88, 88)" width={26} />
                                    <span>{client && client.name}</span>
                                    <ul className={showDropDown ? style.showDropdown : ''}>
                                        <li>Profile</li>
                                        <li onClick={logOutUser}>Log Out</li>
                                    </ul>
                                </div>
                            }

                            <div className={style.cartParent}>
                                <div>
                                    <CartIcon width={26} fill="rgb(196, 88, 88)" />
                                </div>
                                <span  className={style.cartCount}>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
