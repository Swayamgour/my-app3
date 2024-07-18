import React, { useEffect, useState } from 'react'
import style from '@/styles/Home.module.css'
import Image from 'next/legacy/image';
import { useGetAllMobilesQuery } from '@/Redux/productsReducer';
import HomePhones from './HomePhones';
import { useRouter } from 'next/router';
import PlaceIcon from "@mui/icons-material/Place";


export interface Option {
    brand: string,
    img: string
}
const HomeBrand = () => {
    const { data, isSuccess } = useGetAllMobilesQuery('')
    const [ListOfMobile, setListOfMobile] = useState<any>([])

    const router = useRouter()



    const option: Option[] = [
        { brand: "Apple", img: "/images/brand/applee.png" },
        { brand: "Samsung", img: "/images/brand/samsung.png" },
        { brand: "OnePlus", img: "/images/brand/onepluss.png" },
        { brand: "Realme", img: "/images/brand/realmee.png" },
        { brand: "Xiaomi", img: "/images/brand/mi.png" },
        { brand: "Vivo", img: "/images/brand/vivoo.png" },
        { brand: "Oppo", img: "/images/brand/oppoo.png" },
        { brand: "Infinix", img: "/images/brand/infinix.png" },
        { brand: "Tecno", img: "/images/brand/tecno.png" },
        { brand: "Nokia", img: "/images/brand/nokia.png" },
        { brand: "Motorola", img: "/images/brand/motorola.png" },
        { brand: "Itel", img: "/images/brand/itel.png" },
        { brand: "Lava", img: "/images/brand/lava.png" },
        { brand: "Lenovo", img: "/images/brand/lenovo.png" },
        { brand: "Nothing", img: "/images/brand/noting.png" },
        { brand: "BlackBerry", img: "/images/brand/blackbarry.png" },
        { brand: "Asus", img: "/images/brand/asus.png" },
        { brand: "Honor", img: "/images/brand/honor.png" },
        { brand: "Micromax", img: "/images/brand/micromax.png" },
        { brand: "Gionee", img: "/images/brand/gionee.png" },
    ];

    const SalePriceZero = data && data?.filter((e: any) => e?.SalePrice !== 0)
    const availableBrands = SalePriceZero && SalePriceZero?.map((item: { Company: any; }) => item.Company); // Extracting brands from data
    const filteredOption = availableBrands && option.filter(opt => availableBrands.includes(opt.brand));

    const handelClick = (brand: any) => {
        localStorage.setItem('brand', brand)
        let filterByCompany = data.filter((e: any) => e.Company === brand)
        setListOfMobile(filterByCompany)
        router.push(`/${brand}`)
    }

    return (

        <>
            {/* <div className={style.LocationName} onClick={handelClickForLocation}><PlaceIcon />
                <p>{LocationName}</p>
            </div> */}

            {/* <div>kanpur</div> */}
            <div className={style.Populr_Brand}>
                <p>Popular Brand</p>
            </div>
            <div className={style.brand_box}>

                <div className={style.brand}>
                    {filteredOption && filteredOption.filter((i: any, index: number) => index % 2 === 0).map((item: any, index: any) => (
                        <div onClick={() => handelClick(item?.brand)} key={index} className={style.brand_img} >
                            <Image layout='responsive' width={100} height={100} src={item.img} alt="" />
                        </div>
                    )
                    )}
                </div>

                <div className={style.brand}>
                    {filteredOption && filteredOption.filter((i: any, index: number) => index % 2 !== 0).map((item: any, index: any) => (
                        <div onClick={() => handelClick(item?.brand)} key={index} className={style.brand_img} >
                            <Image layout='responsive' width={100} height={100} src={item.img} alt="" />
                        </div>
                    )
                    )}
                </div>
                {/* <HomePhones ListOfMobile={ListOfMobile} /> */}
            </div>

            <div className={style.brand_boxforweb}>
                <div className={style.brand_top_cate}>
                    <div className={style.brand_top_line}></div>
                    <p>Top category</p>
                    <div className={style.brand_top_line}></div>

                </div>
                <div className={style.brand}>
                    {filteredOption && filteredOption.filter((i: any, index: number) => index).map((item: any, index: any) => (
                        <div onClick={() => handelClick(item?.brand)} key={index} className={style.brand_img} >
                            <Image layout='responsive' width={100} height={100} src={item.img} alt="" />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default HomeBrand