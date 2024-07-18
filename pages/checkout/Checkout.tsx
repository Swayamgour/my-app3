import React from 'react';
import style from '@/styles/Checkout.module.css'
import Image from 'next/legacy/image';


const Checkout = () => {
  return (
    <div className={style.chechout}>
            <div className={style.chechout_title}>
                <div className={style.chechout_img}>
                <Image layout='responsive' width={100} height={10} src='/images/bg_temp.png' alt='' />
                </div>
                <div className={style.chechout_name}>Order Summary</div>
            </div>

            <div className={style.checkout_box}>
                <div className={style.check_box}>
                    <h3 className={style.check_box_title}>Shipping Information</h3>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Shipping Address :</h3>
                        <div className={style.check_box_format_value}>{`[Customer's Shipping Address]`}</div>
                    </div>
                </div>
                <div className={style.check_box}>
                    <h3 className={style.check_box_title}>Billing Information</h3>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Billing Address :</h3>
                        <div className={style.check_box_format_value}>{`[Customer's Billing Address]`}</div>
                    </div>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Payment Method :</h3>
                        <div className={style.check_box_format_value}>{`[Payment Method Selected]`}</div>
                    </div>
                </div>
                <div className={style.check_box}>
                    <h3 className={style.check_box_title}>Order Summary</h3>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Subtotal :</h3>
                        <div className={style.check_box_format_value}>{`[Subtotal]`}</div>
                    </div>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Shipping :</h3>
                        <div className={style.check_box_format_value}>{`[Shipping Fee]`}</div>
                    </div>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Tax :</h3>
                        <div className={style.check_box_format_value}>{`[Tax]`}</div>
                    </div>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Total Amount :</h3>
                        <div className={style.check_box_format_value}>{`[Total Amount]`}</div>
                    </div>
                </div>

                <div className={style.check_box}>
                    <h3 className={style.check_box_title}>Payment Details</h3>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Payment Method :</h3>
                        <div className={style.check_box_format_value}>{`[Payment Method Selected]`}</div>
                    </div>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Card Number :</h3>
                        <div className={style.check_box_format_value}>{`[Last Four Digits of Card Number]`}</div>
                    </div>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Order Notes :</h3>
                        <div className={style.check_box_format_value}>{`[Optional field for customers to provide any additional notes]`}</div>
                    </div>
                    <div className={style.check_box_format}>
                        <h3 className={style.check_box_format_title}>Place Order Button :</h3>
                        <div className={style.check_box_format_value}>{`[Place Order Button]`}</div>
                    </div>
                </div>

                <div className={style.check_box}>
                    <h3 className={style.check_box_title}>Cancellation/Refund Policy</h3>
                    <div className={style.check_box_value}>{`Please review our [Cancellation/Refund Policy link] before proceeding with your order.
By clicking "Place Order," you confirm that you have read and agree to our [Terms and Conditions link] and [Privacy Policy link].`}</div>
                </div>
            </div>
    </div>
  )
}

export default Checkout