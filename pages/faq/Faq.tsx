import React from 'react'
import style from '@/styles/Faq.module.css'
import {IoIosSend} from 'react-icons/io'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";


const Faq = () => {
  return (
    <div className={style.faq}>
        <div className={style.faq_title}>
          <Image src='/images/Group 2932.png' alt='Faq Image ' width={100} height={120} className={style.fawtag} layout='responsive'/>
        </div>

        <div className={style.ask_to_help}>
            <div className={style.ask_to_help_title}>Hi! How can we help you?</div>
            <div className={style.ask_box}>
                <div className={style.ask}>
                <input type="text" className={style.ask_input} placeholder='Ask a question...'/>
                </div>
                <CiSearch className={style.ask_icon}/>
            </div>
        </div>



        <div className={style.help}>
            <div className={style.help_title}>Help & Feedback</div>
            <div className={style.feedback}>
                <textarea className={style.feedback_input} placeholder='Message...'></textarea>
            </div>
            <button className={style.feedback_btn}>Submit</button>
        </div>
        
    </div>
  )
}

export default Faq