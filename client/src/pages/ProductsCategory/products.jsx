import React from 'react';
import {useLocation} from "react-router-dom";
import Collections from "../HomePage/Collections";
import style from './products.module.css';

const Products = () => {
    const { pathname } = useLocation();
    const productsTitle = pathname.replace('/','');
    return <div className={style.products}>
        <h1 className={style.title}>{productsTitle}</h1>
        <div className={style.collections}>
            <Collections
                useNavigation={false}
                slidesPerView={4}
            />
        </div>
    </div>
}

export default Products;
