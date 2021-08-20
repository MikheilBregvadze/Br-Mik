import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import Modal from "../../../components/Modal/modal";
import {addUsers} from "../../../services/services";
import {consoleLog, setItemToLocalStorage} from "../../../services/common";

import style from "./registration.module.css";
import 'react-toastify/dist/ReactToastify.css';

const Registration = ({closeModal, closeRegisterModal, authenticatedClient}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const onSubmit = data => {
        addUsers(data)
            .then(res => {
                if(res.data.status === 400) {
                    setError(res.data.errorMessage);
                } else {
                    setItemToLocalStorage('accessToken', res.data.token);
                    authenticatedClient();
                    closeRegisterModal();
                    authenticatedClient(res.data._id);
                }
            })
            .catch(error => {
                console.log(error)
                consoleLog(error);
            })
    };

    useEffect(() => {
        if(error.length > 0) {
            toast.error(error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [error])

    return <Modal closeModal={closeModal}>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <div className={style.content}>
            <h1 className={style.title}>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.inputGroup}>
                    <label htmlFor="name">First Name</label>
                    <input
                        className={errors.name?.type === 'required' ? "errorInput" : ''}
                        name="name"
                        type="text"
                        // autoComplete="off" :TODO uncomment production
                        {...register("name", { required: true })}
                    />
                    {errors.name?.type === 'required' && <span className='errorMessage'>First Name is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        className={errors.lastname?.type === 'required' ? "errorInput" : ''}
                        name="lastname"
                        type="text"
                        // autoComplete="off" :TODO uncomment production
                        {...register("lastname", { required: true })}
                    />
                    {errors.lastname?.type === 'required' && <span className='errorMessage'>Last Name is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        className={errors.email?.type === 'required' ? "errorInput" : ''}
                        name="email"
                        type="email"
                        // autoComplete="off" :TODO uncomment production
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === 'required' && <span className='errorMessage'>E-mail is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        className={errors.password?.type === 'required' ? "errorInput" : ''}
                        name="password"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password?.type === 'required' && <span className='errorMessage'>Password is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        className={errors.confirm_password?.type === 'required' ? "errorInput" : ''}
                        name="confirm_password"
                        type="password"
                        {...register("confirm_password", { required: true })}
                    />
                    {errors.confirm_password?.type === 'required' && <span className='errorMessage'>Confirm Password is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <div className={style.checkbox}>
                    <label htmlFor="checkbox" className={style.container}>This site is protected by reCAPTCHA and the Google
                        <input
                            id="checkbox"
                            name="terms"
                            type="checkbox"
                            {...register("terms", { required: true })}
                        />
                        <span className={style.checkmark} />
                    </label>
                    </div>
                    {errors.terms?.type === 'required' && <span className='errorMessage'>Accept Terms & Condition</span>}
                </div>
                <button className={style.button} type="submit">Sign Up</button>
                <p>Already have an account? <span onClick={closeRegisterModal} >Log In</span></p>
            </form>
        </div>
    </Modal>
}

export default Registration;
