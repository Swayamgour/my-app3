import React, { useEffect, useState } from 'react'
import style from '@/styles/Store.module.css'
import styles from '@/styles/Home.module.css'
import Image from 'next/legacy/image'
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiUserLine } from "react-icons/ri";
import { useRouter } from 'next/router';
import { IoIosSearch } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { LuUser } from 'react-icons/lu';
import Login from '@/Component/Login';
import StoreSlider from './StoreSlider';



const StoreNav = () => {
  const router = useRouter()
  const [openDialer, setOpenDialer] = useState(false)
  const [tokenForLocal, setTokenForLocal] = useState()
  
  const [profile, setProfile] = useState()
  useEffect(() => {
    const token: any = localStorage.getItem('token')
    if (token) {
      setProfile(token)
    }
  }, [])
  // console.log(router);
  const handelClick = () => {
    router.back()
  }

  const handleSearch = () => {

  }

  return (
    <>
      <div className={style.store_nav}>
        <div className={style.store_nav_left}>
          <div onClick={handelClick} className={style.store_nav_icon}><BsArrowLeft /></div>
          <div onClick={()=>router.push('/')}  className={style.store_nav_logo}>
            <Image layout='responsive' width={100} height={100} src={'/images/logo/logo_theme.png'} alt="" />
          </div>
        </div>
        <div className={style.store_nav_right}>
          {/* <span className={style.store_nav_icon}><HiOutlineSearch /></span> */}
          {/* <span className={style.store_nav_icon}><HiOutlineShoppingCart /></span> */}
          <span className={style.store_nav_icon}>
            {profile ? <LuUser onClick={() => router.push('/profile')} /> : <Login setTokenForLocal={setTokenForLocal} openDialer={openDialer} setOpenDialer={setOpenDialer} />}

          </span>
        </div>
      </div>


      <div className={styles.WebPhone_Container}>
        <div className={styles.home_leftforweb}>
          <div onClick={()=>router.push('/')} className={styles.home_logoforweb}>
            <Image layout='responsive' width={100} height={40} src={'/images/logo/logo_black.png'} alt='' />
          </div>
        </div>
        <div className={styles.home_searchforweb}>
          <input type="text" className={styles.search_inputforweb} onChange={handleSearch} placeholder='Search Your Products...' />
          <IoIosSearch className={styles.search_iconforweb} />
        </div>
        <div className={styles.home_rightforweb}>
          <div onClick={() => router.push('/WishList')} className={styles.manuals_like}>
            <FaRegHeart />
          </div>
          <div className={styles.manuals_like}>
            <MdOutlineShoppingCart />
          </div>
          <div className={styles.manuals_user}>
            {profile ? <LuUser onClick={() => router.push('/profile')} /> : <Login setTokenForLocal={setTokenForLocal} openDialer={openDialer} setOpenDialer={setOpenDialer} />}

          </div>
        </div>
        <div className={styles.NavSeller}>
          <p >Become A Seller</p>
        </div>

      </div>

      <StoreSlider tokenForLocal={tokenForLocal} setOpenDialer={setOpenDialer}  />
    </>
  )
}

export default StoreNav;
