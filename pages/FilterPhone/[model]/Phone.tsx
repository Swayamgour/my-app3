import { useGetMobileModelsQuery } from "@/Redux/productsReducer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import style from '@/styles/phoneCompany.module.css';



// import 

function FilterAllMosel() {


    const [Skip, setSkip] = useState(true)

    const router = useRouter()



    useEffect(() => {
        if (router.query.model !== undefined) { setSkip(false) } else { setSkip(true) };
    }, [router.query.model])


    const { data, isSuccess } = useGetMobileModelsQuery(router.query.model, { skip: Skip })

    // console.log(router.query.model , data);

    let Company = data?.brands

    const handelClick = (item: any) => {
        // console.log(router.query.model, item);

        router.push(`/Compare`)
    }
    return (
        <>
            {/* <div className={style.Phone_Main_Compar_Can}> */}
            <div className={style.Phone_Main_Compare}>
                {Company && Company?.map((item: any, index: any) => (
                    <div onClick={() => handelClick(item)} className={style.BrandName} key={index} >
                        <p><span>{item}</span></p>
                    </div>
                ))}
            </div>
            {/* </div> */}
        </>
    )
}

export default FilterAllMosel;
