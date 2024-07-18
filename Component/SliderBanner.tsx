import React from 'react'
import style from '@/styles/Slider.module.css'
import  Carousel from 'react-material-ui-carousel'
import { useMediaQuery } from '@mui/material'
import { Skeleton } from "@mui/material";
import Image from 'next/legacy/image';


const SliderBanner = () => {
  const matches = useMediaQuery('(max-width:768px)');

  const banner = [
    {ban: "/images/ban2.jpg"},
    {ban: "/images/ban3.jpg"},
    {ban: "/images/ban4.jpg"},
  ];
    
  
//   if(matches){
//     return (
//       <>
//        {(!isFetching || !isLoading)?(
//         <div className='carousel-set-banner'>
  
//         <Carousel className='carouselImage-banner carouselImage-banner-mode'>
//         {
//             banner.splice(5,10).map((item,index)=>(             
//                   <img key={index} className='imim-banner' src={item.ban} alt="" />
//             ))
//         }
//         </Carousel>

//      </div>
//        ):(
//               <Skeleton height={'60vh'} animation="wave" variant="rectangular" />  
//        )
//        } 
//       </>
//     )
//   }

  return (
    <>
       {/* {(!isFetching || !isLoading)?( */}
        <div className={style.carousel_set_banner}>
  
        <Carousel className={style.carouselImage_banner}>
        {
            banner.map((item,index)=>(             
                  <Image layout='responsive' width={100} height={35} key={index} className={style.imim_banner} src={item.ban} alt="" />
            ))
        }
        </Carousel>

     </div>
        {/* ):(
               <Skeleton height={'300px'} animation="wave" variant="rectangular" />  
        )
        }  */}
      </>
  )
}

export default SliderBanner