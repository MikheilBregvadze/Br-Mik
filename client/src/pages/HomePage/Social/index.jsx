import React from 'react';
import LapIcon from "../../../svg/LapIcon";
import BearIcon from "../../../svg/BearIcon";
import ContactIcon from "../../../svg/ContactIcon";

import style from './social.module.css'

const Social = () => {
    return <div className={style.flex}>
        <div className={style.flexitem}>
            <LapIcon width={109} fill="#494949" />
            <p>FOLLOW US ON FACEBOOK</p>
        </div>
        <div className={style.flexitem}>
            <BearIcon  width={166} fill="#494949"  />
            <p>OUR PHILOSOPHY</p>
        </div>
        <div className={style.flexitem}>
            <ContactIcon width={84} fill="#494949" />
            <p>CUSTOMIZED DESIGNS CONTACT US</p>
        </div>
    </div>
}

export default Social;
