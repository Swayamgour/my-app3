import React from "react";
import Navbar from "./Navbar";
import style from '@/styles/AuctionDetail.module.css'
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

function AuctionDetail() {

    const array = [
        {
            name: 'Shri Ram electronics',
            offer: 'Offer you',
            Price: '₹ 24,999'
        },
        {
            name: 'Shri Ram electronics',
            offer: 'Offer you',
            Price: '₹ 24,999'
        },
        {
            name: 'Shri Ram electronics',
            offer: 'Offer you',
            Price: '₹ 24,999'
        },
        {
            name: 'Shri Ram electronics',
            offer: 'Offer you',
            Price: '₹ 24,999'
        },
        {
            name: 'Shri Ram electronics',
            offer: 'Offer you',
            Price: '₹ 24,999'
        },
    ]
    return (
        <>
            <Navbar />

            <div className={style.AuctionDetain_Container}>
                <div className={style.Search_Main_Caintainer}>
                    <h2>Which phone do you have?</h2>
                    <div className={style.search_Cantainer}>
                        <CiSearch />
                        <input placeholder="Search" />
                    </div>
                </div>


                <div className={style.phone_Caintaner}>
                    <div className={style.Phone_Caintainer_Left}>
                        <p>your device</p>
                        <h2 style={{ marginTop: '10px' }}>Apple iPhone 14 Pro</h2>
                        <h2>{`(Midnight Green 64GB)`}</h2>

                        <p>Selling Price</p>
                        <h1>{`₹ 24,999`}</h1>

                        <h1 className={style.Review}>
                            Review your Sell
                        </h1>
                    </div>



                    <div className={style.Phone_Caintainer_Right}>
                        <div className={style.PhoneImage_Cantainer}>
                            <Image src='/images/phones.jpg' alt="Phone Image" width={100} height={100} layout="responsive" />
                        </div>
                    </div>
                </div>


                <div>
                    {array?.map((e, index) => {
                        return (
                            <>
                                <div className={style.MainCaintainer} key={index}>
                                    <div className={style.Phone_Detail1}>
                                        <p className={style.Name_Phone}>{e?.name}</p>
                                        <div className={style.Phone_Detail}> 
                                            <p className={style.Offer}>{e?.offer}</p>
                                            <p className={style.Price}>{e?.Price}</p>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default AuctionDetail;
