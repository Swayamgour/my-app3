import React, { useEffect, useState } from 'react'
import style from '@/styles/Model.module.css'
import Image from 'next/image';
import { LiaFileInvoiceSolid, LiaBoxSolid } from "react-icons/lia";
import { MdCable } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { useRouter } from 'next/router';
import { useGetAllMobilesQuery } from '@/Redux/productsReducer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IoFilterOutline } from "react-icons/io5";
import { CiHardDrive } from 'react-icons/ci';
import { PiBatteryChargingVerticalThin } from 'react-icons/pi';
import { CiSearch } from "react-icons/ci";
import { useUserAddressQuery } from '@/Redux/addressReducer'
import { IoIosList } from 'react-icons/io';
import { VscListFilter } from 'react-icons/vsc';
import List from '@mui/material/List';
import { Box, SwipeableDrawer } from '@mui/material';

const ModelPhones = ({ Search, setOpenDialer, tokenForLocal }: any) => {
    const router = useRouter()
    const { data, isSuccess } = useGetAllMobilesQuery('')
    const [ListOfMobil, setListOfMobil] = useState<any>()
    const [SecondRateOfMobile, setSecondRateOfMobile] = useState<any>()
    const [ids, setids] = useState<any[] | any[]>([]);
    const [likeBtn, setlikeBtn] = useState(-1)

    const [profile, setProfile] = useState()
    const [FilteredItems, setFilteredItems] = useState<any>([])
    const [location, setLocation] = useState<any>(null);
    const [error, setError] = useState<any>(null);


    useEffect(() => {
        const token: any = localStorage.getItem('token')
        if (token) {
            setProfile(token)
        }
    }, [tokenForLocal])

    useEffect(() => {
        if (Search) {
            if (Search.length <= 1) {
                // const scrollToIdWithOffset = (id, offset = 200) => {
                const element = document.getElementById('top');
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 100;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                // };
            }
        }
    }, [Search])



    useEffect(() => {
        if (router.query.model) {

            if (Search === '') {
                // console.log('fi');
                let filterByCompany = data && data.filter((e: any) => e.Company === router.query.model)
                setListOfMobil(filterByCompany)
            }
            else {
                // console.log('rlse');
                let filterByCompany = data && data.filter((e: any) => e.Company === router.query.model)
                const query = Search
                const queryWord = query?.split(" ")
                let brand = queryWord[0];
                let phone = queryWord.slice(1).join(" ")

                let FilterDataOfPhone = filterByCompany?.filter((item: any) => {
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

    // console.log(ListOfMobil);
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

    const ram = [
        {
            id: 1,
            ram: '4 Gb Ram'
        },
        {
            id: 2,
            ram: '8 Gb Ram'
        },
        {
            id: 3,
            ram: '16 Gb Ram'
        },
        {
            id: 4,
            ram: '12 Gb Ram'
        },
        {
            id: 5,
            ram: '16 Gb Rom'
        },
        {
            id: 6,
            ram: '16 Gb Rom'
        },
        {
            id: 7,
            ram: '16 Gb Rom'
        },
        {
            id: 8,
            ram: '16 Gb Rom'
        },
    ]

    const Battery = [
        {
            id: 1,
            battery: '5000 mAh'
        },
        {
            id: 1,
            battery: '6000 mAh'
        },
        {
            id: 1,
            battery: '5600 mAh'
        },
        {
            id: 1,
            battery: '8000 mAh'
        },
    ]

    const Other = [
        {
            id: 1,
            Other: 'High to Low'
        },
        {
            id: 1,
            Other: 'High to Low'
        },
        {
            id: 1,
            Other: 'High to Low'
        },
        {
            id: 1,
            Other: 'High to Low'
        },
    ]

    const filterByModel = [
        {
            id: 1,
            Icon: <CiSearch />,
            name: 'Model',
        },
        {
            id: 1,
            Icon: <CiSearch />,
            name: 'Model',
        },
        {
            id: 1,
            Icon: <CiSearch />,
            name: 'Model',
        },
        {
            id: 1,
            Icon: <CiSearch />,
            name: 'Model',
        },
        {
            id: 1,
            Icon: <CiSearch />,
            name: 'Model',
        }
    ]

    const handelClickShowPrice = () => {
        setOpenDialer(true)
    }




    const lat: any = SecondRateOfMobile && localStorage.getItem('lat')
    const log: any = SecondRateOfMobile && localStorage.getItem('log')

    useEffect(() => {
        if (SecondRateOfMobile) {
            const filtered = data && SecondRateOfMobile && SecondRateOfMobile?.filter((item: { lat: string; lng: string; }) => {
                const distance = calculateDistance(
                    lat, log,
                    parseFloat(item.lat),
                    parseFloat(item.lng)
                );
                return distance < 50;
            });
            setFilteredItems(filtered);
        } else {
            setFilteredItems(SecondRateOfMobile)
        }
    }, [lat, log, SecondRateOfMobile]);


    function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
        const toRad = (value: number) => (value * Math.PI) / 180;

        const R = 6371; // Radius of the Earth in kilometers
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers
        return distance;
    }

    const [state, setState] = useState({ bottom: false });

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

    const list = (anchor: any) => {
        return (
            <Box
                sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
                role="presentation"

                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    <div className={style.filterBox}>
                        <p onClick={() => { handelCliskForFilter('5G'); localStorage.setItem('category', JSON.stringify("5G")) }}>5G</p>
                        <p onClick={() => { handelCliskForFilter('BestPrice'); localStorage.setItem('category', JSON.stringify("BestPrice")) }}>Best Price</p>
                        <p onClick={() => { handelCliskForFilter('true'); localStorage.setItem('category', JSON.stringify("true")) }}>Warrenty</p>
                        <hr />
                        <p onClick={() => { handelCliskForFilter('LTH'); localStorage.setItem('category', JSON.stringify("LTH")) }}>Low to High</p>
                        <p onClick={() => { handelCliskForFilter('HTL'); localStorage.setItem('category', JSON.stringify("HTL")) }}>High to Low</p>
                        <hr />
                        <p onClick={() => { handelCliskForFilter('10k'); localStorage.setItem('category', JSON.stringify("10000")) }}>Under 10,000</p>
                        <p onClick={() => { handelCliskForFilter('20k'); localStorage.setItem('category', JSON.stringify("20000")) }}>Under 10,000 to 20,000</p>
                        <p onClick={() => { handelCliskForFilter('30k'); localStorage.setItem('category', JSON.stringify("30000")) }}>Under 20,000 to 30,000</p>
                        <p onClick={() => { handelCliskForFilter('40k'); localStorage.setItem('category', JSON.stringify("40000")) }}>Under 30,000 to 40,000</p>
                        <p onClick={() => { handelCliskForFilter('50k'); localStorage.setItem('category', JSON.stringify("50000")) }}>Under 40,000 to 50,000</p>
                        <p onClick={() => { handelCliskForFilter('60k'); localStorage.setItem('category', JSON.stringify("60000")) }}>Under 50,000 to 60,000</p>
                        <p onClick={() => { handelCliskForFilter('70k'); localStorage.setItem('category', JSON.stringify("70000")) }}>Under 60,000 to 70,000</p>

                    </div>
                </List>
            </Box>
        )
    };


    const handelCliskForFilter = (e: any) => {

    }
    // console.log(FilteredItems, SecondRateOfMobile);

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


    return (
        <>
            {/* <div className={style.model_nav_bottom}> */}
            {/* <div onClick={toggleDrawer("bottom", true)} className={style.model_nav_bottom_filter}>
                    <span className={style.model_nav_filter_icon}><IoIosList /></span> sort by
                </div> */}
            {/* <div onClick={toggleDrawer("bottom", true)} className={style.model_nav_bottom_filter}>
                    <span className={style.model_nav_filter_icon}><VscListFilter /></span> filter
                </div> */}
            {/* </div> */}

            <div className={style.filterNav}>
                <div className={style.Mobile_Left_Top}>
                    <div className={style.Mobile_Left_Top_Logo}>
                        <IoFilterOutline />
                    </div>
                    <h3>Filter</h3>

                </div>
                <div className={style.phone_Filter_By_MOdel} >
                    {filterByModel.map((e, i) => {
                        return (
                            <div key={i}
                            // style={{display:'flex' , alignContent:'center' , gap:'10px' , fontSize:'20px' , border:'1px solid gray' , padding:'8px 16px'  ,borderRadius:'10px' }}
                            >
                                {e?.Icon} {e?.name}

                            </div>

                        )
                    })}
                </div>
            </div>

            <div className={style.Phone_Main_Cantaner}>

                <div className={style.Mobile_Left}>


                    <div className={style.Mobile_Ram}>
                        <CiHardDrive style={{ fontSize: '30px' }} />
                        <h3>Ram | Rom</h3>
                    </div>

                    <div className={style.Ram_Cantaner}>
                        {ram.map((e, i) => {
                            return (
                                <>
                                    <div className={style.Mobile_Ram_List} key={i}>
                                        <h4>
                                            {e.ram}
                                        </h4>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div className={style.Mobile_Battery}>
                        <PiBatteryChargingVerticalThin style={{ fontSize: '30px' }} />
                        <h3>Battery</h3>
                    </div>

                    <div className={style.Ram_Cantaner}>
                        {Battery.map((e, i) => {
                            return (
                                <>
                                    <div style={{ textTransform: 'lowercase' }} className={style.Mobile_Ram_List} key={i}>
                                        <h4> {e.battery}</h4>
                                    </div>
                                </>
                            )
                        })}
                    </div>


                    <div className={style.Mobile_Battery}>
                        <PiBatteryChargingVerticalThin style={{ fontSize: '30px' }} />
                        <h3>Others</h3>
                    </div>

                    <div className={style.Ram_Cantaner}>
                        {Other.map((e, i) => {
                            return (
                                <>
                                    <div className={style.Mobile_Ram_List} key={i}>
                                        <h4> {e.Other}</h4>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>

                <div id='top' className={style.PhoneFilterBox}>


                    {FilteredItems?.length === 0 && <div className={style.LocationImage}>
                        <Image src={'/Location/notavalible.webp'} width={100} height={100} alt='not avalible Phone' layout='responsive' />

                        {/* <div className={style.UpdateContaner} >
                            <p className={style.UpdateLocation}>Update Location</p>
                        </div> */}
                    </div>}


                    <div className={style.phones_box}>
                        {FilteredItems?.length !== 0 ?
                            (FilteredItems?.map((i: any, index: React.Key | null | undefined) => (
                                <>
                                    {
                                        i.SalePrice !== 0 && i.SalePrice !== '' &&
                                        <div key={index} className={style.model_card} onClick={() => handelMobileDetail(i?.Company, i?.Model, i?.id)}>
                                            <div className={style.Model_phone_Image_and_LikeButton}>
                                                <div className={style.model_phone_img}>
                                                    <Image layout='responsive' width={70} height={100} src={mobileThumb(i?.Thumb, i?.Company)} alt="Phone Image" style={{borderRadius:'5px'}} />
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
                                            <div onClick={() => handelClickShowPrice()} className={style.model_phone_price_box}>
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
                            :
                            (SecondRateOfMobile && SecondRateOfMobile?.map((i: any, index: React.Key | null | undefined) => (
                                <>
                                    {
                                        i.SalePrice !== 0 && i.SalePrice !== '' &&
                                        <div key={index} className={style.model_card} onClick={() => profile ? handelMobileDetail(i?.Company, i?.Model, i?.id) : handelClickShowPrice()}>
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
                                            <div className={style.model_phone_price_box}>
                                                <span className={style.model_phone_dicount}>
                                                    {profile ? offer(i) : <span >{'XX %'}</span>}
                                                </span>
                                                <span className={style.model_phone_mrp}>
                                                    {/* {OfferPrice(i)} */}
                                                    {profile ? OfferPrice(i) : <span >{'₹ X,XXX'}</span>}

                                                </span>
                                                <span className={style.model_phone_price}>

                                                    {profile ? priceHide(i) : <span >{'₹  X,XXX'}</span>}


                                                </span>


                                            </div>
                                            {/* </div> */}
                                        </div>
                                    }
                                </>
                            )))
                        }
                    </div>

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
        </>
    )
}

export default ModelPhones