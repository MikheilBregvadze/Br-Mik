import React from "react";
import CloseIcon from "../../svg/CloseIcon";

import style from './modal.module.css';

const Modal = ({ children, closeModal }) => {
    return <div className={style.modal}>
        <button
            className={style.button}
            type="button"
            onClick={closeModal}
        >
            <CloseIcon width={24} />
        </button>
        {children}
    </div>
}

export default Modal;
