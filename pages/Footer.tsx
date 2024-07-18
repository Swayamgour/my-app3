import React, { useEffect, useState } from 'react';
import style from '@/styles/Footer.module.css';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Loader from '@/Component/Loader';
import { MdOutlineHelpCenter } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { useRouter } from 'next/router';

const Footer = () => {


    const [value, setValue] = useState(false)
    const array = [
        {
            name: 'i Phone 15 pro',
        },
        {
            name: 'Under 5000',
        },
        {
            name: 'Samsung Galaxy S20 FE',
        },
        {
            name: 'Realme 5G',
        },
        {
            name: '5G phones',
        },
        {
            name: '55% Off',
        },
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(true)
        }, 100);

        return () => {
            // Clean up the timer when the component unmounts
            clearTimeout(timer);
        };
    }, []);

    const router = useRouter()

    return (
        <>
            {value ?
                (<div className={style.Footer_Main}>
                    <Image src={'/images/logo/logo_black.png'} alt='logo' width={120} height={45} />

                    <p className={style.DontCompromise}>{`Don't compromise on quality`}</p>
                    <p className={style.SocialMedia}>{`Social Media`}</p>

                    <div className={style.socialMedia}>
                        <FaFacebookF onClick={() => router.push('https://m.facebook.com/people/Phoneo/100092302041632/')} className={style.Facebook} />
                        <RiTwitterXFill onClick={() => router.push('https://twitter.com/Phoneo474885')} className={style.Twitter} />
                        <GrInstagram onClick={() => router.push('https://www.instagram.com/phoneo.in/')} className={style.Instagram} />
                        <FaLinkedinIn onClick={() => router.push('https://www.linkedin.com/in/phoneo-in-7b2b14294/')} className={style.LinkedIn} />
                    </div>

                    <h1 className={style.About}>About Us</h1>

                    <div className={style.About_Catergory_Cantainer}>
                        <p onClick={() => router.push('/faq')}>{`FAQ's`}</p>
                        {/* <p onClick={() => router.push('/')}>Brands</p> */}
                        <p onClick={() => router.push('/')}>{`Health`}</p>
                        <p onClick={() => router.push('/privacy&policy')}>{`Privacy & policy`}</p>
                        <p onClick={() => router.push('/about')}>About Us</p>
                        <p onClick={() => router.push('/terms&conditions')}>{`Terms & Condition`}</p>
                        <p onClick={() => router.push('/Contacts')}>{`Contact us`}</p>
                        <p onClick={() => router.push('/refund&cancellation')}>{`Refund & cancellations`}</p>

                    </div>

                    {/* <h1 className={style.About}>Mail Us</h1>

                    <div className={style.About_Catergory_Cantainer_Social}>
                        <p>{`Support@Phoneo.in`}</p>

                    </div> */}


                    <h1 className={style.About}>{`Registered Office Address`}</h1>

                    <div className={style.About_Catergory_Cantainer_Social}>

                        <p style={{ width: '100%' }}>{`Phoneo Office, Akash Ganga, Supela, Bhilai, Chhattisgarh 490020`}</p>
                    </div>

                    {/* <div className={style.hrtag}></div>

                    <div className={style.OfferBox}>
                        {array?.map((e) => {
                            return (
                                <>
                                    <p>{e.name}</p>
                                </>
                            )
                        })}
                    </div> */}

                    <div className={style.hrtag}></div>

                    <div className={style.HelpCenter}>
                        <p onClick={() => router.push('/help')}>
                            {/* <MdOutlineHelpCenter style={{ fontSize: '14px' }} />  */}
                            Help Center</p>
                        {/* <p> <RiAdvertisementLine style={{ fontSize: '14px' }} /> Advertise</p> */}

                    </div>


                    <p className={style.PhoneoTag}>{`Copyright © 2024 PHONEO All Rights Reserved`}</p>


                </div>)
                : <Loader />
            }
        </>
    )
}

export default Footer