import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useByShopQuery } from "@/Redux/productsReducer";
import Image from "next/image";
import style from '@/styles/Byshop.module.css'
import { useRouter } from "next/router";

function ByShop() {

    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    const [Skip, setSkip] = useState(true)

    useEffect(() => {
        const lat: any = localStorage.getItem('lat')
        const lng: any = localStorage.getItem('log')
        setLat(lat)
        setLng(lng)
    }, [])

    useEffect(() => {
        if (lat !== undefined && lng !== undefined) { setSkip(false) } else { setSkip(true) };
    }, [lat, lng])


    const { data, isSuccess } = useByShopQuery({ lat: lat, lng: lng }, { skip: Skip })

    // console.log(data?.map((e) => e?.Thumb));

    const Thumb = (e: any) => {


        if (e != null) {

            return `https://data.phoneo.in/public/${e}`
        }
        else {

            return `/Profile/211183122.jpg`
        }

    }

    const router = useRouter()

    const handelClickForVisitShop = (UserSite: any) => {
        console.log(UserSite);
        router.push(`/userSity/${UserSite}`)
    }



    const handelMap = (StoreLocation: any) => {

        const url = StoreLocation
        const parts = StoreLocation.split(' ');
        const urlPart = parts.find((part: any) => part.startsWith('https://'));
        if (url.startsWith("https://")) {
            window.open(url, '_blank');
        }
        else {
            window.open(urlPart, '_blank');
        }
    }

    return (
        <>

            <Navbar />



            <h2 style={{ textAlign: 'center' }}>{`All Store's`}</h2>
            <div className={style.suggest}>
                <div className={style.cardForBestSeller}>
                    {data?.map((e: any, index: any) => {
                        return (
                            <>
                                <div key={index} className={style.cardSingle}>
                                    <div onClick={() => handelClickForVisitShop(e?.UserSite)} className={style.LogoImage_forBest}>
                                        <Image src={Thumb(e?.Thumb)} width={100} height={100} alt='image' layout='responsive' className={style.imageLogo} style={{ borderRadius: '50%' }} />
                                    </div>
                                    <p onClick={() => handelClickForVisitShop(e?.UserSite)} className={style.ShopNameForBestSeller}>{e?.ShopName}</p>
                                    <p onClick={() => handelMap(e?.StoreLocation)} className={style.AddressForBestSeller}>{e?.Address}</p>

                                    <div className={style.visitShopCantainer}>
                                        <div onClick={() => handelMap(e?.StoreLocation)} className={style.mapLogo}>
                                            <Image src={'/Home/image.webp'} width={100} height={100} alt='map' layout='responsive' />
                                        </div>
                                        <button onClick={() => handelClickForVisitShop(e?.UserSite)}>Visit store</button>
                                    </div>

                                </div>

                            </>

                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default ByShop;
