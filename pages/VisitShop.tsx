import { useGetMobileDetailQuery } from "@/Redux/productsReducer";
import React, { useEffect, useState } from "react";
import StoreNav from "./store/[brand]/[model]/[id]/StoreNav";
import style from '@/styles/visitshop.module.css';
import Image from "next/image";
import Navbar from "./Navbar";

function VisitShop() {
    const [shopId, setShopId] = useState('')
    const [Skip, setSkip] = useState(true)

    const { data: visitShop, isSuccess } = useGetMobileDetailQuery(shopId, { skip: Skip })

    // console.log(visitShop, shopId);

    useEffect(() => {
        const shopIdforlocal = localStorage.getItem('shopId')

        if (shopIdforlocal) {
            setShopId(shopIdforlocal)
        }
    }, [shopId, isSuccess])


    useEffect(() => {
        if (shopId !== undefined) { setSkip(false) } else { setSkip(true) };
    }, [shopId, isSuccess]);

    const handelClickforCall = () => {
        const phoneNumber = visitShop && visitShop[0]?.Number; // The number you want to call
        const telUrl = `tel:${phoneNumber}`;
        window.open(telUrl, 'tel')
        // window.location.href = `tel:${phoneNumber}`;
    }
    const openWhatsApp = () => {
        const phoneNumber = `+91 ${visitShop[0]?.Number}`; // The phone number you want to message
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const shareLocation = () => {
        const url = visitShop && visitShop[0]?.StoreLocation
        const parts = visitShop && visitShop[0]?.StoreLocation.split(' ');
        const urlPart = parts.find((part: any) => part.startsWith('https://'));
        if (url.startsWith("https://")) {
            window.open(url, '_blank');
        }
        else {
            window.open(urlPart, '_blank');
        }
    }




    return (
        <>
            <Navbar />
            <div className={style.visitShopContaner}>
                <div className={style.visitShop}>


                    <div className={style.visitShop_Main}>
                        <div className={style.visitShop_ImageDiv}>
                            <Image src='/Profile/Logoforprofile.png' width={100} height={100} alt="shop logo" className={style.visitShop_Image} />
                            <div className={style.visitShop_Profile}>
                                <Image src='/Profile/211183122.jpg' width={100} height={100} alt="shop logo" style={{ borderRadius: '50%' }} />

                            </div>

                        </div>
                    </div>

                    <h1 className={style.VisitShop_Name}>
                        {visitShop && visitShop[0]?.ShopName}
                    </h1>
                    <p className={style.VisitShop_Address}>
                        {visitShop && visitShop[0]?.Address}
                    </p>
                    <div className={style.visitShop_Image_Contaner}>
                        <Image onClick={handelClickforCall} width={60} height={60} src={'/Profile/CALL.png'} alt="call" />
                        <Image onClick={openWhatsApp} width={60} height={60} src={'/Profile/WHATSAPP.png'} alt="Whatsapp" />
                        {/* <Image width={60} height={60} src={'/Profile/INSTA.png'} alt="Instagram" /> */}
                    </div>
                    <div className={style.visitShop_Image_Address}>
                        <div onClick={shareLocation} className={style.visitShop_Buttton}>
                            <div>
                                <Image width={45} height={40} src={'/Profile/Location1.png'} alt="Location" />
                            </div>
                            <div>
                                <p >{visitShop && visitShop[0]?.Address}</p>
                            </div>
                        </div>

                    </div>
                    <div className={style.visitShop_Buttton_for_visitShop}>
                        <p>
                            Visit Store
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitShop;
