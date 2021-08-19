import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import {fakeData} from '../../../services/services';

import 'swiper/swiper-bundle.css';
import style from './collections.module.css';
import './slider.css'

SwiperCore.use([Navigation, Pagination]);

const Collections = ({ useNavigation, spaceBetween }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => setData(fakeData), 200)
    }, [])
    return (
        <>
            <div className={style.card}>
                <Swiper
                    navigation={useNavigation}
                    spaceBetween={20}
                    slidesPerView={4}
                >
                    {data && data.map(item => (
                        <SwiperSlide key={item._id}>
                            <div className={style.cardContainer}>
                                <div>
                                    <img src={item.imagePath} alt="boy1"/>
                                </div>
                                <div className={style.description}>{item.description}</div>
                                <div className={style.price}>${item.price}</div>
                                <div className={style.quickView}>Quick View</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Collections;
