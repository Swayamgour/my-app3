import React from 'react'
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import style from '@/styles/LaunchSlider.module.css'


const LaunchesSlider = () => {
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
                            <div className={style.launch_box}>
                                <div className={style.launch_card}>
                                    <div className={style.launch_card_bg_img}>
                                        <Image layout='responsive' width={100} height={60} src='/images/launches_bg.jpg' alt=''/>
                                    </div>
                                    <div className={style.launch_card_phone_img}>
                                    <Image layout='responsive' width={90} height={100} src='/images/phones2.png' alt=''/>
                                    </div>
                                    <div className={style.launch_card_phone_des}>Min. 51% off | OPPO A78 5G</div>
                                </div>
                                <div className={style.launch_card}>
                                    <div className={style.launch_card_bg_img}>
                                        <Image layout='responsive' width={100} height={60} src='/images/launches_bg.jpg' alt=''/>
                                    </div>
                                    <div className={style.launch_card_phone_img}>
                                    <Image layout='responsive' width={90} height={100} src='/images/phones2.png' alt=''/>
                                    </div>
                                    <div className={style.launch_card_phone_des}>Min. 51% off | OPPO A78 5G</div>
                                </div>
                                
                            </div>
                    </SwiperSlide>
                })}
            </Swiper>

            <div className={style.launch_card_see_more}>
                                    <div className={style.see_all}>see all</div>
                                    <div className={style.see_brand}>Brands</div>
                                </div>
        </div>
    )
}

export default LaunchesSlider