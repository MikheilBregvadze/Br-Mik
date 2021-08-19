import React from "react";

import style from "./contact.module.css";

const Contact = () => {
    return <div className={style.content}>
        <div className={style.informationBoard}>
            <h2>CONTACT US</h2>
            <h4>TO ORDER CALL:</h4>
            <h6>1800-000-0000﻿</h6>

            <h4 className={style.borderTop}>FOR RETURNS:</h4>
            <h6>500 Terry Francois St.</h6>
            <h6>San Francisco, CA 94158</h6>
            <h6>info@mysite.com</h6>
            <h6>﻿Tel: 123-456-7890</h6>
        </div>
        <form className={style.formGroup}>
            <div className={style.inputGroup}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                />
            </div>
            <div className={style.inputGroup}>
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                />
            </div>
            <div className={style.inputGroup}>
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                />
            </div>
            <div className={style.inputGroup}>
                <textarea
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Type your message here"
                ></textarea>
            </div>
            <button className={style.button} type="button">Submit</button>
        </form>
    </div>
}

export default Contact;
