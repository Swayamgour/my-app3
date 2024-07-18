import React from "react";
import Image from "next/image";
import style from '@/styles/Help.module.css';

function Help() {
    return (
        <>
            <div className={style.mainCaintainer}>
                <div className={style.helpimage}>
                    <Image src='/help/help.webp' alt='help Poster' width={100} height={100} layout='responsive' />
                </div>

                <h3>
                    {`  Hi. How can we help you?`}
                </h3>

                <p>
                    {` The best platform to sell your good and also you can buy any items directly from the nearest shop. The best platform.`}
                </p>

                <p>
                    {`  Trust and Safety`}
                </p>

                <p>
                    {` Conducting Safe Transactions`}
                </p>

                <p>
                    {` Fake PayTM App fraud`}
                </p>

                <p>
                    {`  Payment Scheme fraud - Pay first and get double`}
                </p>

                <p>
                    {`  Fraudsters may pose as defense personnel`}
                </p>

                <p>
                    {` I shared my Phoneo password/OTP with someone QR Code Scams`}
                </p>

                <p>
                    {`   Payment Link Scams - UPI FAQ's`}
                </p>

            </div>
        </>
    )
}

export default Help;
