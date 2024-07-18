import React, { useEffect, useState } from 'react'
import style from '@/styles/Model.module.css'
import { BsArrowLeft } from "react-icons/bs";
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { IoIosSearch } from "react-icons/io";
import ModelSlider from './ModelSlider';
import ModelPhones from './ModelPhones';
import { LuUser } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa';
import Login from '@/Component/Login';
import { Footer } from 'antd/es/layout/layout';

const ModelNav = () => {

    const router = useRouter();
    const [Search, setSearch] = useState('');
    const [openDialer, setOpenDialer] = useState(false)
    const [profile, setProfile] = useState()
    const [tokenForLocal, setTokenForLocal] = useState()


    useEffect(() => {
        const token: any = localStorage.getItem('token')
        if (token) {
            setProfile(token)
        }
    }, [])


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

    const handelClickForHome = () => {
        router.push('/')
    }


    return (
        <>
            {/* <HomeNav /> */}
            <div className={style.model_nav}>
                <div className={style.model_nav_top}>
                    <div className={style.model_nav_left}>
                        <div onClick={handelClick} className={style.model_nav_icon}><BsArrowLeft /></div>
                        <div className={style.model_nav_logo}>
                            <Image onClick={handelClickForHome} layout='responsive' width={100} height={100} src={'/images/logo/logo_theme.png'} alt="" />
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
                        {/* <span className={style.model_nav_icon}><HiOutlineSearch /></span> */}
                        <span onClick={() => router.push('/WishList')} className={style.model_nav_icon}><FaRegHeart /></span>
                        {/* <span className={style.model_nav_icon}><HiOutlineShoppingCart /></span> */}
                        <span
                            onClick={() => router.push('/profile')}
                            className={style.model_nav_icon}>
                            {profile ? <LuUser onClick={() => router.push('/profile')} /> : <Login setTokenForLocal={setTokenForLocal} openDialer={openDialer} setOpenDialer={setOpenDialer} />}
                        </span>
                    </div>

                    <div className={style.model_nav_search}>
                        <input type="text" className={style.model_nav_search_input} placeholder='Search Your Products...' onChange={handleSearch} />
                    </div>
                </div>

            </div>

            <div className={style.WebPhone_Container}>
                <div className={style.home_leftforweb}>
                    <div className={style.home_logoforweb}>
                        <Image onClick={handelClickForHome} layout='responsive' width={100} height={40} src={'/images/logo/logo_black.png'} alt='' />
                    </div>
                </div>
                <div className={style.home_searchforweb}>
                    <input type="text" className={style.search_inputforweb} onChange={handleSearch} placeholder='Search Your Products...' />
                    <IoIosSearch className={style.search_iconforweb} />
                </div>
                <div className={style.home_rightforweb}>
                    <div onClick={() => router.push('/WishList')} className={style.manuals_like}>
                        <FaRegHeart />
                    </div>

                    <div className={style.manuals_user}>
                        {profile ? <LuUser onClick={() => router.push('/profile')} /> : <Login setTokenForLocal={setTokenForLocal} openDialer={openDialer} setOpenDialer={setOpenDialer} />}
                    </div>
                </div>
                <div className={style.NavSeller}>
                    <p >Become A Seller</p>
                </div>

            </div>
            <div className={style.navWhitePatti}>

            </div>


            {/* <NewUser setOpenDialer={setOpenDialer} /> */}

            <ModelSlider />
            <ModelPhones tokenForLocal={tokenForLocal} Search={Search} setOpenDialer={setOpenDialer} />
            {/* <Footer /> */}
        </>
    )
}

export default ModelNav