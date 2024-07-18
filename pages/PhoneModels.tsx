import React from "react";
import Company from '@/public/Company.json';
import style from '@/styles/phoneCompany.module.css';
import { useRouter } from "next/router";

function PhoneModels() {
    const router = useRouter()
    const handelClick = (id: any) => {
        localStorage.setItem('model', id)
        router.push(`/FilterPhone/${id}`)
    }


    return (
        <>
            <div className={style.Phone_Main_Compar_Can}>
                <div className={style.Phone_Main_Compare}>
                    {Company && Company?.filter((i: any, index: number) => index % 2 === 0)?.map((item: any, index: any) => (
                        <div onClick={() => handelClick(item?.brand_name)} className={style.BrandName} key={index} >
                            <p><span>{item?.brand_name}</span></p>
                        </div>
                    ))}
                </div>
                <div className={style.Phone_Main_Compare}>
                    {Company && Company?.filter((i: any, index: number) => index % 2 !== 0)?.map((item: any, index: any) => (
                        <div  onClick={() => handelClick(item?.brand_name)} className={style.BrandName} key={index} >
                            <p><span>{item?.brand_name}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PhoneModels;
