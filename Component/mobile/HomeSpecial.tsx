import React from 'react'
import style from '@/styles/Home.module.css'
import Image from 'next/legacy/image';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const HomeSpecial = () => {
  return (
    <div className={style.special}>
        <div className={style.special_img}>
        <Image layout='responsive' width={100} height={20} src={'/images/theme1.png'} alt="" />
        </div>
        <div className={style.special_des}>
            <div className={style.special_title}>special campanigns: april!</div>
            <div className={style.special_title_des}>sign up to avoid missing discounts!</div>
            <div className={style.special_check_out_btn}>check products <span className={style.special_check_out_btn_icon}><LiaLongArrowAltRightSolid/></span></div>
        </div>
    </div>
  )
}

export default HomeSpecial