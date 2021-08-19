import React from "react";

import style from './about.module.css';

const About = () => {
    return <div className={style.content}>
        <div className={style.background}>
            <img src="https://static.wixstatic.com/media/41d000_d453eddd582d482ee3588f7679d44881.jpg/v1/fill/w_559,h_559,al_c,q_80,usm_0.66_1.00_0.01/41d000_d453eddd582d482ee3588f7679d44881.webp" alt="boy"/>
        </div>
        <div className={style.about}>
            <h1 className={style.title}>OUR STORY</h1>
            <h4>How we started</h4>
            <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                <br />​This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </p>
        </div>
    </div>
}

export default About;
