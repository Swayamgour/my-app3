import React, { useEffect, useState } from 'react'
import style from '@/styles/NearByStore.module.css'
import Image from 'next/legacy/image'
import { useNearByStoreQuery } from '@/Redux/productsReducer'
import { useRouter } from 'next/router'



const NearByStore = () => {
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


  const { data } = useNearByStoreQuery({ lat: lat, lng: lng }, { skip: Skip })
  const router = useRouter()



  const handelClickForVisitShop = (UserSite: any) => {
    console.log(UserSite);
    router.push(`/userSity/${UserSite}`)
  }



  const handelMap = (StoreLocation: any) => {
    window.open(StoreLocation);
  }


  const milesToKilometers = (miles: any) => {
    return miles * 1.60934;
  };


  const handelKm = (e: any) => {

    const kilometers = milesToKilometers(e);
    return `${kilometers.toFixed(1)} km`
  }

  const Thumb = (e: any) => {


    if (e != null) {

      return `https://data.phoneo.in/public/${e}`
    }
    else {

      return `/Profile/211183122.jpg`
    }

  }

  return (
    <div className={style.near_by_store}>

      <div className={style.suggest}>
        <div className={style.cardForBestSeller}>
          {data?.map((e: any, index: any) => {
            return (
              <>
                <div onClick={() => handelClickForVisitShop(e?.UserSite)} key={index} className={style.cardSingle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className={style.LogoImage_forBest}>
                      <Image src={Thumb(e?.Thumb)} width={100} height={100} alt='image' layout='responsive' className={style.imageLogo} />
                    </div>
                    <p className={style.Distance}>{handelKm(e?.distance)}</p>
                  </div>
                  <p className={style.ShopNameForBestSeller}>{e?.ShopName}</p>


                  <div style={{ display: 'flex', justifyContent: 'flex-end' }} className={style.visitShopCantainer}>
                    <button onClick={() => handelClickForVisitShop(e?.UserSite)}>Visit store</button>
                  </div>

                </div>
              </>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default NearByStore