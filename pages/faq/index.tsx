import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Faq from './Faq'
import StoreNav from '@/pages/store/[brand]/[model]/[id]/StoreNav'

const index = () => {
  return (<>
    <Navbar />
    <Faq />
    
    {/* <Footer /> */}
  </>)
}

export default index