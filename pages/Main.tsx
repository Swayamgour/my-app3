import React, { useState } from 'react'
import style from '@/styles/Main.module.css'
import PopularCard from '@/Component/PopularCard'
import SliderBanner from '@/Component/SliderBanner'
import Footer from './Footer'
import Image from 'next/legacy/image'
import { LiaArrowRightSolid } from 'react-icons/lia'
import SwiperSlider from '@/Component/SwiperSlider'
import WeekDealSlider from '@/Component/WeekDealSlider'
import BestSellerSlider from '@/Component/BestSellerSlider'
import LaunchesSlider from '@/Component/LaunchesSlider'
import UnderPriceSlider from '@/Component/UnderPriceSlider'



const Main = () => {

    const posterOption = [
        {
            brand: 'apple',
            img: '/images/apple.png'
        },
        {
            brand: 'oneplus',
            img: '/images/one.png'
        },
        {
            brand: 'oppo',
            img: '/images/oppo.png'
        },
        {
            brand: 'vivo',
            img: '/images/vivo.png'
        },
        {
            brand: 'xiaomi',
            img: '/images/mi.png'
        },
        
    ]

    const option = [
        { brand: "Apple", img: "/images/brand/applee.png" },
        { brand: "Samsung", img: "/images/brand/samsung.png" },
        { brand: "OnePlus", img: "/images/brand/onepluss.png" },
        { brand: "Realme", img: "/images/brand/realmee.png" },
        { brand: "Xiaomi", img: "/images/brand/mi.png" },
        // { brand: "Poco", img: "/images/brand/poco.png" },
        { brand: "Vivo", img: "/images/brand/vivoo.png" },
        { brand: "Oppo", img: "/images/brand/oppoo.png" },
        { brand: "Infinix", img: "/images/brand/infinix.png" },
        { brand: "Tecno", img: "/images/brand/tecno.png" },
        { brand: "Nokia", img: "/images/brand/nokia.png" },
        { brand: "Motorola", img: "/images/brand/motorola.png" },
        { brand: "Itel", img: "/images/brand/itel.png" },
        { brand: "Lava", img: "/images/brand/lava.png" },
        { brand: "Lenovo", img: "/images/brand/lenovo.png" },
        { brand: "Nothing", img: "/images/brand/noting.png" },
        { brand: "BlackBerry", img: "/images/brand/blackbarry.png" },
        { brand: "Asus", img: "/images/brand/asus.png" },
        // { brand: "IQOO", img: "/images/brand/iqoo.png" },
        { brand: "Honor", img: "/images/brand/honor.png" },
        { brand: "Micromax", img: "/images/brand/micromax.png" },
        { brand: "Gionee", img: "/images/brand/gionee.png" },
      ];

      const optionPrice = [ '5000','10000','15000','20000','25000','30000','35000','40000','45000','50000','55000','60000','65000','70000','75000','80000','85000','90000','95000','100000' ];

      const [BrandSlide,setBrandSlide] = useState('Apple');
      const [PriceSlide,setPriceSlide] = useState('5000');


    return (<>

        
        <div className={style.banner}>
            <Image layout='responsive' width={100} height={35} src="/images/ban1.jpg" alt="" />
        </div>
        <div>
            <SliderBanner />
        </div>


        <div className={style.brand}>
            {/* <h3 className={style.brand_title}>Top Categaries</h3> */}
            <div className={style.brands_slides}>
            <div className={style.brand_list}>
            {option.map((item, index) => (
                    <div key={index} className={(BrandSlide.toLowerCase()===item.brand.toLowerCase())?`${style.brand_img} ${style.active_brand_img}`:style.brand_img} onClick={()=>setBrandSlide(item.brand)}>
                        <Image layout='responsive' width={100} height={100}  src={item.img} alt="" />
                    </div>
                )
                )}
                
            </div>
            </div>
            <div>
                <SwiperSlider/>
            </div>
        </div>

        
        <div className={style.week_deal}>
            
            <h3 className={style.week_deal_title}>Deals Of the week</h3>
            <WeekDealSlider/>
            
        </div>

        <div className={style.best_seller}>
            <h3 className={style.week_deal_title}>Best Seller</h3>
            <BestSellerSlider/>
            
        </div>

        
        <div className={style.new_launches}>
                    <h3 className={style.new_launches_title}>Min. 51% off | New launches | Made for Phoneo</h3>
                    <LaunchesSlider/>
        </div>


        <div className={style.underPrice}>
            <div className={style.under_price_slides}>
            <div className={style.brand_list}>
                
                
                {optionPrice.map((item, index) => (
                    <div key={index} className={(parseInt(PriceSlide)===parseInt(item))?`${style.under_price_title} ${style.active_under_price_title}`:style.under_price_title} onClick={()=>setPriceSlide(item)}>
                        Under {item}
                    </div>
                )
                )}
            </div>
            </div>
            <div>
                <UnderPriceSlider/>
            </div>
        </div>
                 

        {/* <div className={style.careers}>
            <div className={style.left_careers}>
                <h3>Careers</h3>
                <div className={style.left_careers_img}>
                    <Image layout='fill' src="/images/careers.jpg" alt="" />
                </div>
                <div className={style.left_details}>
                    <h3>Careers</h3>
                    <p>Opportunity sometimes knocks on your door</p>
                    <button>Go Ahead</button>
                </div>
            </div>
            <div className={style.right_careers}>
                <h2>IN NUMBERS</h2>
                <div className={style.right_careers_img}>
                    <Image layout='responsive' height={80} width={100} src="/images/icons/sellers.png" alt="" />
                </div>
                <p>Phoneo has</p>
                <h3>5000+ sellers</h3>
            </div>
        </div> */}
        {/* <div className={style.banner_quote}>
            <Image layout='responsive' width={100} height={35} src="/images/banner_quote.jpg" alt="" />
        </div> */}
        <div className={style.seller_signup}>
            <h3>Join Our Phoneo</h3>
            <p>become a seller set-Up your online store and multiply your income 10x by Phoneo</p>
            <button>Join Now</button>
        </div>

        <Footer />
    </>
    )
}

export default Main