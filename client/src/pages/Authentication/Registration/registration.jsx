import React from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../components/Modal/modal";

import style from "./registration.module.css";

const Registration = ({closeModal, closeRegisterModal}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return <Modal closeModal={closeModal}>
        <div className={style.content}>
            <h1 className={style.title}>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.inputGroup}>
                    <label htmlFor="name">First Name</label>
                    <input
                        // className="errorInput"
                        name="name"
                        type="text"
                        {...register("name", { required: true })}
                    />
                    {errors.name?.type === 'required' && <span className='errorMessage'>First Name is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        name="lastname"
                        type="text"
                        {...register("lastname", { required: true })}
                    />
                    {errors.lastname?.type === 'required' && <span className='errorMessage'>Last Name is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === 'required' && <span className='errorMessage'>E-mail is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password?.type === 'required' && <span className='errorMessage'>Password is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="password">Confirm Password</label>
                    <input
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
                            name="checkbox"
                            type="checkbox"
                            {...register("checkbox", { required: true })}
                        />
                        <span className={style.checkmark} />
                    </label>
                    </div>
                    {errors.checkbox?.type === 'required' && <span className='errorMessage'>Accept Terms & Condition</span>}
                </div>
                <button className={style.button} type="submit">Sign Up</button>
                <p>Already have an account? <span onClick={closeRegisterModal} >Log In</span></p>
            </form>
        </div>
    </Modal>
}

export default Registration;
