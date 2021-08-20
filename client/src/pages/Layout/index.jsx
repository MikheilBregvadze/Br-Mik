import React, {useState, useEffect} from 'react';
import Login from "../Authentication/Login/login";
import Registration from "../Authentication/Registration/registration";

const Authentication = ({showModalLogin, closeModalLoginModal}) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalRegistration, setShowModalRegistration] = useState(false);
    useEffect(() => {
        if(showModal || showModalRegistration)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';

    }, [showModal, showModalRegistration]);

    const closeModal = () => {
        closeModalLoginModal();
        setShowModal(false);
        setShowModalRegistration(false);
    }

    const openRegistrationModal = () => {
        setShowModal(false);
        setShowModalRegistration(true);
    }
    const closeRegisterModal = () => {
        setShowModal(true);
        setShowModalRegistration(false);
    }
    return <>
        {showModalLogin && <Login closeModal={closeModal} openRegistrationModal={openRegistrationModal} />}
        {showModalRegistration &&
        <Registration
            closeModal={closeModal}
            closeRegisterModal={closeRegisterModal}
        />}
    </>
}

export default Authentication;
