import React, { useEffect, useState } from 'react'
import StoreNav from './StoreNav'
import StoreSlider from './StoreSlider'
import StoreOption from './StoreOption'
import StorePhoneDetails from './StorePhoneDetails'
import router, { useRouter } from 'next/router'
import { useGetAllMobilesQuery } from '@/Redux/productsReducer';
import LocationPermission from '@/Component/LocationPermission'


const index = () => {


  return (
    <>
      {/* {isSuccess && data && */}
      <div>
      
        <StoreNav />


      </div>
      {/* } */}
    </>
  )
}

export default index