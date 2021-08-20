import React, {useState} from 'react';
import CartIcon from "../../../svg/CartIcon";
import LoginIcon from "../../../svg/LoginIcon";
import Authentication from "../index";

import style from './header.module.css';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const showLoginModal = () => {
        setShowModal(true);
    }
    return (
        <>
            <Authentication showModalLogin={showModal} closeModalLoginModal={() => setShowModal(false)}/>
            <header className={style.header}>
                <div className="container">
                    <div className={style.content}>
                        <div className={style.contentLeft}>TEL. 123-456-7890</div>
                        <div className={style.contentRight}>
                            <div onClick={showLoginModal} className={style.loginParent}>
                                <LoginIcon fill="rgb(196, 88, 88)" width={26} />
                                <span>Log In</span>
                            </div>
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
