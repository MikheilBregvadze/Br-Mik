import React, {useState, useEffect} from 'react';
import Login from "../Authentication/Login/login";
import Registration from "../Authentication/Registration/registration";

const Authentication = ({showModalLogin, closeModalLoginModal, authenticatedClient}) => {
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
    const closeModalAfterLogin = () => {
        setShowModal(false);
        setShowModalRegistration(false);
    }
    return <>
        {showModalLogin &&
        <Login
            closeModal={closeModal}
            authenticatedClient={authenticatedClient}
            openRegistrationModal={openRegistrationModal} />
        }
        {showModalRegistration &&
        <Registration
            closeModal={closeModal}
            closeRegisterModal={closeModalAfterLogin}
            authenticatedClient={authenticatedClient}
        />}
    </>
}

export default Authentication;
