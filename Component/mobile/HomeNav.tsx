import React, { useEffect, useState } from 'react'
import style from '@/styles/Home.module.css'
import Image from 'next/legacy/image';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

import { LuUser } from "react-icons/lu";
import { useRouter } from 'next/router';
import Login from '../Login';
import SliderNav from '@/Component/SliderNav';
import { RiAuctionLine } from "react-icons/ri";


const HomeNav = ({ setSearch, setTokenForLocal, openDialer, setOpenDialer, setLocationOpen, Search, passLocationData }: any) => {

    const router = useRouter()
    const [profile, setProfile] = useState()
    const [erro, setErro] = useState<any>(false)
    const [error, setError] = useState<any>(false);
    const [LocationName, setLocationName] = useState<any>(null);
    const [Count, setCount] = useState<any>(1);
    const [lat, setLat] = useState<any>('');
    const [log, setLog] = useState<any>('');

    useEffect(() => {
        const token: any = localStorage.getItem('token')
        if (token) {
            setProfile(token)
        }
    }, [openDialer])

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
        localStorage.removeItem('category')
    }

    const handelLogInPage = () => {
        router.push('/')
    }
    // let token: any = '';

    const handelClick = () => {
        router.push('/profile')
    }






    useEffect(() => {
        if (passLocationData) {
            // console.log('hi');
            setTimeout(() => {
                setErro(true)
            }, 100)
        }
    }, [passLocationData])

    useEffect(() => {
        // if (erro) {
            let lat1: any = localStorage.getItem('lat')
            let log1: any = localStorage.getItem('log')
            // console.log(lat1, log1);
            setLat(lat1)
            setLog(log1)
            // console.log(lat, log);
            setErro(false)
        // }
    }, [erro])

    useEffect(() => {
        if (lat && log) {
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${log}`)
                .then(response => response.json())
                .then(data => {
                    if (data.address) {
                        const { city, state, country } = data.address;
                        // console.log(city, state, country, lat, log);
                        setLocationName(`${city ? city + ' ' : ''}${state ? state + ' ' : ''}`);
                        // ${state ? state + ', ' : ''}${country}

                    } else {
                        setLocationName('Location name not found');
                    }
                })
                .catch(err => setError('Failed to fetch location name'));
            setError(null)
        }
    }, [lat, log, erro])

    // console.log(erro);

    const handelUpdateLuctiion = () => {
        setCount(Count + 1)
        setLocationOpen(Count)
    }


    return (
        <>
            <div className={style.home_nav}>
                <div className={style.home_left}>
                    <div className={style.home_menu}>
                        {/* <IoIosMenu /> */}
                        <SliderNav />
                    </div>
                    <div className={style.home_logo}>
                        <Image onClick={handelLogInPage} layout='responsive' width={100} height={40} src={'/images/logo/logo_black.png'} alt='' />
                    </div>
                </div>

                <div onClick={handelUpdateLuctiion} className={style.your_location_can}>
                    <p className={style.Your_Location}>Your Location</p>
                    <p className={style.Your_Location_city}>{LocationName}</p>
                </div>

                <div className={style.home_right}>
                    <div onClick={() => router.push('/WishList')} className={style.manuals_like}>
                        <FaRegHeart />
                    </div>
                    {/* <div onClick={() => router.push('/AutionList')} className={style.manuals_like}>
                        <RiAuctionLine />
                    </div> */}

                    <div className={style.manuals_user}>
                        {profile ? <p>
                            <LuUser onClick={()=>router.push('/profile')} />  </p> : <Login setTokenForLocal={setTokenForLocal} openDialer={openDialer} setOpenDialer={setOpenDialer} />
                        }
                    </div>
                </div>

                <div className={style.home_search}>
                    <input type="text" className={style.search_input} value={Search} onChange={handleSearch} placeholder='Search Your Products...' />
                    <IoIosSearch className={style.search_icon} />
                </div>
            </div>

            <div className={style.WebPhone_Container}>
                <div className={style.home_leftforweb}>
                    <div className={style.home_logoforweb}>
                        <Image onClick={handelLogInPage} layout='responsive' width={100} height={40} src={'/images/logo/logo_black.png'} alt='' />
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
                        {/* <Login setTokenForLocal={setTokenForLocal} openDialer={openDialer} /> */}
                        {profile ? <p>
                            <LuUser onClick={handelClick} />  </p> : <Login setTokenForLocal={setTokenForLocal} openDialer={openDialer} setOpenDialer={setOpenDialer} />
                        }
                    </div>
                </div>
                <div className={style.NavSeller}>
                    <p >Become A Seller</p>
                </div>
            </div>


            <div className={style.navWhitePatti}>

            </div>

        </>
    )
}

export default HomeNav