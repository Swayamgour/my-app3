import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
// import Contact from './Contact'
import Profile from './Profile'
import StoreNav from '@/pages/store/[brand]/[model]/[id]/StoreNav'

const index = () => {
    return (<>
        <Navbar />
        {/* <StoreNav /> */}
        <Profile />
        {/* <Footer /> */}
    </>)
}

export default index