import React from 'react'
import style from '@/styles/Career.module.css'
import Image from 'next/legacy/image'
import { MdWorkHistory, MdAccessTime } from 'react-icons/md'


const Career = () => {
    return (
        <>
            <div className={style.career_main}>
                <div className={style.carrer_image}>
                    {/* <h2 className={style.career_hading}>Carrer</h2> */}
                    <Image src={'/images/Group 2927.png'} alt='carrer Image' width={100} height={60} layout='responsive' className={style.career_main_image} />
                </div>
                <div className={style.career_hading}>
                    <h3 className={style.Carrer_Carre_Heading}>Career</h3>
                    <div className={style.career_hading_cantainer}>
                        <p className={style.pheraghaphheading}>Opportunity sometimes knocks on your door</p>
                        <p className={style.pheraghaphheading_phragraph}>Opportunity sometimes knocks on your door Opportunity sometimes knocks on your door Opportunity sometimes knocks on your door</p>
                    </div>


                </div>

                <div style={{ marginTop: '15px' }} className={style.career_hading}>
                    <h3 className={style.Carrer_Member_Heading}>in Member</h3>

                    <div className={style.career_Member_Cantainer}>
                        <div className={style.career_Member_image}>

                            <Image src={'/images/Group 2909.png'} alt='carrer Image' width={100} height={70} layout='responsive' className={style.career_main_image} />
                        </div>
                        <p>Phone has</p>
                        <h3>500 + Sellers</h3>

                    </div>


                </div>

                <div className={style.carrer_Area_of}>
                    <div className={style.carrer_Area_o}>
                        <h3>Area of Work</h3>
                        <h2>Opportunity to enhance</h2>
                        <h2>Your skills</h2>
                    </div>
                    <div className={style.carrer_ImageArea_OF_impro}>
                        <Image src={'/career/Group 2928.png'} width={100} height={80} alt='area' layout='responsive' />
                    </div>
                    <div className={style.Explore_Button}>
                        <button>Explore Opportunities</button>
                    </div>
                </div>

                <div style={{ marginTop: '30px' }} className={style.carrer_Area_of}>
                    <div className={style.carrer_Area_Training_and_guidance}>

                        <h2>Training and guidance</h2>

                    </div>
                    <div className={style.carrer_ImageArea_OF_impro}>
                        <Image src={'/career/Group 29299.png'} width={100} height={80} alt='area' layout='responsive' />
                    </div>


                </div>





            </div>
            <div className={style.carrer_Training_and_guidance} >
                <p >{`A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs`}</p>
            </div>
            <div className={style.career_main}>

                <div style={{ marginTop: '30px' }} className={style.carrer_Area_of}>
                    <div className={style.carrer_Area_Training_and_guidance}>

                        <h2>Ability to work with</h2>
                        <h2>New technology</h2>

                    </div>
                    <div className={style.carrer_ImageArea_OF_impro}>
                        <Image src={'/career/Group 2930.png'} width={100} height={80} alt='area' layout='responsive' />
                    </div>


                </div>
            </div>
            <div className={style.carrer_Training_and_guidance} >
                <p >{`A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs`}</p>
            </div>


            <div className={style.career_main}>
                <div className={style.carrer_Area_of}>
                    <div className={style.carrer_Area_o}>
                        <h3>Area of Work</h3>
                        <h2>Opportunity to work</h2>
                        <h2> with agile teams</h2>
                    </div>
                    <div className={style.carrer_ImageArea_OF_impro}>
                        <Image src={'/career/Group 2931.png'} width={100} height={100} alt='area' layout='responsive' />
                    </div>

                </div>
            </div>


            <div className={style.career_main}>

                <div style={{ marginTop: '30px' }} className={style.carrer_Area_of}>
                    <div className={style.carrer_Area_Training_and_guidance}>

                        <h2>{`Hear from our Team's`}</h2>
                        <p className={style.FindinLinkedin}>Find us on Linkedin <span style={{ color: 'teal' }}>{`@Phoneo`}</span></p>
                    </div>



                </div>
            </div>
            <div className={style.carrer_ImageArea_OF_impro}>
                <Image src={'/career/Group 2917.png'} width={100} height={40} alt='area' layout='responsive' />
            </div>
        </>
    )
}

export default Career