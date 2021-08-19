import React from "react";
import Modal from "../../../components/Modal/modal";
import { useForm } from "react-hook-form";

import style from "./login.module.css";

const Login = ({closeModal, openRegistrationModal}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return <Modal closeModal={closeModal}>
        <div className={style.content}>
            <h1 className={style.title}>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === 'required' && <span className='errorMessage'>E-mail is required</span>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password?.type === 'required' && <span className='errorMessage'>Password is required</span>}
                </div>
                <button className={style.button} type="submit">Sign In</button>
            </form>
            <p>Haven't account yet? <span onClick={openRegistrationModal}>Register</span></p>
        </div>
    </Modal>
}

export default Login;
