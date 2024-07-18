import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import style from '@/styles/SlideNav.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IoIosMenu } from 'react-icons/io';
import { FaUser } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiChatTeardropTextThin } from "react-icons/pi";
import { RiContactsBookLine } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { GiShop } from "react-icons/gi";


type Anchor = 'top' | 'left' | 'bottom' | 'right';
type KeyboardEvent = any;
type MouseEvent = any;

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });


    const router = useRouter();

    const array = [
        {
            name: 'Near by store',
            logo: <FaMapMarkerAlt />,
            link: '/nearbystore',
        },
        {
            name: 'About',
            logo: <PiChatTeardropTextThin />,
            link: '/about',
        },
        {
            name: 'Contact',
            logo: <RiContactsBookLine />,
            link: '/Contacts',
        },
        {
            name: 'By Shop',
            logo: <BsShop />,
            link: '/ByShop',
        },
        {
            name: 'Careers',
            logo: <GoGoal />,
            link: '/career',
        },
        // {
        //     name: 'Health',
        //     logo: <MdOutlineHealthAndSafety />,
        //     link: '/about',
        // },
        {
            name: 'Privacy & policy',
            logo: <MdOutlinePrivacyTip />,
            link: '/privacy&policy',
        },
        {
            name: `FAQ's`,
            logo: <FaQuestionCircle />,
            link: '/faq',
        },

    ]


    const handelClickForRouteAnutherPage = (e: any) => {
        router.push(e)
    }

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: KeyboardEvent | MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as KeyboardEvent).key === 'Tab' ||
                        (event as KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className={style.menu_bar}
        >
            <div className={style.login_Main_Caintaner}>
                <div className={style.login_Catintaner}>
                    <div className={style.login_Catintaner}>
                        <FaUser />
                        <p>Login & Signup</p>
                    </div>
                    <Image src={'/images/logo/logo_theme.png'} width={40} height={40} alt='phoneo logo' />
                </div>
            </div>


            <div className={style.nav_more_option}>
                {array?.map((e, index) => {
                    return (
                        <div onClick={() => handelClickForRouteAnutherPage(e?.link)} className={style.all_option} key={index}>
                            <p>{e?.logo}</p>
                            <p>{e?.name}</p>
                        </div>
                    )
                })}

            </div>

            <div className={style.nav_main_box}>
                <div className={style.nav_become_Box}>
                    <p><GiShop /></p>
                    <p>Become a seller</p>
                </div>
            </div>


        </Box>
    );

    return (
        <React.Fragment>
            <div style={{ zIndex: '1202' }} onClick={toggleDrawer('right', true)} >
                <IoIosMenu />
            </div>

            <SwipeableDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}

            >
                {list('right')}
            </SwipeableDrawer>
        </React.Fragment>


    );
}