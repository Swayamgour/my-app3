import { useUserSiteQuery } from "@/Redux/productsReducer";
import Navbar from "@/pages/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import style from '@/styles/Usersity.module.css';
import Image from "next/image";

function UserSity() {
    const router = useRouter()
    const [Skip, setSkip] = useState(true)

    useEffect(() => {
        if (router.query.ShopName !== undefined) { setSkip(false) } else { setSkip(true) };
    }, [router.query?.ShopName])

    const { data } = useUserSiteQuery(router.query?.ShopName, { skip: Skip });
    // console.log(data);

    return (
        <>
            <Navbar />
            {/* <h2> ShopName :- {router.query?.ShopName}</h2> */}

            <div className={style.UserSity_MainDiv}>
                <div>
                    <h1 className={style.ShopName_UserSity}>ShopName </h1>
                    <h1 className={style.ShopName_UserSity_Name}>{router.query.ShopName} </h1>
                </div>
                <div className={style.imageForUserSity} >
                    <Image src='/Mask Group 61.png' width={100} height={100} alt="logo" layout="responsive" />
                </div>
            </div>
        </>
    )
}

export default UserSity;
