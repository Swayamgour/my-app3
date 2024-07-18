import React from 'react'
import Image from 'next/legacy/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import style from '@/styles/SwiperSlider.module.css'




const SwiperSlider = () => {
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
                    <div className={style.latest_card}>
                        <h3 className={style.deal_up}>Biggest Deal up to 51% off</h3>
                        <h3 className={style.latest_pnone_name}>apple iphone 13 , 256gb</h3>
                        <div className={style.phone_img}>
                            <Image layout='responsive' width={75} height={100} src='/images/phones.jpg' alt=''/>
                        </div>
                        <div className={style.price}>
                            <div className={style.og_price}>Just ₹22,999</div>
                            <div className={style.mrp_price}>₹39,999</div>
                        </div>
        
                    </div>
                </SwiperSlide>
                })}
        
        
      </Swiper>
        </div>
  )
}

export default SwiperSlider