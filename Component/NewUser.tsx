import Image from "next/image";
import React from "react";
import style from '@/styles/NewUser.module.css';





function NewUser({ setOpenDialer }: any) {


    const handelClick = () => {
        setOpenDialer(true)
    }
    return (
        <>
            <div  className={style.Image}>
                <Image onClick={handelClick} src={'/Group 3007.png'} alt="new user off" width={22} height={180} />
            </div>
        </>
    )
}

export default NewUser;
