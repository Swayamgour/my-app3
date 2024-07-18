import React, { useEffect, useState } from 'react'
import style from '@/styles/Model.module.css'
import Image from 'next/legacy/image';
import { LiaFileInvoiceSolid, LiaBoxSolid } from "react-icons/lia";
import { MdCable } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { useRouter } from 'next/router';
import { useGetAllMobilesQuery } from '@/Redux/productsReducer';
import StoreNav from './store/[brand]/[model]/[id]/StoreNav';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Navbar from './Navbar';



const ModelPhones = () => {
    const router = useRouter()
    const { data, isSuccess } = useGetAllMobilesQuery('')
    const [likeclick, setlikeClick] = useState(false)

    const [ListOfMobil, setListOfMobil] = useState<any>()
    const [SecondRateOfMobile, setSecondRateOfMobile] = useState<any>()
    const [filteredMobiles, setfilteredMobiles] = useState([])
    const [profile, setProfile] = useState()

    useEffect(() => {
        const token: any = localStorage.getItem('token')
        if (token) {
            setProfile(token)
        }
    }, [])

    useEffect(() => {
        if (isSuccess) {
            setListOfMobil(data)
        }
    }, [isSuccess])



    useEffect(() => {

        if (isSuccess) {

            const storedData = localStorage.getItem('mobids');

            const arr = storedData !== null ? JSON.parse(storedData.trim()) : null;
            // const arr = localStorage.getItem('mobids')!==null&&JSON.parse(localStorage.getItem('mobids'))
            // // // (arr)
            const mobilearr: any = [];
            for (let i = 0; i < arr?.length; i++) {
                for (let j = 0; j < data?.length; j++) {
                    if (arr[i] == data[j].id) {
                        // // // (Shops?.used_phones[j])
                        mobilearr.push(data[j])
                    }
                }
            }
            mobilearr.length === 0 ? setfilteredMobiles([]) : setfilteredMobiles(mobilearr)

        }
    }, [data, isSuccess, likeclick])

    // console.log(filteredMobiles);


    const handelMobileDetail = (company: any, Model: any, id: any) => {
        router.push(`/store/${company}/${Model}/${id}`)
    }

    useEffect(() => {
        if (filteredMobiles?.length !== 0) {

            handleIncreasePrice()
        }

    }, [filteredMobiles])

    const handleIncreasePrice = () => {
        // Use map to create a new array with conditionally updated prices
        const updatedData = filteredMobiles && filteredMobiles?.map((item: any) => {
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

        if (e?.PriceHide.split(',')[0] === 'false') {
            return <div>₹ {e?.MainPrice}</div>
        }

        else if (e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {
            return <div>₹ {e?.MainPrice}</div>
        }
        else if (e?.PriceHide.split(',')[0] === '2' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0' || e?.PriceHide.split(',')[1] === '2') {
            return <div>₹ {e?.MainPrice}</div>
        }
        else if (e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {
            return <div>₹ {e?.MainPrice}</div>
        }
        else if (e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            return <div>₹ XX,XXX</div>
        }
        else if (e?.PriceHide.split(',')[0] === '2' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            return <div>₹ {e?.MainPrice.toString()[0]}X,XXX</div>
        }
        else if (e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            let v = e?.MainPrice.toString()
            let value = v.slice(1)
            return <div>X,{value}</div>
        } else {
            return <div>₹ {e?.MainPrice}</div>

        }
    }

    const offer = (e: any) => {
        const off = (e?.Offer);
        // //(off , e?.PriceHide);

        if (off === null) {
            const value = Math.round(((parseInt(e?.MainPrice) - (e?.SalePrice)) / (e?.MainPrice)) * 100)
            return <div>{value}% Off</div>
        } else if (off !== null) {
            if (off?.split(',')[0] === 'true' && off?.split(',')[1] !== '' && parseInt(off?.split(',')[1]) === 0 && e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {
                const value = Math.round(((parseInt(e?.MainPrice) - (e?.SalePrice)) / (e?.MainPrice)) * 100)
                return <div>{value}% Off</div>;
            }
            else if (e?.PriceHide.split(',')[0] === '1' || e?.PriceHide.split(',')[0] === '2' || e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1' && off?.split(',')[0] === 'false' && off?.split(',')[1] !== '' && parseInt(off?.split(',')[1]) < 0) {

                const value = Math.round(((parseInt(e?.MainPrice) - (e?.SalePrice)) / (e?.MainPrice)) * 100)
                return <div>{value}% Off</div>

            }
            else if (off?.split(',')[0] === 'false' && off?.split(',')[1] !== '' && parseInt(off?.split(',')[1]) > 0) {
                const value = parseInt(off?.split(',')[1]);
                return <div>{value}% Off</div>;
            } else if ((off?.split(',')[0] === 'true' || off?.split(',')[0] === 'false') && (off?.split(',')[1] === '' || parseInt(off?.split(',')[1]) <= 0)) {
                const value = Math.round(((parseInt(e?.MainPrice) - (e?.SalePrice)) / (e?.MainPrice)) * 100)
                return <div>{value}% Off</div>
            }
            else {
                const value = Math.round(((parseInt(e?.MainPrice) - (e?.SalePrice)) / (e?.MainPrice)) * 100)
                return <div>{value}% Off</div>
            }
        }
    }

    const priceHide = (e: any) => {
        const off = (e.Offer);


        if (off?.split(',')[0] === 'true' && off?.split(',')[1] > 0) {

            return <span>₹ {e?.SalePrice - off?.split(',')[1]}</span>
        }
        if (e?.PriceHide.split(',')[0] === 'false') {

            return <span>₹ {e?.SalePrice}</span>
        }
        if (e?.PriceHide === '') {

            return <span>₹ {e?.SalePrice}</span>
        }

        else if (e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {

            // return <span>₹ {e?.SalePrice}</span>
            return <span>₹ {e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '2' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0' || e?.PriceHide.split(',')[1] === 'undefined') {
            //
            return <span>₹ {e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {
            //
            return <span>₹ {e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            //
            return <span>₹ XX,XXX</span>
        }
        else if (e?.PriceHide.split(',')[0] === '2' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            //
            return <span>₹ {e?.SalePrice.toString()[0]}X,XXX</span>
        }
        else if (e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            //
            let v = e?.SalePrice.toString()
            let value = v.slice(1)
            return <span>₹ X,{value}</span>
        }
    }

    function handleRemoveFromWishList(id: number) {

        const storedData = localStorage.getItem('mobids');

        const arr = storedData !== null ? JSON.parse(storedData) : null;

        const newarr: any = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== id) {
                newarr.push(arr[i])
            }
        }

        localStorage.setItem('mobids', JSON.stringify(newarr))
        setlikeClick(!likeclick)

    }


    // console.log(SecondRateOfMobile);
    return (
        <>

            {/* <StoreNav /> */}
            <Navbar />
            <div className={style.WishlistHomePAtti}>
                <span onClick={() => router.push('/')}> Home </span> {`>`} <span> Wishlist</span>
            </div>
            <div className={style.phones_box}>
                {SecondRateOfMobile?.length !== 0 ?
                    (SecondRateOfMobile?.map((i: any, index: React.Key | null | undefined) => (
                        <>
                            {
                                i.SalePrice !== 0 && i.SalePrice !== '' &&
                                <div key={index} className={style.model_card} onClick={() => handelMobileDetail(i?.Company, i?.Model, i?.id)}>
                                    <div className={style.Model_phone_Image_and_LikeButton}>
                                        <div className={style.model_phone_img}>
                                            <Image layout='responsive' width={70} height={100} src={i?.DummyImg} alt="Phone Image" />
                                        </div>
                                        <div className={style.NotlikeBtn} onClick={() => handleRemoveFromWishList(i?.id)}><FavoriteIcon /></div>
                                    </div>
                                    {/* <div className={style.model_phone_des}> */}
                                    <div className={style.model_phone_name}>{i?.Company} {i?.Model}</div>
                                    <div className={style.model_phone_variant}>{`${i?.Color}, ${i?.Variant}`}</div>
                                    <div className={style.model_phone_access_box}>
                                        {i?.BBCW.split(',')[0] === 'true' && <span className={style.model_phone_access}>
                                            <LiaFileInvoiceSolid />
                                        </span>}
                                        {i?.BBCW.split(',')[1] === 'true' && <span className={style.model_phone_access}>
                                            <LiaBoxSolid />
                                        </span>}
                                        {i?.BBCW.split(',')[2] === 'true' && <span className={style.model_phone_access}>
                                            <MdCable />
                                        </span>}
                                        {i?.BBCW.split(',')[3] === 'true' && <span className={style.model_phone_access}>
                                            <AiOutlineFileProtect />
                                        </span>}
                                    </div>
                                    <div  className={style.model_phone_price_box}>
                                        {/* <span className={style.model_phone_price}>

                                                        {profile ? '' :  <span >{'₹  X,XXX'}</span>}


                                                    </span> */}
                                        <span className={style.model_phone_dicount}>
                                            {profile ? offer(i) : ''}
                                        </span>
                                        <span className={style.model_phone_mrp}>
                                            {/* {OfferPrice(i)} */}
                                            {profile ? OfferPrice(i) : ''}

                                        </span>
                                        <span className={style.model_phone_price}>

                                            {profile ? priceHide(i) : '₹  X,XXX'}


                                        </span>


                                    </div>
                                    {/* </div> */}
                                </div>
                            }
                        </>
                    )))
                    : ''
                }
            </div>
        </>

    )
}

export default ModelPhones
