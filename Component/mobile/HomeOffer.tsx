import React from 'react'
import style from '@/styles/Home.module.css'


const HomeOffer = () => {

    // function formatNumber(number: number): string {
    //     const numberString:any = number.toString().split('');
    //     const length = numberString.length;
      
    //     // Check if the number has more than 3 digits
    //     if (length > 3) {
    //       const formattedNumber = [];
    //       let count = 0;
      
    //       // Iterate through the number from right to left
    //       for (let i = length - 1; i >= 0; i--) {
    //         count++;
    //         formattedNumber.unshift(numberString[i]);
      
    //         // Insert comma after every two digits, except for the last three digits
    //         if (count === 2 && i !== 0 && i !== 1) {
    //           formattedNumber.unshift(',');
    //           count = 0;
    //         }
    //       }
      
    //       return formattedNumber.join('');
    //     } else {
    //       // No formatting needed for numbers with 3 or fewer digits
    //       return numberString;
    //     }
    //   }

    //   console.log(formatNumber(1000000))


  return (
    <div className={style.home_offer}>
        <div className={style.home_offer_text}>Lorem ipsum dolor sit amet consectetur.</div>
        <div className={style.home_offer_price}>₹90000</div>
    </div>
  )
}

export default HomeOffer