import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import Image from 'next/legacy/image';
import style from '@/styles/Model.module.css'

const ModelSlider = () => {

  const slider = [
    '/images/ad1.png',
    '/images/ad2.png',
    '/images/ad3.png',
    '/images/ad4.png',
  ]


  const CarouselWrapper = styled(Carousel)`
 .slick-dots li button {
    background: var(--massiveGreenHigh);
}
.slick-dots li.slick-active button {

  background: var(--massiveLightGreen);
}
 .slick-dots-bottom{
    bottom:-10px;
}
`;

  const slider_carousel = {
    width: '95%',
    margin: '0 auto',
    marginTop: '3vw',
  }

  return (
    <div className={style.ModelSlider}>
      <CarouselWrapper autoplay style={slider_carousel} dots={false}>
        {slider.map((i, index) => (
          <div key={index} >
            <Image layout='responsive' width={100} height={35} src={i} alt="" />
          </div>
        ))}
      </CarouselWrapper>
    </div>
  );
}

export default ModelSlider;