import React from 'react'
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import style from '@/styles/UnderPriceSlider.module.css'



const UnderPriceSlider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Array.apply(null, Array(10)).map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className={style.under_price_slider_box}>

                        {Array.apply(null, Array(3)).map((item, index) => {
                            return <div key={index} className={style.under_price_card}>
                            <div className={style.under_price_phone_img}>
                                <Image layout='responsive' width={75} height={100} src='/images/phones.jpg' alt=''/>
                            </div>
                            <div className={style.under_price_phone_des}>
                                <div className={style.under_price_phone_des_top}>
                                        <h3 className={style.under_price_phone_des_subtitle}>smartphone</h3>
                                        <div className={style.under_price_phone_des_phone_name}>realme 11x 5g , 256gb</div>
                                        <div className={style.under_price_phone_des_variant}>(Blue, 4GB RAM)</div>
                                </div>
                                <div className={style.under_price_phone_des_bottom}>
                                            <div className={style.under_price_phone_des_price}>₹79,999</div>
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

export default UnderPriceSlider