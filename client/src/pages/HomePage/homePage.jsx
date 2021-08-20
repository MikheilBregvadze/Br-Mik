import React, {useEffect} from "react";
import Banner from "../../components/Slider";
import Collections from "./Collections";
import Social from "./Social";
import style from "./homePage.module.css";
import {getUsers} from "../../services/services";

const HomePage = () => {
    useEffect(() => {
        getUsers()
            .then(res => {
                console.log(res)
            })
    }, [])
    return <>
        <Banner />
        <h1 className={style.title}>Our Collection</h1>
        <Collections
            useNavigation={true}
            slidesPerView={4}
        />
        <Social />
    </>
}

export default HomePage;
