import React, { useEffect, useState } from 'react';
import style from "@/styles/PrivacyPolicy.module.css"
import Image from 'next/legacy/image';

const PrivacyPolicy = () => {

  const [Theme,setTheme] = useState(false);

  useEffect(()=>{
    const mode = window.matchMedia('(max-width:768px)');
    if(mode.matches){
      setTheme(true);
    }
  },[])

  return (
    <div className={style.privacy_policy}>
      <div className={style.privacy_policy_title}>
        <div className={style.privacy_policy_img}>
          <Image layout='responsive' width={100} height={Theme?20:10} src='/Subtraction 2.png' alt=''  />
        </div>
        <div className={style.privacy_policy_title_bom}>
          <div className={style.privacy_policy_text}>privacy & policy</div>
          

        </div>
      </div>

      <div className={style.privacy_policy_section}>
       
        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Information We Collect</div>
          <div className={style.privacy_policy_box_des}>
            <p>{`We may collect various types of personal and financial information when you use our services, including but not limited to:`}</p>
            <p>Name, contact details, and identification information.</p>
            <p>Financial information such as bank account details, credit/debit card information.</p>
            <p>Transaction history and account activity.</p>
          </div>
        </div>
        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Use of Information</div>
          <div className={style.privacy_policy_box_des}>
            <p>We collect and process your personal information for the following purposes:</p>
            <p>Providing and managing financial services.</p>
            <p>Conducting transactions and processing payments.</p>
            <p>Complying with legal and regulatory obligations as mandated by RBI.</p>
            <p>Preventing fraud, money laundering, and other financial crimes.</p>
            <p>{`While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, postal address, and phone number ("Personal Information").`}</p>
          </div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Log Data</div>
          <div className={style.privacy_policy_box_des}>
            <p>{`Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.`}</p>
          </div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Data Sharing</div>
          <div className={style.privacy_policy_box_des}>
            <p>We may share your personal information with:</p>
            <p>Regulatory authorities, including RBI, as required by law.</p>
            <p>Third-party service providers who assist us in providing financial services.</p>
          </div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Data Security</div>
          <div className={style.privacy_policy_box_des}>{`We are committed to safeguarding your personal information and have implemented appropriate security measures to protect it from unauthorized access, loss, or misuse.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Your Rights</div>
          <div className={style.privacy_policy_box_des}>
            <p>You have the right to:</p>
            <p>Access and rectify your personal information.</p>
            <p>Object to processing for legitimate reasons.</p>
            <p>Withdraw your consent (if applicable).</p>
            <p>Lodge complaints with the appropriate regulatory authorities.</p>
          </div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Cookies</div>
          <div className={style.privacy_policy_box_des}>{`Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Security</div>
          <div className={style.privacy_policy_box_des}>{`The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.`}</div>
        </div>


        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Changes to Privacy Policy</div>
          <div className={style.privacy_policy_box_des}>{`We reserve the right to modify this Privacy Policy to comply with changing regulations or to reflect updates in our practices. Any changes will be updated on our website and will be effective from the date of posting.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Contact Us</div>
          <div className={style.privacy_policy_box_des}>{`If you have any questions about this Privacy Policy, please contact us at [Support@phoneo.in].`}</div>
        </div>

      </div>

    </div>
  )
}

export default PrivacyPolicy