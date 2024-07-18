
import React, { useEffect, useState } from 'react';
import style from '@/styles/Model.module.css';
import s from '@/styles/Usersity.module.css';

import Image from 'next/image';
import { useUserSiteQuery } from '@/Redux/productsReducer';
import { useRouter } from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Location from '@/Component/Location';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { LiaBoxSolid, LiaFileInvoiceSolid } from 'react-icons/lia';
import { MdCable } from 'react-icons/md';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { IoFilterOutline } from "react-icons/io5";
import ScrollToTopButton from '@/Component/ScrollToTopButton';




const PhonesDetail = () => {


    const router = useRouter()
    const [Skip, setSkip] = useState(true)

    useEffect(() => {
        if (router.query.ShopName !== undefined) { setSkip(false) } else { setSkip(true) };
    }, [router.query?.ShopName])

    const { data, isSuccess } = useUserSiteQuery(router.query?.ShopName, { skip: Skip });



    const [likeBtn, setlikeBtn] = useState(-1)
    const [filterZeroValue, setFilterZeroValue] = useState<any>()
    const [ids, setids] = useState<any[] | any[]>([]);
    const [profile, setProfile] = useState(false)
    const [FilterValue, setFilterValue] = useState<any>()
    const [TostifyText, setTostifyText] = useState<any>('')
    const [Filter, setFilter] = useState<any>('')
    const [filteredMobiles, setfilteredMobiles] = useState<any>([])
    const [SecondRateOfMobile, setSecondRateOfMobile] = useState<any>([])
    const [is5G, setIs5G] = useState<any>([]);
    const [isWarranty, setIsWarranty] = useState<any>([]);
    const [bestTag, setbestTag] = useState<any>([]);
    const [under10, setUnder10] = useState<any>([]);
    const [under20, setUnder20] = useState<any>([]);
    const [under30, setUnder30] = useState<any>([]);
    const [under40, setUnder40] = useState<any>([]);
    const [under50, setUnder50] = useState<any>([]);
    const [under60, setUnder60] = useState<any>([]);
    const [under70, setUnder70] = useState<any>([]);
    const [under80, setUnder80] = useState<any>([]);
    const [under90, setUnder90] = useState<any>([]);
    const [under100, setUnder100] = useState<any>([]);
    const [under110, setUnder110] = useState<any>([]);
    const [under120, setUnder120] = useState<any>([]);



    const optionBrand = [
        {
            brand: 'apple',
            img: '/brand/apple.png'
        },
        {
            brand: 'asus',
            img: '/brand/asuss.png'
        },
        {
            brand: 'blackbarry',
            img: '/brand/blackbarry.png'
        },
        {
            brand: 'gionee',
            img: '/brand/gionee.png'
        },
        {
            brand: 'honor',
            img: '/brand/honor.png'
        },
        {
            brand: 'infinix',
            img: '/brand/infinix.png'
        },
        {
            brand: 'itel',
            img: '/brand/itel.png'
        },
        {
            brand: 'lava',
            img: '/brand/lava.png'
        },
        {
            brand: 'lenovo',
            img: '/brand/lenovo.png'
        },
        {
            brand: 'xiaomi',
            img: '/brand/mi.png'
        },
        {
            brand: 'micromax',
            img: '/brand/micromax.png'
        },
        {
            brand: 'motorola',
            img: '/brand/motorolaa.png'
        },
        {
            brand: 'nokia',
            img: '/brand/nokiaa.png'
        },
        {
            brand: 'nothing',
            img: '/brand/nothing.png'
        },
        {
            brand: 'oneplus',
            img: '/brand/oneplus.png'
        },
        {
            brand: 'oppo',
            img: '/brand/oppo.png'
        },
        {
            brand: 'realme',
            img: '/brand/realme.png'
        },
        {
            brand: 'samsung',
            img: '/brand/samsung.png'
        },
        {
            brand: 'tecno',
            img: '/brand/tecno.png'
        },
        {
            brand: 'vivo',
            img: '/brand/vivo.png'
        },
        {
            brand: 'coolpad',
            img: '/brand/coolpad.png'
        },
        {
            brand: 'htc',
            img: '/brand/htc.png'
        },
        {
            brand: 'huawei',
            img: '/brand/huawei.png'
        },
        {
            brand: 'intex',
            img: '/brand/intex.png'
        },
        {
            brand: 'karbon',
            img: '/brand/karbon.png'
        },
        {
            brand: 'lava',
            img: '/brand/lava.png'
        },
        {
            brand: 'letv',
            img: '/brand/letv.png'
        },
        {
            brand: 'lg',
            img: '/brand/lg.png'
        },
        {
            brand: 'panasonic',
            img: '/brand/panasonic.png'
        },
        {
            brand: 'sony',
            img: '/brand/sony.png'
        },
        {
            brand: 'poco',
            img: '/brand/poco.png'
        },
        {
            brand: 'iqoo',
            img: '/brand/iqoo.png'
        },
        {
            brand: 'lyf',
            img: '/brand/lyf.png'
        },
        {
            brand: 'google',
            img: '/brand/google.png'
        },
        {
            brand: 'jio',
            img: '/brand/jio.png'
        },

    ];



    useEffect(() => {
        if (isSuccess) {
            // setIs5G(data && data?.used_phones?.filter((item: any) => (item.Model?.toLowerCase().split(' ').includes('5g'))))
            setIs5G(
                data &&
                data?.used_phones?.filter((item: any) => (
                    (item.Model?.toLowerCase().split(' ').includes('5g')) ||
                    (item.Notes?.toLowerCase().includes('5g'))
                    // Add additional conditions as needed
                ))
            );
            setIsWarranty(data?.used_phones?.filter((e: any) => (e.BBCW.split(',')[3] === 'true')))
            setbestTag(data?.used_phones?.filter((e: { Offer: any; id: any; }) => e.Offer !== "null" && e?.Offer !== null && e?.Offer !== 0 ? e.id : ''));
            setUnder10(data?.used_phones?.filter((e: any) => e?.SalePrice <= 10000));
            setUnder20(data?.used_phones?.filter((e: any) => e?.SalePrice > 10000 && e?.SalePrice <= 20000));
            setUnder30(data?.used_phones?.filter((e: any) => e?.SalePrice > 20000 && e?.SalePrice <= 30000));
            setUnder40(data?.used_phones?.filter((e: any) => e?.SalePrice > 30000 && e?.SalePrice <= 40000));
            setUnder50(data?.used_phones?.filter((e: any) => e?.SalePrice > 40000 && e?.SalePrice <= 50000));
            setUnder60(data?.used_phones?.filter((e: any) => e?.SalePrice > 50000 && e?.SalePrice <= 60000));
            setUnder70(data?.used_phones?.filter((e: any) => e?.SalePrice > 60000 && e?.SalePrice <= 70000));
            setUnder80(data?.used_phones?.filter((e: any) => e?.SalePrice > 70000 && e?.SalePrice <= 80000));
            setUnder90(data?.used_phones?.filter((e: any) => e?.SalePrice > 80000 && e?.SalePrice <= 90000));
            setUnder100(data?.used_phones?.filter((e: any) => e?.SalePrice > 90000 && e?.SalePrice <= 100000));
            setUnder110(data?.used_phones?.filter((e: any) => e?.SalePrice > 100000 && e?.SalePrice <= 110000));
            setUnder120(data?.used_phones?.filter((e: any) => e?.SalePrice > 110000 && e?.SalePrice <= 120000));
        }
    }, [isSuccess, data?.used_phones, filteredMobiles])
    


    const handelMobileDetail = (company: any, Model: any, id: any) => {
        router.push(`/store/${company}/${Model}/${id}`)
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



    const [state, setState] = useState({
        bottom: false,
    });

    const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setProfile(true)
        }
    }, [isSuccess])


    const list = (anchor: any) => {
        return (
            <Box
                sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
                role="presentation"

                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >


                <List>
                    <div className={s.filterformoreitemx}>
                        {isSuccess && is5G?.length !== 0 && <p onClick={() => { handelCliskForFilter('5G'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("5G")) }}>5G</p>}
                        {isSuccess && bestTag?.length !== 0 && <p onClick={() => { handelCliskForFilter('BestPrice'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("BestPrice")) }}>Best Price</p>}
                        {isSuccess && isWarranty?.length !== 0 && <p onClick={() => { handelCliskForFilter('true'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("true")) }}>Warrenty</p>}
                        <hr />
                        <p onClick={() => { handelCliskForFilter('LTH'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("LTH")) }}>Low to High</p>
                        <p onClick={() => { handelCliskForFilter('HTL'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("HTL")) }}>High to Low</p>
                        <hr />
                        {isSuccess && under10?.length !== 0 && <p onClick={() => { handelCliskForFilter('10k'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("10000")) }}>Under 10,000</p>}
                        {isSuccess && under20?.length !== 0 && <p onClick={() => { handelCliskForFilter('20k'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("20000")) }}>Under 10,000 to 20,000</p>}
                        {isSuccess && under30?.length !== 0 && <p onClick={() => { handelCliskForFilter('30k'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("30000")) }}>Under 20,000 to 30,000</p>}
                        {isSuccess && under40?.length !== 0 && <p onClick={() => { handelCliskForFilter('40k'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("40000")) }}>Under 30,000 to 40,000</p>}
                        {isSuccess && under50?.length !== 0 && <p onClick={() => { handelCliskForFilter('50k'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("50000")) }}>Under 40,000 to 50,000</p>}
                        {isSuccess && under60?.length !== 0 && <p onClick={() => { handelCliskForFilter('60k'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("60000")) }}>Under 50,000 to 60,000</p>}
                        {isSuccess && under70?.length !== 0 && <p onClick={() => { handelCliskForFilter('70k'); localStorage.setItem('User_Sity_Catgory', JSON.stringify("70000")) }}>Under 60,000 to 70,000</p>}

                    </div>
                </List>
            </Box>
        )
    };


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
            return <span>₹ {e?.SalePrice - off?.split(',')[1]}</span>
        }
        if (e?.PriceHide.split(',')[0] === 'false') {
            return <span>₹ {e?.SalePrice}</span>
        }
        if (e?.PriceHide === '') {
            return <span>₹ {e?.SalePrice}</span>
        }

        else if (e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {
            return <span>₹ {e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '2' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0' || e?.PriceHide.split(',')[1] === 'undefined') {
            return <span>₹ {e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'false' || e?.PriceHide.split(',')[1] === '0') {
            return <span>₹ {e?.SalePrice}</span>
        }
        else if (e?.PriceHide.split(',')[0] === '1' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            return <span>₹ XX,XXX</span>
        }
        else if (e?.PriceHide.split(',')[0] === '2' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            return <span>₹ {e?.SalePrice.toString()[0]}X,XXX</span>
        }
        else if (e?.PriceHide.split(',')[0] === '3' && e?.PriceHide.split(',')[1] === 'true' || e?.PriceHide.split(',')[1] === '1') {
            let v = e?.SalePrice.toString()
            let value = v.slice(1)
            return <span>₹ X,{value}</span>
        }
    }


    const mobileThumb = (e: any, company: any) => {
        const url = e;
        if (e === '') {
            const fil: any = optionBrand.filter((e) => (e?.brand.toLowerCase() === company?.toLowerCase()));
            return fil[0]?.img;
        } else {

            if (url.startsWith("https://")) {


                if (url !== 'https://fdn2.gsmarena.com/vv/bigpic/vivo-y100A.jpg') {
                    return `${e}`
                }
                else {
                    const fil: any = optionBrand.filter((e) => (e?.brand.toLowerCase() === company?.toLowerCase()));
                    return fil[0]?.img;
                }
            } else {
                // //(`https://data.phoneo.in/public/${e}`);
                if (url != '2024/Image/E318/UsedPhone/UP-13422/Thumb/1720620350-undefined') {

                    return `https://data.phoneo.in/public/${e}`
                } else {
                    const fil: any = optionBrand.filter((e) => (e?.brand.toLowerCase() === company?.toLowerCase()));
                    return fil[0]?.img;
                }
            }
        }
    }

    useEffect(() => {

        if (isSuccess) {
            let list = data?.used_phones?.filter((e: any) => e?.SalePrice !== 0)
            setfilteredMobiles(list)
            //('else');

        }
    }, [data, isSuccess, FilterValue])


    const handelChangeforfilter = (e: any) => {
        setFilter(e.target.value)
        const query = e.target.value;
        localStorage.removeItem('User_Sity_Catgory')
        setTostifyText('')
        setFilterValue('')


        const queryWord = query?.split(" ")
        let brand = queryWord[0];
        let phone = queryWord.slice(1).join(" ")

        const list = data?.used_phones?.filter((e: any) => e?.SalePrice !== 0)
        let FilterDataOfPhone = list?.filter((item: any) => {
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
        setfilteredMobiles(FilterDataOfPhone)
        setTostifyText(`Search by : -  ${query}`)
    }


    const handelClickForRemoveFilter = () => {
        localStorage.removeItem('User_Sity_Catgory')
        const list = data?.used_phones?.filter((e: any) => e?.SalePrice !== 0)
        setfilteredMobiles(list)
        setFilterValue('')
        setTostifyText('')
        setFilter('')

    }



    useEffect(() => {
        const storedByName: any = localStorage.getItem('User_Sity_Catgory');
        const x = JSON.parse(storedByName)

        if (storedByName !== null) {
            setFilterValue(x)
        }
        else {
            setFilterValue('')
        }
    }, [isSuccess, FilterValue])



    const handelCliskForFilter = (value: any) => {
        setFilterValue(value)
        setFilter('')

    }


    useEffect(() => {
        if (isSuccess && filteredMobiles) {
            //('if');
            if (FilterValue) {
                //('if else');
                if (FilterValue === "LTH") {
                    let arr: any = [...data?.used_phones]
                    // //(arr);
                    setfilteredMobiles(arr.sort((a: any, b: any) => a.SalePrice - b.SalePrice))
                    setTostifyText("Filter by :  Low  to High Prices")
                }
                else if (FilterValue === "HTL") {
                    let arr: any = [...data?.used_phones]
                    setfilteredMobiles(arr.sort((a: any, b: any) => b.SalePrice - a.SalePrice))
                    setTostifyText("Filter by :  High   to Low Prices")
                }
                else if (FilterValue == "10000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 10000)))
                    setTostifyText("Filter by :  Between ₹10000")
                }

                else if (FilterValue === "20000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 20000 && mobile.SalePrice >= 10000)))
                    setTostifyText("Filter by :  Between ₹10,000 to  ₹20,000 ")
                }

                else if (FilterValue === "30000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 30000 && mobile.SalePrice >= 20000)))
                    setTostifyText("Filter by : Between ₹20,000 to  ₹30,000")
                }

                else if (FilterValue === "40000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 40000 && mobile.SalePrice >= 30000)))
                    setTostifyText("Filter by : Between ₹30,000 to  ₹40,000")
                }
                else if (FilterValue === "50000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 50000 && mobile.SalePrice >= 40000)))
                    setTostifyText("Filter by : Between ₹40,000 to  ₹50,000")
                }
                else if (FilterValue === "60000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 60000 && mobile.SalePrice >= 50000)))
                    setTostifyText("Filter by : Between ₹50,000 to  ₹60,000")
                }

                else if (FilterValue === "70000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 70000 && mobile.SalePrice >= 60000)))
                    setTostifyText("Filter by : Between ₹60,000 to  ₹70,000")
                }
                else if (FilterValue === "80000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 80000 && mobile.SalePrice >= 70000)))
                    setTostifyText("Filter by : Between ₹70,000 to  ₹80,000")
                }
                else if (FilterValue === "90000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 90000 && mobile.SalePrice >= 80000)))
                    setTostifyText("Filter by : Between ₹80,000 to  ₹90000")
                }
                else if (FilterValue === "100000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 100000 && mobile.SalePrice >= 90000)))
                    setTostifyText("Filter by : Between ₹90,000 to  ₹100000")
                }
                else if (FilterValue === "110000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 110000 && mobile.SalePrice >= 100000)))
                    setTostifyText("Filter by : Between ₹100000 to  ₹110000")
                }
                else if (FilterValue === "120000") {
                    setfilteredMobiles(data?.used_phones?.filter((mobile: any) => (mobile.SalePrice <= 120000 && mobile.SalePrice >= 110000)))
                    setTostifyText("Filter by : Between ₹110000 to  ₹120000")
                }
                else if (FilterValue == "5G") {
                    setfilteredMobiles(data?.used_phones?.filter((item: { Model: string; Notes: string }) => {
                        const modelMatch = item.Model?.toLowerCase().includes(FilterValue?.toLowerCase());
                        const notesMatch = item.Notes?.toLowerCase().includes(FilterValue?.toLowerCase());
                        return modelMatch || notesMatch;
                    }))
                    setTostifyText(" Filter by : 5G")
                }
                else if (FilterValue == "BestPrice") {
                    let value = data?.used_phones?.filter((e: { Offer: any; id: any; }) => e.Offer !== "null" && e?.Offer !== null && e?.Offer !== 0 ? e.id : '')
                    console.log(value);
                    setfilteredMobiles(value)
                    setTostifyText(" Filter by : Best Price")
                }
                else if (FilterValue == "true") {
                    let value = data?.used_phones?.filter((e: { BBCW: string; id: any; }) => e.BBCW?.split(',')[3] == 'true' ? e.id : '')
                    setfilteredMobiles(value)
                    setTostifyText(" Filter by : In Warranty")
                }

                else {
                    let temparr: any = filteredMobiles

                    // setfilteredMobiles(temparr)
                    setTostifyText("")
                }
            }


        }
    }, [FilterValue, isSuccess])


    useEffect(() => {
        // if (ListOfMobil?.length !== 0) {
        handleIncreasePrice()
        // }
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


    return (
        <>
            <div className={s.filterBox}>
                <div className={s.commoc}>
                    <p>item</p>
                    <p>{SecondRateOfMobile?.length}</p>
                </div>
                <div className={s.inputbox}>
                    <input value={Filter} onChange={handelChangeforfilter} placeholder='Search for anything' />
                </div>
                <div >
                    <p className={s.fontFilter} onClick={toggleDrawer("bottom", true)}><IoFilterOutline /></p>
                </div>
            </div>

            {TostifyText && <div className={style.Filter_Text}>
                <p>  {TostifyText}</p>
                <span onClick={handelClickForRemoveFilter}>X</span>
            </div>}


            <div className={style.PhoneFilterBox}>
                <div className={style.phones_box}>
                    {SecondRateOfMobile &&
                        (SecondRateOfMobile?.map((i: any, index: React.Key | null | undefined) => (
                            <>
                                {
                                    i.SalePrice !== 0 && i.SalePrice !== '' &&
                                    <div key={index} className={style.model_card} onClick={() => handelMobileDetail(i?.Company, i?.Model, i?.id)}>
                                        <div className={style.Model_phone_Image_and_LikeButton}>
                                            <div className={style.model_phone_img}>
                                                <Image layout='responsive' width={70} height={100} src={mobileThumb(i?.Thumb, i?.Company)} alt="Phone Image" style={{ borderRadius: '5px' }} />
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

                                    </div>
                                }
                            </>
                        )))


                    }
                </div>

            </div>
            <div key="bottom">
                <SwipeableDrawer
                    anchor="bottom"
                    open={state["bottom"]}
                    onClose={toggleDrawer("bottom", false)}
                    onOpen={toggleDrawer("bottom", true)}
                >
                    {list("bottom")}
                </SwipeableDrawer>
            </div>

            <ScrollToTopButton />
        </>
    )
}

export default PhonesDetail
