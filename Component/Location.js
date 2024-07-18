import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import PlaceIcon from "@mui/icons-material/Place";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useUserAddressQuery } from '@/Redux/addressReducer'
import {  setKey, fromAddress } from "react-geocode";
import { useEffect } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import style from '@/styles/Location.module.css'
import { CiSearch } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

export default function Location({ error, setPassLocationData, locationOpen }) {
    // console.log(error === "User denied Geolocation");

    const array = [
        {
            name: 'bhilai',
            png: '/Location/BHILAI.png'
        },
        {
            name: 'Durg',
            png: '/Location/DURG.png'
        },
        {
            name: 'Raipur',
            png: '/Location/Raipur.png'
        },
        {
            name: 'Rajnandgaon',
            png: '/Location/Group 3035.png'
        },
    ]

    let user_address;
    useEffect(() => {
        user_address = localStorage.getItem("user_address");

    }, [])

    const [add, setAdd] = React.useState(user_address);
    const { data: loc } = useUserAddressQuery(add);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const lat = localStorage.getItem('lat')
        const log = localStorage.getItem('log')
        // console.log(lat === "undefined" && log === 'undefined');
        if (lat === 'undefined' && log === 'undefined' && error == "User denied Geolocation") {
            setOpen(true)
        }
    }, [error])

    useEffect(() => {
        if (locationOpen) {
            setOpen(locationOpen)
        }
    }, [locationOpen])


    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const addressHandler = (address) => {
        setAdd(address);
        setKey("AIzaSyDtANuWuOF2pLHwzY5yWE0-Fac4Sevvigg")
        fromAddress(address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                localStorage.setItem("lat", lat);
                localStorage.setItem("log", lng);
                localStorage.setItem("user_address", address);
                setPassLocationData(lng)
            },
            (error) => {
                console.error(error);
            }
        );
        setOpen(false)
    };

    useEffect(() => {
        if (add === "" || add == null) {
            // localStorage.setItem("user_address", "Bhilai, Chhattisgarh, India");
            // localStorage.setItem("lat", 21.1938475);
            // localStorage.setItem("lng", 81.3509416);
        } else {
            localStorage.setItem("user_address", add);
        }
    }, []);


    const handelCross = () => {
        
    }

    const handelClickForCurrentLocation = () => {
        
    }



    return (
        <div className="light">
            <Dialog
                fullScreen={fullScreen}
                style={{ width: '100vw' }}
                // open={true}
                open={open}
                // onClose={}
                aria-labelledby="responsive-dialog-title"
            >

                <DialogContent>

                    {/* <ClearIcon onClick={handelCross} /> */}
                    
                    <div className={style.fromCan}>


                        <div className={style.inputBox}>

                            <CiSearch className={style.SearchIcons} />

                            <input
                                type="text"
                                placeholder="Enter your Address"
                                value={add}
                                onChange={(e) => setAdd(e.target.value)}
                            />
                            <ClearIcon onClick={() => setAdd("")} className={style.SearchIcons} />
                        </div>

                        {/* <div onClick={handelClickForCurrentLocation} className={style.inputBox}>
                            <FaLocationArrow className={style.Location} />

                            <p className={style.DetectMy}>Detect my location</p>


                        </div> */}

                        <div className={style.Location_Main_Cantaier}>
                            {array?.map((e, index) => {
                                return (
                                    <>
                                        <div className={style.Location_Center_Cantaier} onClick={() => addressHandler(e?.name)}>
                                            <div className={style.Location_Image_cantainer} key={index}>
                                                <Image src={e?.png} alt='png' width={100} height={100} layout="responsive" />
                                            </div>
                                            <p>{e?.name}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                        {loc &&
                            loc.predictions.map((item, index) =>
                                !add ? null : (
                                    <div
                                        title={item.description}
                                        className={style.suggestion}
                                        key={index}
                                        onClick={() => addressHandler(item.description)}
                                        style={{ display: 'flex', alignItems: 'center', marginTop: '10px', gap: '10px' }}
                                    >
                                        <p><PlaceIcon /></p>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            )}
                    </div>

                </DialogContent>


            </Dialog>
        </div>
    );


}
