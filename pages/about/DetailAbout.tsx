import React, { useState } from "react";
import style from '@/styles/About.module.css'
import Image from "next/image";
import { BsPlus } from 'react-icons/bs'

function DetailAbout() {
    const [more1, less1] = useState(false);
    const [more2, less2] = useState(false);
    const [more3, less3] = useState(false);
    const [more4, less4] = useState(false);
    const [more5, less5] = useState(false);
    


   
    return (
        <>
            <div >
                {/* <Nav /> */}
                <div>
                    <Image alt='About image' src='/Abou/Group 2678.png' width={100} height={100} layout="responsive" />
                </div>
                <div className={style.About_WhatIsCantaner}>
                    <h1 className={style.About_WhatisPhoneo}>
                        What is Phoneo?
                    </h1>
                    <p className={more2 ? style.features_box_des2 : style.features_box_des12} onClick={() => less2(!more2)} style={{ marginTop: '20px', width: '85%', fontFamily: 'Comfortaa', lineHeight: '25px' }}>{`your premier destination for second-hand phone sales and digital business management. At Phoneo, we empower second-hand phone sellers to reach their target customers. With our platform, sellers can effortlessly create personalized websites to showcase their products and reach their target audience effectively. Whether you're buying or selling, look no further than Phoneo.
                                 Phoneo is more than just a platform – it's a commitment to excellence. That's why we're always striving to improve and evolve,  ensuring that Phoneo remains the best choice for second-hand phone sellers and help them achieve their goals in the competitive digital landscape.`}</p>

                    {!more2 ? <button className={style.features_btn} onClick={() => less2(true)}> <BsPlus className={style.features_btn_icon} /> read more</button> : <button className={style.features_btn} onClick={() => less2(false)}> <BsPlus className={style.features_btn_icon} /> read less</button>}
                    {/* </div> */}
                </div>

                <div className={style.hrTag} ></div>
                <div className={style.AboutContaner}>
                    <div>
                        <h1>OUR MISSION    </h1>
                        <p
                            className={more1 ? style.features_box_des2 : style.features_box_des12} onClick={() => less1(!more2)}
                        >{` At Phoneo, our mission is to drive success for second-hand phone sellers by providing them with an innovative online platform and management software, with cutting-edge digital tools and a personalized online platform to efficiently manage their businesses . With over 500 satisfied customers already benefiting from Phoneo, our aim is to amplify their success by enabling them to generate 10 times more sales and expand their reach exponentially`} </p>

                        {/* <div className={style.Btn}> */}
                        {!more1 ? <button className={style.features_btn} onClick={() => less1(true)}> <BsPlus className={style.features_btn_icon} /> read more</button> : <button className={style.features_btn} onClick={() => less1(false)}> <BsPlus className={style.features_btn_icon} /> read less</button>}
                        {/* </div> */}

                        <h1 style={{ marginTop: '30px' }}>OUR VISSION </h1>
                        <p
                            className={more5 ? style.features_box_des2 : style.features_box_des12} onClick={() => less5(!more2)}
                        >{` At Phoneo, our mission is to drive success for second-hand phone sellers by providing them with an innovative online platform and management software, with cutting-edge digital tools and a personalized online platform to efficiently manage their businesses . With over 500 satisfied customers already benefiting from Phoneo, our aim is to amplify their success by enabling them to generate 10 times more sales and expand their reach exponentially`} </p>

                        {/* <div className={style.Btn}> */}
                        {!more5 ? <button className={style.features_btn} onClick={() => less5(true)}> <BsPlus className={style.features_btn_icon} /> read more</button> : <button className={style.features_btn} onClick={() => less5(false)}> <BsPlus className={style.features_btn_icon} /> read less</button>}
                        {/* </div> */}

                    </div>
                    <div>
                        <Image alt='About image' src='/Abou/Group 2698.png' width={100} height={100} layout="responsive" />

                    </div>
                    {/* <div className={style.WebButton}> */}

                    {/* <button className={style.WebButton}>Explore More</button> */}
                    {/* {!more2 ? <button className={style.features_btn} onClick={() => less2(true)}> <BsPlus className={style.features_btn_icon} /> read more</button> : <button className={style.features_btn} onClick={() => less2(false)}> <BsPlus className={style.features_btn_icon} /> read less</button>} */}
                    {/* </div> */}


                </div>


                <div className={style.AboutContaner1}>
                    <div>
                        <Image alt='About image' src='/Abou/Group 2675.png' width={100} height={100} layout="responsive" />
                    </div>

                    <div className={style.OurMisionCon} >
                        <h1>JOIN OUR COMMUNITY
                        </h1>
                        <p
                            className={more3 ? style.features_box_des2 : style.features_box_des12} onClick={() => less3(!more3)}
                        > {`At Phoneo, we're more than just a software company – we're a community who really care about your success and want to support you every step of the way of success. By becoming a part of our community, you're not just gaining access to cutting-edge software; you're becoming part of a network that fosters growth, collaboration, and shared success. Step into the vibrant world of Phoneo, where sellers unite to redefine success in the second-hand phone market, let's embark on a journey of growth, opportunity, and endless possibilities!. Join us today and be part of a community that celebrates success together! `} </p>
                        <div>
                            {!more3 ? <button className={style.features_btn} onClick={() => less3(true)}> <BsPlus className={style.features_btn_icon} /> read more</button> : <button className={style.features_btn} onClick={() => less3(false)}> <BsPlus className={style.features_btn_icon} /> read less</button>}
                        </div>


                        <h1 style={{ marginTop: '30px' }}>SUPPORTIVE ENVOIRMENT
                        </h1>
                        <p
                            className={more4 ? style.features_box_des2 : style.features_box_des12} onClick={() => less4(!more3)}
                        > {`Whether you're a seasoned seller or just starting out, our community is here to support you every step of the way. Ask questions, seek advice, and share your successes and challenges in a supportive and welcoming environment. `} </p>
                        {!more4 ? <button className={style.features_btn} onClick={() => less4(true)}> <BsPlus className={style.features_btn_icon} /> read more</button> : <button className={style.features_btn} onClick={() => less4(false)}> <BsPlus className={style.features_btn_icon} /> read less</button>}



                    </div>



                </div>

                <div className={style.about_imageSection}>
                    <Image alt='About image' src='/Abou/Group 2699.png' width={100} height={100} layout="responsive" />
                </div>
                <div className={style.about_imageSectioforwindow}>
                    <Image alt='About image' src='/Abou/Group 2700.png' width={100} height={100} layout="responsive" />
                </div>

                {/* <div className={style.About_Card_}>
                    <div className={style.About_Card_One}>


                        {array.map((e: any, index: any) => {
                            return (
                                <>
                                    <div key={index}>
                                        <Image src={e?.img} width={40} height={40} alt="icons" />
                                        <p >{e?.con}</p>
                                        <h2 >{e?.con2}</h2>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div> */}

                {/* <div className={style.About_FeedBack}>
                    <h1>Feedback and Review</h1>
                </div> */}
                {/* <div className={style.About_FeedBack_Card}>
                    <Image alt='About image' src='/Abou/Group 2676.jpg' width={100} height={100} layout="responsive" />
                    <div style={{ display: 'flex' }} className={style.AboutCardProfile}>
                        <div >
                            <Image alt='About image' src='/Abou/Untitled-1.png' width={200} height={200} layout="responsive" />
                        </div>
                        <div>
                            <Image alt='About image' src='/Abou/Untitled-1.png' width={200} height={200} layout="responsive" />
                        </div>
                        <div>
                            <Image alt='About image' src='/Abou/Untitled-1.png' width={200} height={200} layout="responsive" />
                        </div>

                    </div>
                </div>
 */}


                {/* <div className={style.About_FeedBack_CardTwo}>
                    <Image alt='About image' src='/Abou/Group 2677.jpg' width={100} height={100} layout="responsive" />
                    <div className={style.AboutCardProfileTwo}>
                        <div >
                            <Image alt='About image' src='/Abou/Untitled-1.png' width={200} height={200} layout="responsive" />
                        </div>
                        <div>
                            <Image alt='About image' src='/Abou/Untitled-1.png' width={200} height={200} layout="responsive" />
                        </div>
                        <div>
                            <Image alt='About image' src='/Abou/Untitled-1.png' width={200} height={200} layout="responsive" />
                        </div>

                    </div>
                </div> */}


            </div>
            {/* <Footer_Two /> */}
        </>
    )
}

export default DetailAbout;