import React, { useEffect, useState } from 'react'
import style from '@/styles/Model.module.css'
import Image from 'next/legacy/image';
import { LiaFileInvoiceSolid, LiaBoxSolid } from "react-icons/lia";
import { MdCable } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { useRouter } from 'next/router';
import { useGetAllMobilesQuery } from '@/Redux/productsReducer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ModelPhones = ({ Search }: any) => {
    const router = useRouter()
    const { data, isSuccess } = useGetAllMobilesQuery('')

    const [ListOfMobil, setListOfMobil] = useState<any>()
    const [SecondRateOfMobile, setSecondRateOfMobile] = useState<any>()
    const [ids, setids] = useState<any[] | any[]>([]);
    const [likeBtn, setlikeBtn] = useState(-1)


    // console.log(data && data[0]?.Company === router.query.model);


    useEffect(() => {
        if (router.query.model && router.query.itam) {

            if (Search === '') {
                // console.log('fi');
                let filterByCompany = data && data?.filter((e: any) => e?.Company.toLowerCase() === router.query?.model)
                // console.log(filterByCompany, data);
                let filterbyModel = filterByCompany && filterByCompany?.filter((e: any) => e?.Model?.replace(/\s/g, '').toLowerCase().includes(router.query.itam))
                // console.log(filterbyModel);
                setListOfMobil(filterbyModel)
            }
            else {
                // console.log('rlse');
                let filterByCompany = data && data?.filter((e: any) => e.Company?.toLowerCase() === router.query.model)
                let filterbyModel = filterByCompany && filterByCompany?.filter((e: any) => e?.Model?.toLowerCase().includes(router.query.itam))
                const query = Search
                const queryWord = query?.split(" ")
                let brand = queryWord[0];
                let phone = queryWord.slice(1).join(" ")

                let FilterDataOfPhone = filterbyModel?.filter((item: any) => {
                    return (item.Company?.toLowerCase().includes(brand?.toLowerCase()) &&
                        item.Model?.toLowerCase().trim().includes(phone?.trim().toLowerCase())) ||
                        item.Model?.toLowerCase().trim().includes(brand?.trim().toLowerCase()) &&
                        item.Company?.toLowerCase().includes(phone?.toLowerCase()) ||
                        item.Company?.trim().toLowerCase().includes(query?.split(" ").join("").toLowerCase()) ||
                        item.Model?.toLowerCase().split(" ").join("").includes(query?.split(" ").join("").toLowerCase()) ||
                        (item.Company + item.Model).toLowerCase().split(" ").join("").includes(query?.split(" ").join("").toLowerCase()) ||
                        item.SalePrice.toString().includes(query?.split(" ").join("").toLowerCase()) ||
                        item.SalePrice.toString() === query?.split(" ").join("").toLowerCase() ||
                        item.id.toString().includes(query.toString())
                })
                setListOfMobil(FilterDataOfPhone)
            }
            // console.log(filterByCompany);
        }
    }, [isSuccess, router.query.model, Search])

    const handelMobileDetail = (company: any, Model: any, id: any) => {
        router.push(`/store/${company}/${Model}/${id}`)
    }

    useEffect(() => {
        // if (ListOfMobil?.length !== 0) {
        handleIncreasePrice()
        // }
    }, [ListOfMobil, Search])

    const handleIncreasePrice = () => {
        // Use map to create a new array with conditionally updated prices
        const updatedData = ListOfMobil && ListOfMobil?.map((item: any) => {
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

    // console.log(SecondRateOfMobile);

    const OfferPrice = (e: any) => {

        if (e.PriceHide.split(',')[0] === 'false') {
            return <div>₹ {e.MainPrice}</div>
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
            return <span>{e?.SalePrice - off?.split(',')[1]}</span>
        }
        if (e?.PriceHide.split(',')[0] === 'false') {
            return <span>{e?.SalePrice}</span>
        }
        if (e?.PriceHide === '') {
            return <span>{e?.SalePrice}</span>
        }

        else if (e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {
            return <span>{e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '2' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0' || e?.PriceHide.split(',')[1] === 'undefined') {
            return <span>{e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {
            return <span>{e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            return <span>XX,XXX</span>
        }
        else if (e?.PriceHide.split(',')[0] === '2' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            return <span>{e?.SalePrice.toString()[0]}X,XXX</span>
        }
        else if (e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            let v = e?.SalePrice.toString()
            let value = v.slice(1)
            return <span>X,{value}</span>
        }
    }


    useEffect(() => {
        const arr: any = localStorage.getItem('mobids') || '[]';
        if (arr?.length !== 0) {
            setids(JSON.parse(arr))
        }
    }, [])

    useEffect(() => {
        if (ids?.length !== 0) {
            localStorage.setItem('mobids', JSON.stringify(ids))
        }
    }, [ids])

    function handleLikeBtn(id: any) {
        if (id !== '') {
            setlikeBtn(id)
            const arr: any = localStorage.getItem('mobids') || '[]';
            if (!arr.includes(id)) {
                setids((prev) => [...prev, id])
            }

        }
    }

    function handleRemoveFromWishList(id: number) {
        const tempArr = [...ids]
        tempArr.splice(tempArr.indexOf(id), 1)
        setids(tempArr)
    }



    return (
        <div className={style.phones_box}>
            {SecondRateOfMobile?.length !== 0 ? (SecondRateOfMobile?.map((i: any, index: React.Key | null | undefined) => (
                <>
                    {
                        i.SalePrice !== 0 && i.SalePrice !== '' &&
                        <div key={index} className={style.model_card} onClick={() => handelMobileDetail(i?.Company, i?.Model, i?.id)}>
                            <div className={style.Model_phone_Image_and_LikeButton}>
                                <div className={style.model_phone_img}>
                                    <Image layout='responsive' width={70} height={100} src={i?.DummyImg} alt="Phone Image" />
                                </div>
                                {ids?.includes(i?.id) ?
                                    <div className={style.likeBtn} >
                                        <FavoriteIcon className={style.DislikeBtn} onClick={() => handleRemoveFromWishList(i?.id)} />
                                    </div>
                                    :
                                    <div className={style.NotlikeBtn} onClick={() => handleLikeBtn(i?.id)}><FavoriteBorderIcon />
                                    </div>
                                }
                            </div>
                            <div className={style.model_phone_des}>
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
                                <div className={style.model_phone_price_box}>
                                    <span className={style.model_phone_dicount}>
                                        {offer(i)}
                                    </span>
                                    <span className={style.model_phone_mrp}>
                                        {OfferPrice(i)}
                                    </span>
                                    <span className={style.model_phone_price}>
                                        ₹  {priceHide(i)}
                                    </span>


                                </div>
                            </div>
                        </div>
                    }
                </>
            ))) : <p>Out of stock</p>}
        </div>
    )
}

export default ModelPhones