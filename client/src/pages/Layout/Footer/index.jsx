import React from 'react';
import style from './footer.module.css';
const Footer = () => {
    return (
        <footer className="container">
            <div className={style.formGroup}>
                <h6 className={style.title}>Join our mailing list</h6>
                <form>
                    <div className={style.inputGroup}>
                        <input type="email" placeholder="Enter your email here"/>
                    </div>
                    <button className={style.button} type="button">Subscribe Now</button>
                </form>
            </div>
            <div className={style.footerIcons}>
                <div className={style.icon}>
                    <img src="https://static.wixstatic.com/media/30646eb34311104aba036a018b9a226b.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01/30646eb34311104aba036a018b9a226b.webp" alt="facebook"/>
                </div>
                <div className={style.icon}>
                    <img src="https://static.wixstatic.com/media/2a384ba053f0bc947d659c26264ff715.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01/2a384ba053f0bc947d659c26264ff715.webp" alt="plur"/>
                </div>
                <div className={style.icon}>
                    <img src="https://static.wixstatic.com/media/d090c1c8997ee76d531500a6002f81a2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01/d090c1c8997ee76d531500a6002f81a2.webp" alt="twitter"/>
                </div>
            </div>
            <div className={style.footerText}>© 2023 by COOL BABIES. Proudly created with Br Mikheil</div>
        </footer>
    )
}

export default Footer;
