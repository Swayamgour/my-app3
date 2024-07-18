import React from 'react'
import style from '@/styles/Main.module.css'
import {BsCurrencyRupee} from 'react-icons/bs'
import { NextPage } from 'next';
import Image from 'next/legacy/image';


interface Props {
  key: number;
}

const PopularCard: NextPage<Props> = (props) => {
  return (
    <div key={props.key} className={style.p_card}>

        <div className={style.best_price}>Best Price!</div>
        <div className={style.thum}>
          <Image layout='responsive' width={100} height={130} src="/images/phones.jpg" alt="" />
        </div>
        <div className={style.card_details}>
              <p className={style.card_variant}>
              As amazing as ever.
              </p>
              <h3 className={style.card_brand}>iPhone 13 Pro Max</h3>
              <p className={style.card_price}><BsCurrencyRupee/>49000</p>
              <button className={style.card_btn}>Buy Now</button>
        </div>
    </div>
  )
}

export default PopularCard