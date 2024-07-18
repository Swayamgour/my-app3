import React, { useState } from 'react'
import style from '@/styles/Model.module.css'
import { BsArrowLeft, BsHeart } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiUserLine } from "react-icons/ri";
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { IoIosList } from "react-icons/io";
import { VscListFilter } from "react-icons/vsc";
// import ModelSlider from './ModelSlider';
import ModelPhones from './ModelPhones';

const ModelNav = () => {

    const router = useRouter();
    const [Search, setSearch] = useState('');

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }

    const option = [
        { brand: "Apple", img: "/images/brand/applee.png" },
        { brand: "Samsung", img: "/images/brand/samsung.png" },
        { brand: "OnePlus", img: "/images/brand/onepluss.png" },
        { brand: "Realme", img: "/images/brand/realmee.png" },
        { brand: "Xiaomi", img: "/images/brand/mi.png" },
        { brand: "Vivo", img: "/images/brand/vivoo.png" },
        { brand: "Oppo", img: "/images/brand/oppoo.png" },
        { brand: "Infinix", img: "/images/brand/infinix.png" },
        { brand: "Tecno", img: "/images/brand/tecno.png" },
        { brand: "Nokia", img: "/images/brand/nokia.png" },
        { brand: "Motorola", img: "/images/brand/motorola.png" },
        { brand: "Itel", img: "/images/brand/itel.png" },
        { brand: "Lava", img: "/images/brand/lava.png" },
        { brand: "Lenovo", img: "/images/brand/lenovo.png" },
        { brand: "Nothing", img: "/images/brand/noting.png" },
        { brand: "BlackBerry", img: "/images/brand/blackbarry.png" },
        { brand: "Asus", img: "/images/brand/asus.png" },
        { brand: "Honor", img: "/images/brand/honor.png" },
        { brand: "Micromax", img: "/images/brand/micromax.png" },
        { brand: "Gionee", img: "/images/brand/gionee.png" },
    ];

    const handelClick = () => {
        router.back()
    }


    return (
        <>
            <div className={style.model_nav}>
                <div className={style.model_nav_top}>
                    <div className={style.model_nav_left}>
                        <div onClick={handelClick} className={style.model_nav_icon}><BsArrowLeft /></div>
                        <div className={style.model_nav_logo}>
                            <Image layout='responsive' width={100} height={100} src={'/images/logo/logo_theme.png'} alt="" />
                        </div>
                    </div>
                    <div className={style.model_nav_middle}>
                        {option.filter(i => i.brand.toLowerCase() === router.query.model?.toString().toLowerCase()).map((i, index) => (
                            <span key={index} className={style.model_nav_brand_img}>
                                <Image layout='responsive' width={100} height={100} src={i.img} alt="" />
                            </span>
                        ))}
                    </div>
                    <div className={style.model_nav_right}>
                        <span className={style.model_nav_icon}><HiOutlineSearch /></span>
                        <span onClick={() => router.push('/WishList')} className={style.model_nav_icon}><BsHeart /></span>
                        <span className={style.model_nav_icon}><HiOutlineShoppingCart /></span>
                        <span onClick={() => router.push('/profile')} className={style.model_nav_icon}><RiUserLine /></span>
                    </div>

                    <div className={style.model_nav_search}>
                        <input type="text" className={style.model_nav_search_input} placeholder='Search Your Products...' onChange={handleSearch} />
                    </div>
                </div>
                <div className={style.model_nav_bottom}>
                    <div className={style.model_nav_bottom_filter}>
                        <span className={style.model_nav_filter_icon}><IoIosList /></span> sort by
                    </div>
                    <div className={style.model_nav_bottom_filter}>
                        <span className={style.model_nav_filter_icon}><VscListFilter /></span> filter
                    </div>
                </div>
            </div>
            {/* <ModelSlider /> */}
            <ModelPhones Search={Search} />
        </>
    )
}

export default ModelNav