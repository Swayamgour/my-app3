import React from 'react'
import style from '@/styles/Contact.module.css'
import Image from 'next/legacy/image'
import { IoIosMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { ImLocation } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
    return (<>
        <div className={style.contact_us}>
            <div className={style.contact_us_img}>
                <Image layout='responsive' width={100} height={40} src='/images/contact_02.png' alt='' />
            </div>
            <div className={style.contact_us_des}>
                <h3 className={style.contact_us_title}>contact us</h3>
                <div className={style.contact_us_summ}>{`At Phone we believe in transparent communication and have built various
                                touchpoints through which our Seller or Customer's can get in touch with us.`}</div>
            </div>
        </div>
        <div className={style.our_contact}>
            <div className={style.our_contact_img}>
                <Image layout='responsive' width={100} height={45} src='/images/contact_01.png' alt='' />
            </div>
            <div className={style.our_contact_box}>
                <div className={style.our_contact_box_inner}>
                    <div className={style.our_contact_des}>
                        <IoIosMail className={style.our_contact_icon} />
                        Email: &nbsp;
                        <span>Support@Phoneo.in</span>
                    </div>
                    <div className={style.our_contact_des}>
                        <ImLocation className={style.our_contact_icon} />
                        Address:&nbsp;
                        <span> bhilai supela</span>
                    </div>
                    <div className={style.our_contact_number_box}>
                        <div className={style.our_contact_des}>
                            <IoCall className={style.our_contact_icon} />
                            Toll Free Number -
                        </div>
                        <div className={style.contact_number}>
                            <span>7888288894</span>,&nbsp;
                            <span>7888288895</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.contact_link}>
            <div className={style.social}>
                <FaFacebookF className={style.social_icon} />
                <BsTwitter className={style.social_icon} />
                <BsInstagram className={style.social_icon} />
                <GrLinkedinOption className={style.social_icon} />
            </div>
        </div>

        <div className={style.contact_form_box}>
            <div className={style.contact_form}>
                <div className={style.contact_input_box}>
                    <div className={style.contact_title}>Your Name</div>
                    <div className={style.contact_input_type}>
                        <input type="text" className={style.contact_input} placeholder='Enter your name here...' />
                    </div>
                </div>
                <div className={style.contact_input_box}>
                    <div className={style.contact_title}>Your Email</div>
                    <div className={style.contact_input_type}>
                        <input type="text" className={style.contact_input} placeholder='Enter your email here...' />
                    </div>
                </div>
                <div className={style.contact_input_box}>
                    <div className={style.contact_title}>Message</div>
                    <div className={style.contact_message_type}>
                        <textarea className={style.contact_message} placeholder='Message...' ></textarea>
                    </div>
                </div>
                <div className={style.send_btn}>Send</div>
            </div>
        </div>


        <div className={style.ContactPheragraph}>
            <p>{`The Phoneo is a really usefull & very good platfrom for those who wish to good platfrom for those who wish to feed Good phoneo and word.... "The entire Team is Rocking".`}</p>
        </div>
    </>)
}

export default Contact