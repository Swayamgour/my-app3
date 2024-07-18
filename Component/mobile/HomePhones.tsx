import React, { useEffect, useState } from 'react'
import style from '@/styles/Home.module.css'
import { IoMdSwitch } from "react-icons/io";
import Image from 'next/image';
import { useGetAllMobilesQuery } from '@/Redux/productsReducer';
import { useRouter } from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";




const HomePhones = ({ setSearch, Search, tokenForLocal, setOpenDialer, setError, setPassLocationData, setLocationOpen, passLocationData }: any) => {
    // console.log(passLocationData);

    // console.log(Search);
    const { data, isSuccess } = useGetAllMobilesQuery('')
    const [likeBtn, setlikeBtn] = useState(-1)
    const [ids, setids] = useState<any[] | any[]>([]);
    const [token, setToken] = useState<any>(false);
    const [FilteredItems, setFilteredItems] = useState<any>([])
    const [location, setLocation] = useState<any>(null);
    const [FilterValue, setFilterValue] = useState<any>('');
    const [filteredMobiles, setfilteredMobiles] = useState<any>([]);
    const [TostifyText, setTostifyText] = useState<any>('');
    const [lat, setLat] = useState<any>('');
    const [log, setLog] = useState<any>('');
    const [SecondRateOfMobile, setSecondRateOfMobile] = useState<any>([]);
    const [NoData, setNoData] = useState<any>([]);
    const [filterZeroValue, setFilterZeroValue] = useState<any>([])




    const router = useRouter()
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



    useEffect(() => {
        if (FilteredItems) {
            if (Search === undefined) {
                let filterValue = FilteredItems && FilteredItems.filter((e: any) => e?.SalePrice !== 0)
                let filterValue1 = data && data.filter((e: any) => e?.SalePrice !== 0)
                setfilteredMobiles(filterValue)
                setNoData(filterValue1)

            }
            else {
                const query = Search
                const queryWord = query?.split(" ")
                let brand = queryWord[0];
                let phone = queryWord.slice(1).join(" ")

                let FilterDataOfPhone = FilteredItems?.filter((item: any) => {
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
                let FilterDataOfPhone1 = data?.filter((item: any) => {
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
                setNoData(FilterDataOfPhone1)
                setTostifyText(Search)
            }
        }
    }, [data, isSuccess, Search, location, passLocationData, FilteredItems])




    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token !== null) {
            setToken(true)
        }
    }, [tokenForLocal])

    const handelLoginPageNavigrate = (id: any) => {
        setOpenDialer(true)
    }

    useEffect(() => {
        requestLocation()
    }, [])



    useEffect(() => {
        let lat: any = localStorage.getItem('lat')
        let log: any = localStorage.getItem('log')
        if (lat !== null && log !== null) {
            setLat(lat)
            setLog(log)
        } else {
            if (location) {
                setLat(location.latitude)
                setLog(location.longitude)
            }
        }
    }, [passLocationData, location])
    // console.log(lat, location);


    const requestLocation = () => {
        const user_address: any = localStorage.getItem('user_address')
        if (user_address === null) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        setLocation({ latitude, longitude });
                        setPassLocationData(latitude + 1)
                        // setLocation({
                        //     latitude: position.coords.latitude,
                        //     longitude: position.coords.longitude,
                        // })
                    },
                    (err) => {
                        setError(err.message);
                    }
                );
            }
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };


    const getLocationName = async (latitude: any, longitude: any) => {

        const apiKey = "AIzaSyDtANuWuOF2pLHwzY5yWE0-Fac4Sevvigg"; // Replace with your Google Maps API key
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
        const data = await response.json();
        if (data.status === 'OK') {
            const results = data.results;
            if (results.length > 0) {
                // console.log(results);
                localStorage.setItem("user_address", results[0].formatted_address)
                return results[0].formatted_address; // Return the formatted address
            } else {
                throw new Error('No results found');
            }
        }
    };


    useEffect(() => {
        if (location) {
            localStorage.setItem('lat', location.latitude)
            localStorage.setItem('log', location.longitude)
            getLocationName(location.latitude, location.longitude)
        }
        else {
            if (lat === 'undefined' || lat === null) {
                localStorage.setItem('lat', 'undefined')
                localStorage.setItem('log', 'undefined')
            }
        }
    }, [location])


    useEffect(() => {
        if (data && lat && log) {
            const filtered = data?.filter((item: { lat: string; lng: string; }) => {
                const distance = calculateDistance(
                    lat,
                    log,
                    parseFloat(item.lat),
                    parseFloat(item.lng)
                );
                return distance < 50; // Adjust the distance threshold as needed
            });
            setFilteredItems(filtered);

        }
    }, [data, location, passLocationData, lat, log]);





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




    useEffect(() => {
        const storedByName: any = localStorage.getItem('category');
        const x = JSON.parse(storedByName)
        if (storedByName !== null) {
            setFilterValue(x)
        }
        else {
            setFilterValue('')
        }

    }, [isSuccess, FilterValue, Search])

    const handelCliskForFilter = (value: any) => {
        setFilterValue(value)
        setSearch('')
    }

    // console.log(FilteredItems);

    useEffect(() => {
        if (isSuccess && FilteredItems && data) {
            if (FilterValue) {

                if (FilterValue === "LTH") {
                    let arr: any = [...FilteredItems]
                    let arr2: any = [...data]
                    setfilteredMobiles(arr.sort((a: any, b: any) => a.SalePrice - b.SalePrice))
                    setNoData(arr2.sort((a: any, b: any) => a.SalePrice - b.SalePrice))
                    setTostifyText("Filter by :  Low  to High Prices")
                }
                else if (FilterValue === "HTL") {
                    let arr: any = [...FilteredItems]
                    let arr2: any = [...data]
                    setfilteredMobiles(arr.sort((a: any, b: any) => b.SalePrice - a.SalePrice))
                    setNoData(arr2.sort((a: any, b: any) => b.SalePrice - a.SalePrice))
                    setTostifyText("Filter by :  High   to Low Prices")
                }
                else if (FilterValue == "10000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 10000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 10000)))
                    setTostifyText("Filter by :  Between ₹10000")
                }

                else if (FilterValue === "20000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 20000 && mobile.SalePrice >= 10000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 20000 && mobile.SalePrice >= 10000)))
                    setTostifyText("Filter by :  Between ₹10,000 to  ₹20,000 ")
                }

                else if (FilterValue === "30000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 30000 && mobile.SalePrice >= 20000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 30000 && mobile.SalePrice >= 20000)))
                    setTostifyText("Filter by : Between ₹20,000 to  ₹30,000")
                }

                else if (FilterValue === "40000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 40000 && mobile.SalePrice >= 30000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 40000 && mobile.SalePrice >= 30000)))
                    setTostifyText("Filter by : Between ₹30,000 to  ₹40,000")
                }
                else if (FilterValue === "50000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 50000 && mobile.SalePrice >= 40000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 50000 && mobile.SalePrice >= 40000)))
                    setTostifyText("Filter by : Between ₹40,000 to  ₹50,000")
                }
                else if (FilterValue === "60000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 60000 && mobile.SalePrice >= 50000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 60000 && mobile.SalePrice >= 50000)))
                    setTostifyText("Filter by : Between ₹50,000 to  ₹60,000")
                }

                else if (FilterValue === "70000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 70000 && mobile.SalePrice >= 60000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 70000 && mobile.SalePrice >= 60000)))
                    setTostifyText("Filter by : Between ₹60,000 to  ₹70,000")
                }
                else if (FilterValue === "80000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 80000 && mobile.SalePrice >= 70000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 80000 && mobile.SalePrice >= 70000)))
                    setTostifyText("Filter by : Between ₹70,000 to  ₹80,000")
                }
                else if (FilterValue === "90000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 90000 && mobile.SalePrice >= 80000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 90000 && mobile.SalePrice >= 80000)))
                    setTostifyText("Filter by : Between ₹80,000 to  ₹90000")
                }
                else if (FilterValue === "100000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 100000 && mobile.SalePrice >= 90000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 100000 && mobile.SalePrice >= 90000)))
                    setTostifyText("Filter by : Between ₹90,000 to  ₹100000")
                }
                else if (FilterValue === "110000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 110000 && mobile.SalePrice >= 100000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 110000 && mobile.SalePrice >= 100000)))
                    setTostifyText("Filter by : Between ₹100000 to  ₹110000")
                }
                else if (FilterValue === "120000") {
                    setfilteredMobiles(FilteredItems?.filter((mobile: any) => (mobile.SalePrice <= 120000 && mobile.SalePrice >= 110000)))
                    setNoData(data?.filter((mobile: any) => (mobile.SalePrice <= 120000 && mobile.SalePrice >= 110000)))
                    setTostifyText("Filter by : Between ₹110000 to  ₹120000")
                }
                else if (FilterValue == "5G") {
                    setfilteredMobiles(FilteredItems?.filter((item: { Model: string; Notes: string }) => {
                        const modelMatch = item.Model?.toLowerCase().includes(FilterValue?.toLowerCase());
                        const notesMatch = item.Notes?.toLowerCase().includes(FilterValue?.toLowerCase());
                        return modelMatch || notesMatch;
                    }))
                    setNoData(data?.filter((item: { Model: string; Notes: string }) => {
                        const modelMatch = item.Model?.toLowerCase().includes(FilterValue?.toLowerCase());
                        const notesMatch = item.Notes?.toLowerCase().includes(FilterValue?.toLowerCase());
                        return modelMatch || notesMatch;
                    }))
                    setTostifyText(" Filter by : 5G")
                }
                else if (FilterValue == "BestPrice") {
                    let value = FilteredItems?.filter((e: { Offer: any; id: any; }) => e.Offer !== "null" && e?.Offer !== null && e?.Offer !== 0 ? e.id : '')
                    let value1 = data?.filter((e: { Offer: any; id: any; }) => e.Offer !== "null" && e?.Offer !== null && e?.Offer !== 0 ? e.id : '')
                    setfilteredMobiles(value)
                    setNoData(value1)
                    setTostifyText(" Filter by : Best Price")
                }
                else if (FilterValue == "true") {
                    let value = FilteredItems?.filter((e: { BBCW: string; id: any; }) => e.BBCW?.split(',')[3] == 'true' ? e.id : '')
                    let value1 = data?.filter((e: { BBCW: string; id: any; }) => e.BBCW?.split(',')[3] == 'true' ? e.id : '')
                    setfilteredMobiles(value)
                    setNoData(value1)
                    setTostifyText(" Filter by : In Warranty")
                }

                else {
                    let temparr: any = FilteredItems
                    let temparr1: any = data
                    setfilteredMobiles(temparr)
                    setNoData(temparr1)
                    setTostifyText("")
                }
            }
            else {

                let temparr: any = FilteredItems
                let temparr1: any = data
                setfilteredMobiles(temparr)
                setNoData(temparr1)
                // setTostifyText("")
            }

        }
    }, [FilterValue, isSuccess, FilteredItems, data])



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

    const handelUpdateLuctiion = () => {
        setLocationOpen(lat)
    }


    const handelRemove = () => {
        localStorage.removeItem("category")
        setFilterValue('')
        setTostifyText('')
        setSearch('')
    }


    useEffect(() => {
        if (Search) {
            if (Search.length <= 1) {
                // const scrollToIdWithOffset = (id, offset = 200) => {
                const element = document.getElementById('top');
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 30;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                // };
            }
        }
    }, [Search])

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


    useEffect(() => {
        // if (ListOfMobil?.length !== 0) {
        handleIncreasePrice()
        // }
    }, [filteredMobiles, NoData])

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
        const updatedDataSecond = NoData && NoData?.map((item: any) => {
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
        setFilterZeroValue(updatedDataSecond);
    };


    // console.log(filterZeroValue, NoData);

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

    const displayValue = () => {
        if (FilteredItems?.length === 0) {
            if (filterZeroValue?.length >= 10) {
                return '10';
            }
            else {
                return FilteredItems?.length;
            }
        } else if (FilteredItems?.length !== 0) {
            if (SecondRateOfMobile?.length >= 10) {
                return '10';
            }
            else {
                return SecondRateOfMobile?.length;
            }
        }
    };


    return (
        <>

            {/* {console.log(filterZeroValue)} */}
            <div id='top' className={style.phone_box}>
                <div className={style.phone_box_top}>
                    <div className={style.phone_box_filter}>
                        <IoMdSwitch />
                        <span className={style.phone_box_filter_title} onClick={toggleDrawer("bottom", true)}>Filter</span>
                    </div>
                    <div className={style.phone_box_branding}>
                        <span className={style.phone_brand_name}>items</span>
                        <span className={style.phone_brand_count}>{displayValue()} Phones</span>
                    </div>
                </div>

                {TostifyText && <div className={style.Filter_Text}>
                    <p>  {TostifyText}</p>
                    <span onClick={handelRemove}>X</span>
                </div>}

                {/* Card start */}


                {FilteredItems.length === 0 && <div className={style.LocationImage}>
                    <Image src={'/Location/notavalible.webp'} width={100} height={100} alt='not avalible Phone' layout='responsive' />

                    <div className={style.UpdateContaner} >

                        <p onClick={handelUpdateLuctiion} className={style.UpdateLocation}>Update Location</p>
                    </div>
                </div>}

                <div className={style.phone_card_box}>
                    {FilteredItems.length !== 0 &&
                        <>
                            {SecondRateOfMobile?.length !== 0 ?
                                (SecondRateOfMobile?.slice(0, 10).map((e: any, index: any) => (
                                    <>
                                        {
                                            e?.SalePrice !== 0 && e?.SalePrice !== '' &&
                                            <div key={index} className={style.phone_card}>
                                                <div onClick={() => handelMobileDetail(e?.Company, e?.Model, e?.id)} className={style.phone_img}>
                                                    <Image layout='responsive' width={70} height={100} src={mobileThumb(e?.Thumb, e?.Company)} alt="Phone Image" style={{ borderRadius: '5px' }} />
                                                </div>
                                                <div className={style.phone_card_des}>
                                                    <div onClick={() => handelMobileDetail(e?.Company, e?.Model, e?.id)} className={style.phone_card_des_model}>{e?.Company} {e?.Model} </div>
                                                    <div onClick={() => handelMobileDetail(e?.Company, e?.Model, e?.id)} className={style.phone_card_des_variant}>{`${e?.Color}`}</div>
                                                    <div style={{ marginBottom: '10px' }} onClick={() => handelMobileDetail(e?.Company, e?.Model, e?.id)} className={style.phone_card_des_variant}>{`${e?.Variant}`}</div>
                                                    <div className={style.phone_card_des_pric}>
                                                        <p onClick={() => handelLoginPageNavigrate(e?.id)}>{offer(e)}</p>

                                                        <p className={style.offerPrice} onClick={() => handelLoginPageNavigrate(e?.id)}>{OfferPrice(e)}</p>


                                                    </div>
                                                    <div className={style.phone_card_des_price}>{token ? `₹ ${e?.SalePrice}` : <p onClick={() => handelLoginPageNavigrate(e?.id)}>{priceHide(e)}</p>}

                                                        {/* <span className={style.phone_card_des_like}><BsHeart /></span> */}
                                                        {ids?.includes(e?.id) ?
                                                            <div className={style.likeBtn} >
                                                                <FavoriteIcon style={{ color: 'red' }} className={style.DislikeBtn} onClick={() => handleRemoveFromWishList(e?.id)} />
                                                            </div>
                                                            :
                                                            <div className={style.NotlikeBtn} onClick={() => handleLikeBtn(e.id)}><FavoriteBorderIcon />
                                                            </div>
                                                        }
                                                    </div>
                                                    {/* {token === false && <p
                                            onClick={() => handelLoginPageNavigrate(e?.id)}
                                            className={style.PhonecardLogoin}>Log in </p>} */}
                                                </div>
                                            </div>
                                        }
                                    </>
                                )))
                                :
                                (<div className={style.Home_OutOf_Storage}>
                                    <p>No Phone on this Search</p>
                                    <div >
                                        <Image src={'/Profile/outOfStock.webp'} width={100} height={100} alt='out' layout='responsive' />
                                    </div>
                                </div>)
                            }
                        </>
                    }

                </div>

                <div className={style.phone_card_box}>
                    {FilteredItems.length === 0 &&
                        <>
                            {filterZeroValue?.length !== 0 ?
                                (filterZeroValue?.slice(0, 10).map((e: any, index: any) => (
                                    <>
                                        {
                                            e?.SalePrice !== 0 && e?.SalePrice !== '' &&
                                            <div key={index} className={style.phone_card}>
                                                <div onClick={() => handelMobileDetail(e?.Company, e?.Model, e?.id)} className={style.phone_img}>
                                                    <Image layout='responsive' width={70} height={100} src={mobileThumb(e?.Thumb, e?.Company)} alt="Phone Image" style={{ borderRadius: '5px' }} />
                                                </div>
                                                <div className={style.phone_card_des}>
                                                    <div onClick={() => handelMobileDetail(e?.Company, e?.Model, e?.id)} className={style.phone_card_des_model}>{e?.Company} {e?.Model} </div>
                                                    <div onClick={() => handelMobileDetail(e?.Company, e?.Model, e?.id)} className={style.phone_card_des_variant}>{`${e?.Color}`}</div>
                                                    <div style={{ marginBottom: '10px' }} onClick={() => handelMobileDetail(e?.Company, e?.Model, e?.id)} className={style.phone_card_des_variant}>{`${e?.Variant}`}</div>
                                                    <div className={style.phone_card_des_pric}>
                                                        <p onClick={() => handelLoginPageNavigrate(e?.id)}>{offer(e)}</p>

                                                        <p className={style.offerPrice} onClick={() => handelLoginPageNavigrate(e?.id)}>{OfferPrice(e)}</p>


                                                    </div>
                                                    <div className={style.phone_card_des_price}>{token ? `₹ ${e?.SalePrice}` : <p onClick={() => handelLoginPageNavigrate(e?.id)}>{priceHide(e)}</p>}

                                                        {/* <span className={style.phone_card_des_like}><BsHeart /></span> */}
                                                        {ids?.includes(e?.id) ?
                                                            <div className={style.likeBtn} >
                                                                <FavoriteIcon style={{ color: 'red' }} className={style.DislikeBtn} onClick={() => handleRemoveFromWishList(e?.id)} />
                                                            </div>
                                                            :
                                                            <div className={style.NotlikeBtn} onClick={() => handleLikeBtn(e.id)}><FavoriteBorderIcon />
                                                            </div>
                                                        }
                                                    </div>
                                                    {/* {token === false && <p
                                            onClick={() => handelLoginPageNavigrate(e?.id)}
                                            className={style.PhonecardLogoin}>Log in </p>} */}
                                                </div>
                                            </div>
                                        }
                                    </>
                                )))
                                :
                                (<div className={style.Home_OutOf_Storage}>
                                    <p>No Phone on this Search</p>
                                    <div >
                                        <Image src={'/Profile/outOfStock.webp'} width={100} height={100} alt='out' layout='responsive' />
                                    </div>
                                </div>)
                            }
                        </>
                    }

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
            </div>
            {/* <Location error={error} /> */}

        </>
    )
}

export default HomePhones