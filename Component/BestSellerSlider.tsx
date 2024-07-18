import React from 'react'
import style from '@/styles/BestSellerSlider.module.css'
import Image from 'next/legacy/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


const BestSellerSlider = () => {
  return (
    <div className={style.seller_slider}>
            <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {Array.apply(null, Array(10)).map((item, index) => {
                        return <SwiperSlide key={index}>
                            <div className={style.seller_slider_box}>
                                 
                                    {Array.apply(null, Array(3)).map((item, index) => {
                                       return <div key={index} className={style.best_seller_card}>
                                        <div className={style.best_seller_img}>
                                            <Image layout='responsive' width={75} height={100} src='/images/phones.jpg' alt=''/>
                                        </div>
                                        <div className={style.best_seller_card_des}>
                                            <div className={style.best_seller_card_des_top}>
                                            <h3 className={style.best_seller_card_des_subtitle}>smartphone</h3>
                                            <div className={style.best_seller_card_des_phone_name}>realme 11x 5g , 256gb</div>
                                            <div className={style.best_seller_card_des_variant}>(Blue, 4GB RAM)</div>
                                            </div>
                                            <div className={style.best_seller_card_des_bottom}>
                                                <div className={style.best_seller_card_des_price}>₹79,999</div>
                                                <div className={style.best_seller_card_des_shopnow}>shop now <span className={style.shopnow_icon}><MdOutlineKeyboardArrowRight/></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    })}
                            </div>
                        </SwiperSlide>
                    })}
            </Swiper>
    </div>
  )
}

export default BestSellerSlider