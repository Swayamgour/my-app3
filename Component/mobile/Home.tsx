import React, { useEffect, useState } from 'react';
import style from '@/styles/Home.module.css';
import HomeNav from './HomeNav';
import HomeBrand from './HomeBrand';
import HomeOfferSlider from './HomeOfferSlider';
import HomePhones from './HomePhones';
import HomeBestSeller from './HomeBestSeller';
import HomeSpecial from './HomeSpecial';
import HomeSuggestPhone from './HomeSuggestPhone';
import { useGetAllMobilesQuery } from '@/Redux/productsReducer';
import { useRouter } from 'next/router';
import NewUser from '@/Component/NewUser';
import LocationPermission from '../LocationPermission';
import Location from '@/Component/Location';
import HomeNearbyStore from './HomeNearbyStore';
// import { Footer } from 'antd/es/layout/layout';
import Footer from '@/pages/Footer';
import ModelSlider from '@/pages/[model]/ModelSlider';


const Home = () => {

  const { data, isSuccess } = useGetAllMobilesQuery('')
  const [Search, setSearch] = useState('')
  const [tokenForLocal, setTokenForLocal] = useState()
  const [openDialer, setOpenDialer] = useState(false)
  const [error, setError] = useState(null)
  const [passLocationData, setPassLocationData] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const router = useRouter()

  // console.log(passLocationData);

  useEffect(() => {
    const Logout = localStorage.getItem('token')
    if (!Logout) {
      router.push('/')
    }
  }, [])


  return (
    <>
      {isSuccess && data &&
        <div className={style.home}>
          <HomeNav passLocationData={passLocationData} setSearch={setSearch} Search={Search} setTokenForLocal={setTokenForLocal} openDialer={openDialer} setOpenDialer={setOpenDialer} setLocationOpen={setLocationOpen} />
          <HomeBrand />
          <NewUser setOpenDialer={setOpenDialer} />
          <HomeOfferSlider />
          <Location error={error} setPassLocationData={setPassLocationData} locationOpen={locationOpen} />
          <HomePhones setSearch={setSearch} Search={Search} tokenForLocal={tokenForLocal} setOpenDialer={setOpenDialer} setError={setError} setPassLocationData={setPassLocationData} setLocationOpen={setLocationOpen} passLocationData={passLocationData} />
          <HomeOfferSlider />
          <HomeNearbyStore passLocationData={passLocationData} />
          <HomeBestSeller passLocationData={passLocationData} />
          <HomeSuggestPhone />
          <Footer />

        </div>
      }
      {/* } */}
    </>
  )
}

export default Home