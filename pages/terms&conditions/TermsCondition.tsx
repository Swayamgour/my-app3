import React, { useEffect, useState } from 'react'
import style from "@/styles/PrivacyPolicy.module.css"
import Image from 'next/legacy/image';



const TermsCondition = () => {

  const [Theme, setTheme] = useState(false);

  useEffect(() => {
    const mode = window.matchMedia('(max-width:768px)');
    if (mode.matches) {
      setTheme(true);
    }
  }, [])

  return (
    <div className={style.privacy_policy}>
      <div className={style.privacy_policy_title}>
        <div className={style.privacy_policy_img}>
          <Image layout='responsive' width={100} height={Theme ? 20 : 10} src='/Subtraction 2.png' alt='' />
        </div>
        <div className={style.privacy_policy_title_bom}>
          <div className={style.privacy_policy_text}>Terms & Conditions</div>
          {/* <div className={style.privacy_policy_des}>Last updated: [21/08/2023]</div> */}


        </div>
      </div>

      <div className={style.privacy_policy_section}>
        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_description}>{`Welcome to Phoneo ("us", "we", or "our"). By accessing and using our services, you agree to abide by these terms and conditions, as well as any applicable laws and regulations.`}</div>
        </div>
        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Services</div>
          <div className={style.privacy_policy_box_des}>{`Our services include [List of services provided]. These services are provided in accordance with the regulations set forth by the Reserve Bank of India (RBI).`}</div>
        </div>
        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>User Responsibilities</div>
          <div className={style.privacy_policy_box_des}>{`You agree to provide accurate and up-to-date information when using our services.
You are responsible for maintaining the security of your account credentials and ensuring their confidentiality.
You agree not to engage in any illegal or fraudulent activities while using our services.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Privacy and Data Protection</div>
          <div className={style.privacy_policy_box_des}>{`We are committed to protecting your privacy and personal information. Our privacy policy outlines how we collect, use, and protect your data in accordance with RBI guidelines and applicable data protection laws.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Compliance with RBI Regulations</div>
          <div className={style.privacy_policy_box_des}>{`We operate in compliance with the regulations set by the Reserve Bank of India. Our services are subject to RBI guidelines, and we may need to collect and share information as required by these regulations.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Intellectual Property</div>
          <div className={style.privacy_policy_box_des}>{`All content and intellectual property on our website and associated platforms belong to us. You agree not to reproduce, distribute, or use our intellectual property without our consent.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Limitation of Liability:</div>
          <div className={style.privacy_policy_box_des}>{`We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our services.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Dispute Resolution</div>
          <div className={style.privacy_policy_box_des}>{`Any disputes arising from the use of our services shall be subject to the laws and regulations of India. You agree to resolve disputes amicably and through mediation or arbitration if necessary.`}</div>
        </div>


        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Changes to Terms and Conditions</div>
          <div className={style.privacy_policy_box_des}>{`We reserve the right to modify these terms and conditions to align with regulatory changes or to reflect updates in our practices. Any changes will be updated on our website and will be effective from the date of posting.`}</div>
        </div>

      </div>

    </div>
  )
}

export default TermsCondition