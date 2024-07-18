import React, { useState } from 'react'
import Image from 'next/legacy/image'
import style from '@/styles/Store.module.css'
import { useGetAllMobilesQuery } from '@/Redux/productsReducer'
import { useRouter } from 'next/router'

const StoreOption = () => {

  const router = useRouter()

  const { data, isSuccess } = useGetAllMobilesQuery('')
  let filterMobile = data && data?.filter((e: any) => e?.id == router.query.id?.toString())

  const handelClick = () => {
    localStorage.setItem('shopId', filterMobile[0]?.EnjoyerId)
    router.push('/VisitShop')
  }

  return (
    <>
      <div className={style.option}>
       
        <div className={style.option_box}>
          <div className={style.option_img}>
            <Image layout='responsive' height={100} width={100} src={'/images/icons/signal.png'} alt="" />
          </div>
          <div className={style.option_title}>5G</div>
        </div>
        <div className={style.option_box}>
          <div className={style.option_img}>
            <Image layout='responsive' height={100} width={100} src={'/images/icons/shopping.png'} alt="" />
          </div>
          <div className={style.option_price}>under 2,000 to 10,000</div>
        </div>
        <div className={style.option_box}>
          <div className={style.option_img}>
            <Image layout='responsive' height={100} width={100} src={'/images/icons/view_shop.png'} alt="" />
          </div>
          <div onClick={handelClick} className={style.option_title}>View Shop</div>
        </div>
      </div>
     
    </>
  )
}

export default StoreOption