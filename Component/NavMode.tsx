import React from 'react'
import style from '@/styles/Nav.module.css'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import {HiOutlineChatBubbleLeftRight,HiOutlineHome,HiOutlineBuildingStorefront,HiOutlineShoppingCart} from 'react-icons/hi2'
import {LiaUserAstronautSolid} from 'react-icons/lia'
import {GoGoal,GoShieldCheck} from 'react-icons/go'
import {PiUserListDuotone} from 'react-icons/pi'
import {BsPatchQuestion} from 'react-icons/bs'
import { useRouter } from 'next/router';


const NavMode = ({toggleDrawer,state,setState}: any) => {

    const router = useRouter();

    const list = (anchor:any) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={() => setState({ right: false })}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <div className={style.menu_list}>
            <div className={style.menu_tab} onClick={()=>router.push('/')}>
              <HiOutlineHome className={style.menu_tab_icon} />
              <span>Home</span>
            </div>
            <div className={style.menu_tab} onClick={()=>router.push('/about')}>
              <PiUserListDuotone className={style.menu_tab_icon} />
              <span>About</span>
            </div>
            <div className={style.menu_tab} onClick={()=>router.push('/contact')}>
              <LiaUserAstronautSolid className={style.menu_tab_icon} />
              <span>Contact</span>
            </div>
            <div className={style.menu_tab} onClick={()=>router.push('/')}>
              <HiOutlineBuildingStorefront className={style.menu_tab_icon} />
              <span>Near By Store</span>
            </div>
            <div className={style.menu_tab} onClick={()=>router.push('/')}>
              <HiOutlineShoppingCart className={style.menu_tab_icon} />
              <span>By Shope</span>
            </div>
            <div className={style.menu_tab} onClick={()=>router.push('/career')}>
              <GoGoal className={style.menu_tab_icon} />
              <span>Career</span>
            </div>
            <div className={style.menu_tab} onClick={()=>router.push('/privacy&policy')}>
              <GoShieldCheck className={style.menu_tab_icon} />
              <span>Privacy & Policy</span>
            </div>
            <div className={style.menu_tab} onClick={()=>router.push('/faq')}>
              <HiOutlineChatBubbleLeftRight className={style.menu_tab_icon} />
              <span>{`FAQ's`}</span>
            </div>
            <div className={style.menu_tab} onClick={()=>router.push('/faq')}>
              <BsPatchQuestion className={style.menu_tab_icon} />
              <span>Help</span>
            </div>
          </div>
        </Box>
      );

  return (
    <React.Fragment>
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onOpen={toggleDrawer('right', true)}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </SwipeableDrawer>
      </React.Fragment>
  )
}

export default NavMode