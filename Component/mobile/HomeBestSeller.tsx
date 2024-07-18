import React, { useEffect, useState } from 'react'
import style from '@/styles/Home.module.css'
import Image from 'next/image';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useByShopQuery } from '@/Redux/productsReducer';
import { useRouter } from 'next/router';
// impor



const HomeBestSeller = ({ passLocationData }: any) => {

    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    const [Skip, setSkip] = useState(true)
    const [Erro, setErro] = useState(false)

    useEffect(() => {
        if (passLocationData) {
            // console.log('hi');
            setTimeout(() => {
                setErro(true)
            }, 100)
        }
    }, [passLocationData])

    useEffect(() => {
        let lat1: any = localStorage.getItem('lat')
        let lng1: any = localStorage.getItem('log')
        setLat(lat1)
        setLng(lng1)
        setErro(false)
    }, [Erro])

    useEffect(() => {
        if (lat !== undefined && lng !== undefined) { setSkip(false) } else { setSkip(true) };
    }, [Erro, lat, lng])


    const { data } = useByShopQuery({ lat: lat, lng: lng }, { skip: Skip })


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
        // console.log(UserSite);
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

    // console.log(data);

    return (
        <>{
            data?.length !== 0 && <div className={style.best_seller}>
                <div className={style.best_seller_title}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '5px' }}> <p>Best Seller</p>
                        <p onClick={() => router.push('/ByShop')} style={{ fontSize: '12px' }}>view all {`>`}</p>
                    </div>
                </div>

                <div className={style.suggest}>
                    <div className={style.cardForBestSeller}>
                        {data?.slice(0, 4)?.map((e: any, index: any) => {
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
            </div>
        }
        </>
    )
}

export default HomeBestSeller