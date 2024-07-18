import React from 'react'
import style from '@/styles/WeekDealSlider.module.css'
import Image from 'next/legacy/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';




const WeekDealSlider = () => {
    return (
        <div className={style.week_deal_slider}>

            
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {Array.apply(null, Array(10)).map((item, index) => {
                        return <SwiperSlide key={index}>
                            <div className={style.week_deal_swiper}>
                            <div className={style.slide_bg_img}>
                                <Image layout='responsive' width={70} height={100} src='/images/slide_bg.png' alt='' />
                            </div>
                            <div className={style.week_deal_card_box}>
                            <div className={style.week_deal_card}>
                                <h3 className={style.week_deal_off}>up to <span className={style.week_deal_off_number}>51%</span></h3>
                                <div className={style.week_deal_pnone_img}>
                                    <Image layout='responsive' width={90} height={100} src='/images/phones2.png' alt='' />
                                </div>
                                <div className={style.week_deal_des}>
                                    <div className={style.week_deal_pnone_name}>realme 11x 5g , 256gb</div>
                                    <div className={style.week_deal_price}>Just ₹22,999</div>
                                </div>
                            </div>

                            </div>
                            </div>
                        </SwiperSlide>
                    })}


                </Swiper>
        </div>
    )
}

export default WeekDealSlider