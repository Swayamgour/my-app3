import React from "react";
import Navbar from "./Navbar";
import style from '@/styles/AutionList.module.css'
import Image from "next/image";
import { useRouter } from "next/router";

function AutionList() {


    const array = [
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
        {
            name: 'Apple iPhone 14 Pro',
            color: 'MidNight Green 64GB',
            Rupeey: '₹ 24,999',
            Custumer: 'sold by Ram ecectronics'
        },
    ]


   const router =  useRouter()
    const handelClick = () => {
        router.push('/AuctionDetail')
    }


    return (
        <>
            <Navbar />
            <div className={style.MainCon}>
                <div className={style.MainCon_Center}>

                    <div className={style.PhoneImage_Cantainer}>
                        <div className={style.PhoneImage}>
                            <Image src={'/images/phones.jpg'} width={100} height={10} layout="responsive" alt="phoneImage" />
                        </div>
                        <p>Add Phone</p>
                    </div>

                    <div className={style.mapData}>
                        {array?.map((e, index) => {
                            return (
                                <>
                                    <div className={style.container} onClick={handelClick}>
                                        <div className={style.PhoneImage}>
                                            <Image src={'/images/phones.jpg'} width={100} height={10} layout="responsive" alt="phoneImage" />
                                        </div>
                                        <div className={style.PhoneName_Caintaeiner}>
                                            <p className={style.PhoneName}>{e?.name}</p>
                                            <p className={style.PhoneName}>{`(${e?.color})`}</p>
                                        </div>
                                        <div style={{ textAlign: 'center' }} className={style.PhoneName_Caintaeiner}>
                                            <p className={style.PhonRupeey}>{e?.Rupeey}</p>
                                            <p className={style.PhoneCustmerName}>{e?.Custumer}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AutionList;
