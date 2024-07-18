import React, { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import style from '@/styles/Store.module.css'
import { Segmented } from 'antd';
import { LiaFileInvoiceSolid, LiaBoxSolid } from "react-icons/lia";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { CiHardDrive } from "react-icons/ci";
import { PiCameraThin } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import {
    PiArrowsInLineVerticalThin,
    PiCpuThin,
    PiScalesThin,
    PiCameraRotateThin,
    PiDeviceMobileCameraThin,
    PiBatteryChargingVerticalThin,
} from "react-icons/pi";
import { MdCable, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import HomeBestSeller from '@/Component/mobile/HomeBestSeller';

import { useGetAllMobilesQuery } from '@/Redux/productsReducer';
import { useRouter } from 'next/router';
import { Dialog } from '@mui/material';
import HomeNearbyStore from '@/Component/mobile/HomeNearbyStore';

const StorePhoneDetails = ({ MD, filterMobile, mobileDetail, tokenForLocal, setOpenDialer }: any) => {


    const [Seg, setSeg] = useState('Bill')
    const [More, setMore] = useState(false)
    const [FirstRateOfMobile, setFirstRateOfMobile] = useState<any>()
    const [SecondRateOfMobile, setSecondRateOfMobile] = useState<any>([])
    const [MobileDetailForUser, setMobileDetailForUser] = useState<any>()
    const [Open, setOpen] = useState<any>(false)
    const [profile, setProfile] = useState()
    const { data, isSuccess } = useGetAllMobilesQuery('')
    const router = useRouter()
    let filterValue = data && data.filter((e: any) => e?.SalePrice !== 0)
    let sameModel: any = isSuccess && filterValue && filterValue?.filter((e: any) => e?.Company === filterMobile[0]?.Company && e?.Model === filterMobile[0]?.Model)
    // console.log(sameModel && sameModel);

    function removeDuplicates(data: any) {
        let seen: any = {};
        return data.filter(function (item: any) {
            let combination = item.Color + item.Variant;
            return seen.hasOwnProperty(combination) ? false : (seen[combination] = true);
        });
    }

    let uniqueData = data && removeDuplicates(sameModel && sameModel);

    // function removeDuplicatess(data: any) {
    //     let seen = {};
    //     return data.filter(function (item: any) {
    //         let combination = item.Variant ;
    //         return seen.hasOwnProperty(combination) ? false : (seen[combination] = true);
    //     });
    // }

    // let uniqueDatas = data &&  removeDuplicatess(sameModel && sameModel);
    // console.log(uniqueData?.map((e)=>e.Variant));


    useEffect(() => {
        const token: any = localStorage.getItem('token')
        if (token) {
            setProfile(token)
        }
    }, [tokenForLocal])
    const condition = [
        {
            title: 'Box Open',
            t1: 'Just Like New',
            t2: 'Fresh, In Warranty',
            t3: 'Quality Checked',
        },
        {
            title: 'Awsm',
            t1: '1-2 Minor Scratches',
            t2: 'No Dents',
            t3: 'No Discoloration',
        },
        {
            title: 'Good',
            t1: '3-5 Minor Scratches',
            t2: 'Few Dents',
            t3: 'Corner Discoloration',
        },
        {
            title: 'Fair',
            t1: '5-10 Scratches',
            t2: 'Dents',
            t3: 'Corner Discoloration',
        },
    ];
    useEffect(() => {
        if (MD) {
            setFirstRateOfMobile(MD?.mobdata?.data)
            setMobileDetailForUser(filterMobile)
        }
    }, [MD, filterMobile])

    // console.log(FirstRateOfMobile);

    useEffect(() => {
        if (filterMobile?.length !== 0) {

            handleIncreasePrice()
        }

    }, [filterMobile])

    const handleIncreasePrice = () => {
        // Use map to create a new array with conditionally updated prices
        const updatedData = filterMobile && filterMobile?.map((item: any) => {
            let priceIncrease = 0;
            // let obj = '';

            if (item.SalePrice <= 10000) {
                priceIncrease = 1000;
            }
            else if (item.SalePrice <= 20000) {
                priceIncrease = 2000;
            }
            else if (item.SalePrice <= 30000) {
                priceIncrease = 3000;
            }
            else if (item.SalePrice <= 40000) {
                priceIncrease = 4000;
            }
            else if (item.SalePrice <= 50000) {
                priceIncrease = 5000;
            }
            else if (item.SalePrice <= 60000) {
                priceIncrease = 6000;
            }
            else if (item.SalePrice <= 70000) {
                priceIncrease = 7000;
            }
            else if (item.SalePrice <= 80000) {
                priceIncrease = 8000;
            }
            else if (item.SalePrice <= 90000) {
                priceIncrease = 9000;
            }
            else if (item.SalePrice <= 100000) {
                priceIncrease = 10000;
            }
            else if (item.SalePrice <= 110000) {
                priceIncrease = 11000;
            }
            else if (item.SalePrice <= 120000) {
                priceIncrease = 12000;
            }



            return {
                ...item,
                MainPrice: item.SalePrice + priceIncrease,
            };
        });

        setSecondRateOfMobile(updatedData);
    };


    const OfferPrice = (e: any) => {
        // console.log(e[0]?.PriceHide?.split(',')[0] === 'false');
        if (e[0]?.PriceHide) {
            if (e[0]?.PriceHide?.split(',')[0] === 'false') {

                return <div>₹ {e[0]?.MainPrice}</div>
            }

            else if (e[0]?.PriceHide?.split(',')[0] === '1' && e[0]?.PriceHide?.split(',')[1] === 'false' || e[0]?.PriceHide?.split(',')[1] === '0') {

                return <div>₹ {e[0]?.MainPrice}</div>
            }
            else if (e[0]?.PriceHide?.split(',')[0] === '2' && e[0]?.PriceHide?.split(',')[1] === 'false' || e[0]?.PriceHide?.split(',')[1] === '0' || e[0]?.PriceHide?.split(',')[1] === '2') {

                return <div>₹ {e[0]?.MainPrice}</div>
            }
            else if (e[0]?.PriceHide?.split(',')[0] === '3' && e[0]?.PriceHide?.split(',')[1] === 'false' || e[0]?.PriceHide?.split(',')[1] === '0') {

                return <div>₹ {e[0]?.MainPrice}</div>
            }
            else if (e[0]?.PriceHide?.split(',')[0] === '1' && e[0]?.PriceHide?.split(',')[1] === 'true' || e[0]?.PriceHide?.split(',')[1] === '1') {

                return <div>₹ XX,XXX</div>
            }
            else if (e[0]?.PriceHide?.split(',')[0] === '2' && e[0]?.PriceHide?.split(',')[1] === 'true' || e[0]?.PriceHide?.split(',')[1] === '1') {

                return <div>₹ {e[0]?.MainPrice.toString()[0]}X,XXX</div>
            }
            else if (e[0]?.PriceHide?.split(',')[0] === '3' && e[0]?.PriceHide?.split(',')[1] === 'true' || e[0]?.PriceHide?.split(',')[1] === '1') {

                let v = e?.MainPrice.toString()
                let value = v.slice(1)
                return <div>X,{value}</div>
            } else {
                return <div>₹ {e[0]?.MainPrice}</div>

            }
        }
        return;
    }

    const offer = (e: any) => {
        const off = e[0]?.Offer
        if (off === null) {
            const value: any = Math.round(((parseInt(e[0]?.MainPrice) - (e[0]?.SalePrice)) / (e[0]?.MainPrice)) * 100)

            return <div>{value}% Off</div>
        } else if (off !== null) {
            if (off?.split(',')[0] === 'true' && off?.split(',')[1] !== '' && parseInt(off?.split(',')[1]) === 0 && e[0]?.PriceHide?.split(',')[0] === '1' && e[0]?.PriceHide?.split(',')[1] === 'false' || e[0]?.PriceHide?.split(',')[1] === '0' || e[0]?.PriceHide === 'false') {
                const value = Math.round(((parseInt(e[0]?.MainPrice) - (e[0]?.SalePrice)) / (e[0]?.MainPrice)) * 100)

                return <div>{value}% Off</div>;
            }
            else if (e[0]?.PriceHide?.split(',')[0] === '1' || e[0]?.PriceHide?.split(',')[0] === '2' || e[0]?.PriceHide?.split(',')[0] === '3' && e[0]?.PriceHide?.split(',')[1] === 'true' || e[0]?.PriceHide?.split(',')[1] === '1' && off?.split(',')[0] === 'true' && off?.split(',')[1] !== '' && parseInt(off?.split(',')[1]) === 0) {
                const value = Math.round(((parseInt(e[0]?.MainPrice) - (e[0]?.SalePrice)) / (e[0]?.MainPrice)) * 100)

                return <div>{value}% Off</div>;
            }
            else if (off?.split(',')[0] === 'false' && off?.split(',')[1] !== '' && parseInt(off?.split(',')[1]) > 0) {
                const value = parseInt(off?.split(',')[1]);

                return <div>{value}% Off</div>;
            } else if ((off?.split(',')[0] === 'true' || off?.split(',')[0] === 'false') && (off?.split(',')[1] === '' || parseInt(off?.split(',')[1]) <= 0)) {
                const value = Math.round(((parseInt(e[0]?.MainPrice) - (e[0]?.SalePrice)) / (e[0]?.MainPrice)) * 100)

                return <div>{value}% Off</div>
            } else {
                const value = Math.round(((parseInt(e[0]?.MainPrice) - (e[0]?.SalePrice)) / (e[0]?.MainPrice)) * 100)

                return <div>{value}% Off</div>;
            }
        }
    }

    const priceHide = (e: any) => {
        const off = (e[0]?.Offer);
        // console.log(off);

        if (off?.split(',')[0] === 'true' && off?.split(',')[1] > 0) {
            return <span>₹ {e[0]?.SalePrice - off?.split(',')[1]}</span>
        }
        if (e[0]?.PriceHide.split(',')[0] === 'false') {
            return <span>₹ {e[0]?.SalePrice}</span>
        }
        if (e[0]?.PriceHide === '') {
            return <span>₹ {e[0]?.SalePrice}</span>
        }

        else if (e[0]?.PriceHide.split(',')[0] === '1' && e[0]?.PriceHide.split(',')[1] === 'false' || e[0]?.PriceHide.split(',')[1] === '0') {
            return <span>₹ {e[0]?.SalePrice}</span>
        }
        else if (e[0]?.PriceHide.split(',')[0] === '2' && e[0]?.PriceHide.split(',')[1] === 'false' || e[0]?.PriceHide.split(',')[1] === '0' || e[0]?.PriceHide.split(',')[1] === 'undefined') {
            return <span> ₹ {e[0]?.SalePrice}</span>
        }
        else if (e[0]?.PriceHide.split(',')[0] === '3' && e[0]?.PriceHide.split(',')[1] === 'false' || e[0]?.PriceHide.split(',')[1] === '0') {
            return <span>₹ {e[0]?.SalePrice}</span>
        }
        else if (e[0]?.PriceHide.split(',')[0] === '1' && e[0]?.PriceHide.split(',')[1] === 'true' || e[0]?.PriceHide.split(',')[1] === '1') {
            return <span> ₹ XX,XXX</span>
        }
        else if (e[0]?.PriceHide.split(',')[0] === '2' && e[0]?.PriceHide.split(',')[1] === 'true' || e[0]?.PriceHide.split(',')[1] === '1') {
            return <span>₹ {e[0]?.SalePrice.toString()[0]}X,XXX</span>
        }
        else if (e[0]?.PriceHide.split(',')[0] === '3' && e[0]?.PriceHide.split(',')[1] === 'true' || e[0]?.PriceHide.split(',')[1] === '1') {
            let v = e[0]?.SalePrice.toString()
            let value = v.slice(1)
            return <span> ₹ X,{value}</span>
        }
    }

    function GetCam(data: any) {
        // // // // //(data[]);
        // console.log(data[]);

        let key = data && data[6]?.specs[0]?.key
        let Skey = data && data[7]?.specs[0]?.key
        let Front = "";
        let Back = "";

        if (Skey === "Single") {
            let Cam1 = data[7]?.specs[0]?.val.toString().split(",")
            Front = Cam1[0]
        }

        if (Skey === "Dual") {
            let Line = data[7]?.specs[0]?.val.toString().split("\n")
            let Cam1 = Line.length < 1 ? null : Line[0].split(",")[0]
            let Cam2 = Line.length < 2 ? null : Line[1].split(",")[0]
            Front = Cam1 + " + " + Cam2
        }

        if (key === "Single") {
            let Cam1 = data[6]?.specs[0]?.val.toString().split(",")
            Back = Cam1[0]
        }

        if (key === "Dual") {
            let Line = data[6]?.specs[0]?.val.toString().split("\n")
            let Cam1 = Line?.length < 1 ? null : Line[0]?.split(",")[0]
            let Cam2 = Line?.length < 2 ? null : Line[1]?.split(",")[0]
            Back = Cam1 + " + " + Cam2
        }

        if (key === "Triple" || key === "Quad") {
            let Line = data[6]?.specs[0].val.toString().split("\n")
            let Cam1 = Line[0]?.split(",")
            let Cam2 = Line[1]?.split(",")
            let Cam3 = Line[2]?.split(",")

            if (Cam3 === undefined) {
                Back = Cam1[0] + " + " + Cam2[0]
            } else {
                Back = Cam1[0] + " + " + Cam2[0] + " + " + Cam3[0]
            }
        }
        return Back
    }

    function GetDisplay(data: any) {
        const D1 = data && data[3]?.specs[1]?.val.toString().split(",")
        let D2: any = '';
        if (D1?.length > 1) {
            D2 = D1 && D1[1]?.split("(")
        } else {
            D2 = [''];
        }
        const D3 = data[3]?.specs[0]?.val.toString().split(",")
        if (D1?.length > 1) {
            return (D1[0] + " (" + D2[0] + " ) " + D3[0]);
        } else {
            return (D1 && D1[0] + " " + D3[0]);
        }

    }


    const BBCW_Option = [
        {
            label: (
                <div className={style.accessories}>
                    <div className={style.accessories_img}>
                        <LiaFileInvoiceSolid />
                    </div>
                    <div className={style.accessories_title}>Bill</div>
                </div>
            ),
            isTrue: SecondRateOfMobile && SecondRateOfMobile[0]?.BBCW.split(',')[0],
            value: 'Bill'
        },
        {
            label: (
                <div className={style.accessories}>
                    <div className={style.accessories_img}>
                        <LiaBoxSolid />
                    </div>
                    <div className={style.accessories_title}>Box</div>
                </div>
            ),
            isTrue: SecondRateOfMobile && SecondRateOfMobile[0]?.BBCW.split(',')[1],

            value: 'Box'
        },
        {
            label: (
                <div className={style.accessories}>
                    <div className={style.accessories_img}>
                        <MdCable />
                    </div>
                    <div className={style.accessories_title}>Charger</div>
                </div>
            ),
            isTrue: SecondRateOfMobile && SecondRateOfMobile[0]?.BBCW.split(',')[2],

            value: 'Charger'
        },
        {
            label: (
                <div className={style.accessories}>
                    <div className={style.accessories_img}>
                        <AiOutlineFileProtect />
                    </div>
                    <div className={style.accessories_title}>Warranty</div>
                </div>
            ),
            isTrue: SecondRateOfMobile && SecondRateOfMobile[0]?.BBCW.split(',')[3],

            value: 'Warranty'
        },
    ]


    const handelLogin = () => {
        setOpenDialer(true)
    }

    // console.log(SecondRateOfMobile && SecondRateOfMobile[0]?.BH != 0);

    const handelClickForDiffrentModel = (company: any, Model: any, id: any) => {
        // router.push('/')
        router.push(`/store/${company}/${Model}/${id}`)
        setOpen(false)
    }


    // console.log(router);


    return (<>
        {MD && filterMobile && mobileDetail && SecondRateOfMobile
            && <>
                <div className={style.phone_details_box}>
                    <div className={style.phone_details_left}>
                        <div className={style.phone_name}>
                            <span className={style.phone_company}>{SecondRateOfMobile[0]?.Company} </span>
                            <span className={style.phone_model}>{SecondRateOfMobile[0]?.Model}</span>
                        </div>
                        <div onClick={() => setOpen(true)} className={style.phone_color}>{SecondRateOfMobile[0]?.Color}</div>
                        <div onClick={() => setOpen(true)} className={style.phone_variant}>{SecondRateOfMobile[0]?.Variant} </div>
                        {SecondRateOfMobile[0]?.BH != null && <div className={style.phone_variant}>Battery Health : {SecondRateOfMobile[0]?.BH} %</div>}

                        <Dialog open={Open}
                            onClose={() => setOpen(false)}>
                            <div style={{ width: '60vw', padding: '20px ' }}>
                                {uniqueData?.map((e: any, index: any) => {
                                    return (
                                        <div key={index} className={style.phone_For_More_variant} onClick={() => handelClickForDiffrentModel(e?.Company, e?.Model, e?.id)}>
                                            {e?.Color} {e?.Variant}
                                        </div>
                                    )
                                })}
                            </div>
                        </Dialog>
                    </div>
                    <div className={style.phone_details_right}>
                        <div className={style.discount}>
                            {/* {offer(SecondRateOfMobile)} */}
                            {profile ? offer(SecondRateOfMobile) : ''}

                        </div>
                        <div className={style.mrp}>
                            {/* {OfferPrice(SecondRateOfMobile)} */}
                            {profile ? OfferPrice(SecondRateOfMobile) : ''}

                        </div>
                        <div className={style.price}>
                            {/* {priceHide(SecondRateOfMobile)} */}
                            {profile ? priceHide(SecondRateOfMobile) : <span onClick={handelLogin}>{'₹ X,XXX'}</span>}

                        </div>
                    </div>
                </div>


                {/* for window */}

                <div className={style.phone_details_box_For_Window}>
                    <div className={style.Phone_Navbar}>
                        <span onClick={() => router.push('/')}>
                            Home
                        </span> &nbsp;
                        <span>{`>`}</span> &nbsp;
                        <span onClick={() => router.push(`/${router.query.brand}`)}>
                            {router.query.brand}
                        </span> &nbsp;
                        <span>{`>`}</span> &nbsp;
                        <span>
                            {router.query.model}
                        </span>
                    </div>

                    <div className={style.phone_name_for_window}>
                        <span className={style.phone_company_for_window}>{SecondRateOfMobile[0]?.Company} </span>
                        <span className={style.phone_model_for_window}>{SecondRateOfMobile[0]?.Model}</span>


                    </div>
                    <div className={style.phone_name_variant_Box}>
                        <div className={style.phone_color_for_window}>{`(${SecondRateOfMobile[0]?.Color} ${SecondRateOfMobile[0]?.Variant})`}</div>

                    </div>

                    <div className={style.phone_details_right_for_window}>
                        <div className={style.price_for_window}>{priceHide(SecondRateOfMobile)}</div>
                        <div className={style.mrp_for_window}> {OfferPrice(SecondRateOfMobile)}</div>
                        <div className={style.discount_for_window}>{offer(SecondRateOfMobile)}</div>
                    </div>

                    <div className={style.phone_details_box_for_Condition}>
                        <h3>Condition :</h3>
                        <h3 className={style.Phone_Condition_good}>Good</h3>
                    </div>

                    {SecondRateOfMobile[0]?.BH != null &&
                        <div className={style.phone_details_box_for_Condition_battery}>

                            <h3 className={style.Phone_Condition_Battery}>Battery Health : {SecondRateOfMobile[0]?.BH} %</h3>
                        </div>
                    }

                    {/* {SecondRateOfMobile[0]?.BH != null && <div className={style.phone_variant}>Battery Health : {SecondRateOfMobile[0]?.BH} %</div>} */}
                    <div className={style.phone_details_callLog}>
                        <Image src={'/Group 2675.png'} width={130} height={50} alt='call' />
                        <Image src={'/Group 2676.png'} width={130} height={50} alt='call' />
                    </div>

                    <div className={style.ShopDetails}>
                        <div className={style.ShopDetail_Nav}>
                            <h2><BsShopWindow /></h2>
                            <h3>New Laxmi Telicom</h3>
                        </div>
                        <p className={style.Shop_Pehragraph}>
                            PowerJetPro Mobile-Detail is a top-notch power washing and car detailing company. Our mission is to provide exceptional cleaning services to anyone in need, no matter the size or…
                            PowerJetPro Mobile-Detail is a top-notch power washing and car detailing company. Our mission is to provide exceptional cleaning services to anyone in need, no matter the size or…
                        </p>
                    </div>



                    <div className={style.ShopDetails}>
                        <div className={style.ShopDetail_Nav}>
                            <h2><FiMapPin /></h2>
                            <h3>Address</h3>
                        </div>
                        <p className={style.Shop_Pehragraph}>
                            PowerJetPro Mobile-Detail is a top-notch power washing and car detailing company. Our mission is to provide exceptional cleaning services to anyone in need, no matter the size or…
                            PowerJetPro Mobile-Detail is a top-notch power washing and car detailing company. Our mission is to provide exceptional cleaning services to anyone in need, no matter the size or…
                        </p>
                    </div>

                </div>

                <div className={style.accessories_box}>
                    <Segmented
                        size='large'
                        block
                        options={
                            BBCW_Option?.filter((e, index) => e.isTrue === 'true')
                        }
                        value={Seg}
                        onChange={(value) => {
                            setSeg(value)
                        }}
                    />

                    <div className={style.accessories_details_box}>
                        {Seg === 'Bill' && <div className={`${style.accessories_details} ${style.accessories_detail_bill}`}>
                            <div className={style.accessories_details_set}>
                                <div className={style.accessories_details_icon}>
                                    <IoIosArrowDroprightCircle />
                                </div>
                                <div className={style.accessories_details_des}>
                                    <div className={style.accessories_details_title}>Bill</div>
                                    <div className={style.accessories_details_text}>Bill is important as it is evidence of purchase and can the resale value of the items</div>
                                </div>
                            </div>

                        </div>}
                        {Seg === 'Box' && <div className={`${style.accessories_details} ${style.accessories_detail_box}`}>
                            <div className={style.accessories_details_set}>
                                <div className={style.accessories_details_icon}>
                                    <IoIosArrowDroprightCircle />
                                </div>
                                <div className={style.accessories_details_des}>
                                    <div className={style.accessories_details_title}>Box</div>
                                    <div className={style.accessories_details_text}>Having the original box can increase the resale value of an item and also improve its overall presentation.</div>
                                </div>
                            </div>

                        </div>}
                        {Seg === 'Charger' && <div className={`${style.accessories_details} ${style.accessories_detail_charger}`}>
                            <div className={style.accessories_details_set}>
                                <div className={style.accessories_details_icon}>
                                    <IoIosArrowDroprightCircle />
                                </div>
                                <div className={style.accessories_details_des}>
                                    <div className={style.accessories_details_title}>Charger</div>
                                    <div className={style.accessories_details_text}>Having an included charger will save you time and effort, making it more convenient to use.</div>
                                </div>
                            </div>

                        </div>}
                        {Seg === 'Warranty' && <div className={`${style.accessories_details} ${style.accessories_detail_warranty}`}>
                            <div className={style.accessories_details_set}>
                                <div className={style.accessories_details_icon}>
                                    <IoIosArrowDroprightCircle />
                                </div>
                                <div className={style.accessories_details_des}>
                                    <div className={style.accessories_details_title}>fresh</div>
                                    <div className={style.accessories_details_text}>Come with a standard brand warranty.</div>
                                </div>
                            </div>
                            <div className={style.accessories_details_set}>
                                <div className={style.accessories_details_icon}>
                                    <IoIosArrowDroprightCircle />
                                </div>
                                <div className={style.accessories_details_des}>
                                    <div className={style.accessories_details_title}>Never Open</div>
                                    <div className={style.accessories_details_text}>Since it is under warranty, this phone is not open for repair.</div>
                                </div>
                            </div>
                        </div>}
                    </div>

                </div>

                <div className={style.repaired_box}>
                    <div className={style.repaired_title}>
                        <span>Un-Repaired</span>
                        <span className={style.repaired_img}>
                            <Image layout='responsive' width={100} height={100} src={'/images/icons/repaire.jpeg'} alt="" />
                        </span>
                    </div>
                    <div className={`${style.accessories_details} ${style.accessories_detail_bill}`}>
                        <div className={style.accessories_details_set}>
                            <div className={style.accessories_details_icon}>
                                <IoIosArrowDroprightCircle />
                            </div>
                            <div className={style.accessories_details_des}>
                                <div className={style.accessories_details_title}>fresh</div>
                                <div className={style.accessories_details_text}>The phone remains untouched by repair services.</div>
                            </div>
                        </div>
                        <div className={style.accessories_details_set}>
                            <div className={style.accessories_details_icon}>
                                <IoIosArrowDroprightCircle />
                            </div>
                            <div className={style.accessories_details_des}>
                                <div className={style.accessories_details_title}>Never Open</div>
                                <div className={style.accessories_details_text}>All parts of this phone are original.</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.condition_box}>
                    <div className={style.condition_title}>
                        <div>Condition</div>
                        <div className={style.condition_set}>
                            <div className={style.condition_name}>{`${SecondRateOfMobile[0]?.Condition}`}</div>
                            <div className={style.condition_img}>
                                <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" />
                            </div>
                        </div>
                    </div>


                    {condition?.filter(i => i.title.toLowerCase() === SecondRateOfMobile[0]?.Condition?.toLowerCase()).map((i, index) => (
                        <div key={index} className={style.condition_details}>
                            <div className={style.condition_details_set}>
                                <div className={style.condition_details_icon}>
                                    <IoIosArrowDroprightCircle />
                                </div>
                                <div className={style.condition_details_des}>
                                    <div className={style.condition_details_text}>
                                        {i.t1}
                                    </div>
                                </div>
                            </div>
                            <div className={style.condition_details_set}>
                                <div className={style.condition_details_icon}>
                                    <IoIosArrowDroprightCircle />
                                </div>
                                <div className={style.condition_details_des}>
                                    <div className={style.condition_details_text}>
                                        {i.t2}
                                    </div>
                                </div>
                            </div>
                            <div className={style.condition_details_set}>
                                <div className={style.condition_details_icon}>
                                    <IoIosArrowDroprightCircle />
                                </div>
                                <div className={style.condition_details_des}>
                                    <div className={style.condition_details_text}>
                                        {i.t3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>


                <div className={style.highlights_box}>
                    <div className={style.highlights_box_title}>Highlights</div>
                    <div className={style.highlight}>
                        <div className={style.highlight_des_box}>
                            <div className={style.highlight_des_img}>
                                <CiHardDrive />
                                {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                            </div>
                            <div className={style.highlight_des}>
                                <div className={style.highlight_title}>Rom | Ram</div>
                                <div className={style.highlight_text}>{SecondRateOfMobile[0]?.Variant && SecondRateOfMobile[0]?.Variant}</div>
                            </div>
                        </div>
                        <div className={style.highlight_des_box}>
                            <div className={style.highlight_des_img}>
                                <PiCpuThin />
                                {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                            </div>
                            <div className={style.highlight_des}>
                                <div className={style.highlight_title}>Processor</div>
                                <div className={style.highlight_text}>{mobileDetail[4]?.specs[1]?.val[0] && mobileDetail[4]?.specs[1]?.val[0]}</div>
                            </div>
                        </div>

                        <div className={style.highlight_des_box}>
                            <div className={style.highlight_des_img}>
                                <PiCameraRotateThin />
                                {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                            </div>
                            <div className={style.highlight_des}>
                                <div className={style.highlight_title}>Real Camera</div>
                                <div className={style.highlight_text}>{mobileDetail ? GetCam(mobileDetail) : ''}</div>
                            </div>
                        </div>


                        <div className={style.highlight_des_box}>
                            <div className={style.highlight_des_img}>
                                <PiDeviceMobileCameraThin />
                                {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                            </div>
                            <div className={style.highlight_des}>
                                <div className={style.highlight_title}>Display</div>
                                <div className={style.highlight_text}>{mobileDetail ? GetDisplay(mobileDetail) : ''}</div>
                            </div>
                        </div>

                        <div className={style.highlight_des_box}>
                            <div className={style.highlight_des_img}>
                                <PiBatteryChargingVerticalThin />
                                {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                            </div>
                            <div className={style.highlight_des}>
                                <div className={style.highlight_title}>Battery</div>
                                <div className={style.highlight_text}>{mobileDetail[11]?.specs[0]?.val[0] && mobileDetail[11]?.specs[0]?.val[0]}</div>
                            </div>
                        </div>


                        <div className={style.highlight_des_box}>
                            <div className={style.highlight_des_img}>
                                <PiCameraThin />
                                {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                            </div>
                            <div className={style.highlight_des}>
                                <div className={style.highlight_title}>Front Camera</div>
                                <div className={style.highlight_text}>
                                    {mobileDetail[7]?.specs[0].val[0].split(',')[0] && mobileDetail[7]?.specs[0].val[0].split(',')[0]}
                                </div>
                            </div>
                        </div>

                        <div className={style.highlight_des_box}>
                            <div className={style.highlight_des_img}>
                                <PiScalesThin />
                                {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                            </div>
                            <div className={style.highlight_des}>
                                <div className={style.highlight_title}>Weight</div>
                                <div className={style.highlight_text}>
                                    {mobileDetail[2]?.specs[1].val[0].split(',')[0] && mobileDetail[2]?.specs[1].val[0].split(',')[0]}
                                </div>
                            </div>
                        </div>

                        <div className={style.highlight_des_box}>
                            <div className={style.highlight_des_img}>
                                <PiArrowsInLineVerticalThin />
                                {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                            </div>
                            <div className={style.highlight_des}>
                                <div className={style.highlight_title}>Thickness</div>
                                <div className={style.highlight_text}>{MD && MD?.mobdata?.data?.dimension?.split(',')[1]}</div>
                            </div>
                        </div>

                    </div>
                    <div className={style.highlight_more_details} onClick={() => setMore(!More)}>
                        {More ?
                            <>
                                <span>See Less</span>
                                <span className={style.see_more_icon}><MdOutlineKeyboardArrowUp /></span>
                            </>
                            :
                            <>
                                <span>See More</span>
                                <span className={style.see_more_icon}><MdOutlineKeyboardArrowDown /></span>
                            </>}
                    </div>

                    {More && <div className={style.more_detail_list_box} onClick={() => setMore(false)}>
                        <div className={style.more_detail_list}>
                            {mobileDetail && mobileDetail?.map((Pdata: { title: any; specs: any[]; }, i: any) => (
                                <div className={style.more_detail_list} key={i}>
                                    <div className={style.more_detail_list_title}>{Pdata.title}</div>
                                    <ul className={style.specs}>
                                        {Pdata?.specs?.map((spec: { key: any; val: any[]; }, j: any) => (
                                            <li className={style.more_detail_list_title_des} key={j}>
                                                <div className={style.more_detail_list_title_des_title}>{spec?.key}{' :'}</div>
                                                <div className={style.more_detail_list_title_des_text}>{spec?.val[0]}</div>
                                            </li>
                                        ))}
                                    </ul>


                                </div>
                            ))}
                        </div>


                    </div>
                    }

                </div>



            </>
        }
        <HomeBestSeller />
        <HomeNearbyStore />
    </>);
}

export default StorePhoneDetails;