import React from 'react'
import style from '@/styles/Home.module.css'
import Image from 'next/legacy/image';
import { PiArrowCircleRightFill } from "react-icons/pi";
import { useGetTrustedQuery } from '@/Redux/productsReducer';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

export interface Option {
    brand: string,
    img: string
}

const HomeSuggestPhone = () => {

    // const {data , isSuccess} = useGetTrustedQuery('')

    // console.log(data);

    const option: Option[] = [
        { brand: "Apple", img: "/images/brand/applee.png" },
        { brand: "Samsung", img: "/images/brand/samsung.png" },
        { brand: "OnePlus", img: "/images/brand/onepluss.png" },
        { brand: "Realme", img: "/images/brand/realmee.png" },
        { brand: "Xiaomi", img: "/images/brand/mi.png" },
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
        { brand: "Honor", img: "/images/brand/honor.png" },
        { brand: "Micromax", img: "/images/brand/micromax.png" },
        { brand: "Gionee", img: "/images/brand/gionee.png" },
    ];

    return (<>
        
        {/* <div className={style.Second_uggested_you}>
            <div className={style.suggested_you_top}>
                <div className={style.suggested_you_title}>Suggested for you</div>
                <div className={style.suggested_you_icon}><PiArrowCircleRightFill /></div>
            </div>

            < div className={style.Second_Phone_Box} >

                <div className={style.Second_suggested_phone}>
                    <div className={style.Second_suggested_img}>
                        <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
                    </div>
                    <div className={style.Second_suggested_phone_brand}>Apple iphone 13</div>
                    <div className={style.Second_suggested_phone_variant}>(blue,256GB)</div>
                    <div className={style.Second_suggested_phone_price_box}>
                        just ₹30,000
                    </div>
                    <span className={style.Second_suggested_phone_offer}>Up to 55% Off</span>
                </div>

                <div className={style.Second_suggested_phone}>

                    {Array.apply(null, Array(2)).map((i, index) => (
                        <div key={index} className={style.Second_suggest_phone}>
                            <div className={style.Second_suggest_img}>
                                <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
                            </div>
                            <div className={style.Second_suggest_phone_brand}>Apple</div>
                            <div className={style.Second_suggest_phone_offer}>Up to 55% Off</div>
                        </div>
                    ))}

                </div>


            </div >



        </div> */}


        <div className={style.suggested_you}>
            <div className={style.suggested_you_top}>
                <div className={style.suggested_you_title}>Suggested for you</div>
                <div className={style.suggested_you_icon}><PiArrowCircleRightFill /></div>
            </div>

            <div className={style.suggested_phones_box}>
                <div className={style.suggested_phone}>
                    <div className={style.suggested_img}>
                        <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
                    </div>
                    <div className={style.suggested_phone_brand}>Apple iphone 13</div>
                    <div className={style.suggested_phone_variant}>(blue,256GB)</div>
                    <div className={style.suggested_phone_price_box}>
                        just ₹30,000
                        <span className={style.suggested_phone_offer}>Up to 55% Off</span>
                    </div>
                    <div className={style.suggest_btn_Div}>

                        <div className={style.suggested_check_out_btn}>check products <span className={style.special_check_out_btn_icon}><LiaLongArrowAltRightSolid /></span></div>
                    </div>
                    <div className={style.Suggested_Brandds}>
                        {option?.slice(0, 6).map((item: any, index: any) => (
                            <div key={index} className={style.brand_imgsss} >
                                <Image layout='responsive' width={100} height={100} src={item.img} alt="" />
                            </div>
                        )
                        )}
                    </div>
                    <div className={style.suggest_btn_Div}>

                        <div className={style.suggested_See_Btn}>See more
                            {/* <span className={style.special_check_out_btn_icon}><LiaLongArrowAltRightSolid /></span> */}
                        </div>
                    </div>
                </div>
                <div className={style.Suggested_phone_PhoneMap}>
                    {Array.apply(null, Array(12)).map((i, index) => (
                        <div key={index} className={style.suggested_phone_Card}>
                            <div className={style.suggested_img_card}>
                                <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
                            </div>
                            <div className={style.suggested_phone_brand_card}>Apple</div>
                            <div className={style.suggested_phone_offer_card}>Up to 55% Off</div>
                        </div>
                    ))}
                </div>

            </div>

        </div>




        {/* <div className={style.suggest}>
            <div className={style.suggest_phones_box}>
                {Array.apply(null, Array(4)).map((i, index) => (
                    <div key={index} className={style.suggest_phone}>
                        <div className={style.suggest_img}>
                            <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
                        </div>
                        <div className={style.suggest_phone_brand}>Apple</div>
                        <div className={style.suggest_phone_offer}>Up to 55% Off</div>
                    </div>
                ))}
            </div>
        </div> */}
    </>)
}

export default HomeSuggestPhone


