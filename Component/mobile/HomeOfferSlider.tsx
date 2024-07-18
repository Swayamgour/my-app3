import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import style from '@/styles/Home.module.css'
import Image from 'next/image';
import { useGetBannerQuery } from '@/Redux/productsReducer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import s from '@/styles/swipper.module.css';
import { Pagination, Autoplay } from 'swiper/modules';



const HomeOfferSlider = () => {

  const { data, isSuccess } = useGetBannerQuery('')

  let filterBanner = data?.filter((e: any) => e?.DeviceType === 'Desktop')
  let filterBannerForPhone = data?.filter((e: any) => e?.DeviceType === 'Mobile')
  // console.log(data);






  return (
    <>


      <Swiper autoHeight className={style.Swiper_Container} pagination={true} modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}>
        {filterBanner?.map((i: any, index: React.Key | null | undefined) => (
          <SwiperSlide>
            <div key={index} className={style.slider}>

              <Image layout='responsive' width={100} height={100} src={`https://data.phoneo.in/public/${i?.path}`} alt="" className={style.offerImage} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HomeOfferSlider;