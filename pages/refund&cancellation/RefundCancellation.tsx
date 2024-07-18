import React, { useEffect, useState } from 'react'
import style from "@/styles/PrivacyPolicy.module.css"
import Image from 'next/legacy/image';


const RefundCancellation = () => {

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
          <div className={style.privacy_policy_text}>Refund & cancellation</div>
          {/* <div className={style.privacy_policy_des}>Last updated: [21/08/2023]</div> */}


        </div>
      </div>

      <div className={style.privacy_policy_section}>
        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Refund Eligibility</div>
          <div className={style.privacy_policy_box_des}>
            <p>{`Explaining under what circumstances a customer can request a refund, such as if the phone has significant defects that were not disclosed, or if it doesn't match the description provided.`}</p>
          </div>
        </div>
        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Cancellations</div>
          <div className={style.privacy_policy_box_des}>
            <p>{`Detailing the process for canceling an order before it's shipped, along with any associated fees or conditions.`}</p>
          </div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Return Process</div>
          <div className={style.privacy_policy_box_des}>
            <p>{`Providing step-by-step instructions on how customers should initiate a return, including the timeframe within which they can do so after receiving the phone.`}</p>
          </div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Refund Types</div>
          <div className={style.privacy_policy_box_des}>
            <p>Explaining whether refunds are provided in the form of store credit, original payment method, or another form.</p>
          </div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Condition of the Phone</div>
          <div className={style.privacy_policy_box_des}>{`Specifying the condition the phone must be in for a return or refund, and any deductions that might apply for damage beyond normal wear and tear.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Shipping Costs</div>
          <div className={style.privacy_policy_box_des}>
            <p>Indicating who is responsible for return shipping costs - the customer or the seller.</p>
          </div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Documentation</div>
          <div className={style.privacy_policy_box_des}>{`Outlining any documentation or proof required to initiate a return or refund request, such as photos of the phone or its packaging.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Timelines</div>
          <div className={style.privacy_policy_box_des}>{`Stating the timeframes within which the customer can expect to receive their refund after the return is approved.`}</div>
        </div>


        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Exceptions</div>
          <div className={style.privacy_policy_box_des}>{`Listing any exceptional cases or circumstances where refunds or returns might not be applicable.`}</div>
        </div>

        <div className={style.privacy_policy_box}>
          <div className={style.privacy_policy_box_title}>Contact Us</div>
          <div className={style.privacy_policy_box_des}>{`If you have any questions about this Privacy Policy, please contact us at [Support@phoneo.in].`}</div>
        </div>

      </div>

    </div>
  )
}

export default RefundCancellation