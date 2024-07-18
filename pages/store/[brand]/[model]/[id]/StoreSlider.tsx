import React, { useEffect, useState } from 'react'
import style from '@/styles/Store.module.css'
import styles from '@/styles/Home.module.css'
import Image from 'next/legacy/image'
import { BsHeart } from "react-icons/bs";
import { PiShareNetwork } from "react-icons/pi";
import styled from 'styled-components';
import { Carousel } from 'antd';
import { useGetAllMobilesQuery, useGetMobileDetailQuery, useGetProductNameQuery } from '@/Redux/productsReducer';
import { useRouter } from 'next/router';
import StoreOption from './StoreOption';
import StorePhoneDetails from './StorePhoneDetails';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import HomeBestSeller from '@/Component/mobile/HomeBestSeller';

interface MDType {
  mobdata?:
  {
    data?: PhoneImageData | undefined;


  };
}

interface PhoneImageData {
  brand?: string;
  dimension?: string;
  os?: string;
  phone_images?: any;
  phone_name?: string;
  release_date?: string;
  specifications?: MDspecification[];
  storage?: string;
  thumbnail?: string;
  // images:string[]
}
interface MDspecification {
  title?: string;
  specs?: specsType[];
}
interface specsType {
  key?: string;
  val?: string[];
}



const StoreSlider = ({ tokenForLocal, setOpenDialer }: any) => {
  // console.log(filterMobile);

  const router = useRouter()
  // console.log(router.query.id);
  const [Skip, setSkip] = useState(true)
  const [More, setMore] = useState(false)
  const [BottomNav, setBottomNav] = useState<any>(1)
  const [BottomNavbar, setBottomNavbar] = useState('')
  const [CompareButton, setCompareButton] = useState(false)
  const [mobileDetail, setMobileDetail] = useState<any>([])
  const [MD, setMD] = useState<MDType>({ mobdata: { data: { phone_images: [], specifications: [] } } })

  useEffect(() => {
    if (router.query.brand !== undefined) { setSkip(false) } else { setSkip(true) };
  }, [router.query.brand]);


  // rtk 


  const { data, isSuccess } = useGetAllMobilesQuery('')
  let filterMobile = data && data?.filter((e: any) => e?.id == router.query.id?.toString())
  const { data: mobileData, isSuccess: success } = useGetProductNameQuery({ phonemodel: router.query.brand, phone: router.query.model }, { skip: Skip })


  useEffect(() => {
    if (success) {
      const MD: any = { mobdata: {} }
      let specifications = []
      for (let key in mobileData) {
        MD.mobdata = mobileData[key]
        setMobileDetail(mobileData[key].data?.specifications)
      }
      setMD(MD)
    }
  }, [success, mobileData])

  // console.log(mobileDetail);
  const slider = success && MD && MD.mobdata?.data?.phone_images

  // console.log(slider);


  const CarouselWrapper = styled(Carousel)`
.slick-dots li{
  width:fit-content;
  margin-inline:2px;
}
.slick-dots li button {
background: var(--massiveGreenHigh);
  width:4px;
  height:4px;
}
.slick-dots li.slick-active button {
  width:20px;
  height:4px;
  margin-inline:2px;
  background: var(--massiveLightGreen);
}
.slick-dots-bottom{
bottom:-10px;
}
`;


  function GetDisplay(data: any) {
    const D1 = data && data[3]?.specs[1]?.val.toString().split(",")
    let D2: any = '';
    if (D1?.length > 1) {
      D2 = D1 && D1[1]?.split("(")
    } else {
      D2 = [''];
    }
    const D3 = data[3]?.specs[0]?.val.toString().split(",")
    if (D1?.length > 1) {
      return (D1[0] + " (" + D2[0] + " ) " + D3[0]);
    } else {
      return (D1 && D1[0] + " " + D3[0]);
    }

  }

  const handelClickforAdd = () => {
    const model: any = localStorage.getItem('model1')
    const company: any = localStorage.getItem('company')
    if (model && company) {
      if (router.query.brand) {
        let brand: any = router.query.brand
        let model1: any = router.query.model
        localStorage.setItem('company2', brand);
        localStorage.setItem('model2', model1);
        setBottomNav(BottomNav + 1)
      }
    } else {
      if (router.query.brand) {
        let brand: any = router.query.brand
        let model1: any = router.query.model
        localStorage.setItem('company', brand);
        localStorage.setItem('model1', model1);
        setBottomNav(BottomNav + 1)
      }
    }
  }


  useEffect(() => {
    const model: any = localStorage.getItem('model1')
    const model2: any = localStorage.getItem('model2')

    if (model !== null && model2 !== null) {
      setCompareButton(true)
    } else {
      setCompareButton(false)
    }

    setBottomNavbar(model || model2)

  }, [BottomNav])


  const SecondAddMobile = () => {
    router.push('/Compare')
  }
  const handelClear = () => {
    localStorage.removeItem('company');
    localStorage.removeItem('model1');
    setBottomNav(BottomNav + 1)
  }
  const handelClearTwo = () => {
    localStorage.removeItem('company2');
    localStorage.removeItem('model2');
    setBottomNav(BottomNav + 1)
  }
  const AllClear = () => {
    localStorage.removeItem('company2');
    localStorage.removeItem('model2');
    localStorage.removeItem('company');
    localStorage.removeItem('model1');
    setBottomNav(BottomNav + 1)
  }



  return (
    <>
      {success &&
        <>
          <div className={style.MobileDetail}>

            <div className={style.thumbnail_box}>
              {/* <div className={style.item_like_share}>
                <span className={style.item_like_share_icon}><BsHeart /></span>
                <span className={style.item_like_share_icon}><PiShareNetwork /></span>
              </div> */}

              <div className={style.thumbnail_slider_box}>
                <CarouselWrapper className={style.slider_carousel}>
                  {slider?.map((i: any, index: any) => (
                    // <div key={index} className={style.slider_object}>
                    <div key={index} className={style.slider_object_img}>
                      <Image layout='responsive' objectFit='contain' width={100} height={100} src={i} alt="" />
                      {/* </div> */}
                    </div>
                  ))}
                </CarouselWrapper>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '7px 20px' }}>
                <button className={style.CompareButtton} onClick={handelClickforAdd}>Add to Compare</button>
              </div>
              <StoreOption />
            </div>

            <div className={style.mobile_Detail_two}>
              <StorePhoneDetails MD={MD} filterMobile={filterMobile} mobileDetail={mobileDetail} tokenForLocal={tokenForLocal} setOpenDialer={setOpenDialer} />
            </div>

          </div>

          <div className={style.NotesSection}>

            <h3>Notes: </h3>
            <p>{` A paragraph is a group of sentences or a single sentence that forms a unit. It is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). The length and appearance of a paragraph do not determine`}</p>
          </div>

          <div className={style.Highlight_Section}>
            <div className={style.HigrLightLeftdection}>

            </div>
            <div className={style.HigrLightRightdection}>
              <h3>Highlights</h3>

              <ul className={style.ul}>
                <li>{filterMobile && filterMobile[0]?.Variant}</li>
                <li>{mobileDetail ? GetDisplay(mobileDetail) : ''}</li>
                <li>{mobileDetail[11]?.specs[0]?.val[0] && mobileDetail[11]?.specs[0]?.val[0]}</li>
                <li>{mobileDetail[6]?.specs[0].val[0].split(',')[0] && mobileDetail[6]?.specs[0].val[0].split(',')[0]} {`|`}
                  {mobileDetail[7]?.specs[0].val[0].split(',')[0]}
                </li>
                <li>{mobileDetail[4]?.specs[1]?.val[0] && mobileDetail[4]?.specs[1]?.val[0]}</li>
              </ul>

              <div className={style.highlight_more_details_for_} onClick={() => setMore(!More)}>
                {More ?
                  <>

                    <span className={style.see_more_icon_for}><MdOutlineKeyboardArrowUp /></span>
                    <span>See Less</span>

                  </>
                  :
                  <>
                    <span className={style.see_more_icon_for}><MdOutlineKeyboardArrowDown /></span>
                    <span>See More</span>
                  </>}
              </div>

              {More && <div className={style.more_detail_list_bo} onClick={() => setMore(false)}>

                <div className={style.more_detail_lis}>
                  {mobileDetail && mobileDetail?.map((Pdata: { title: any; specs: any[]; }, i: any) => (
                    <div className={style.more_detail_lis} key={i}>
                      <div className={style.more_detail_list_titl}>{Pdata.title}</div>
                      <ul className={style.spec}>
                        {Pdata?.specs?.map((spec: { key: any; val: any[]; }, j: any) => (
                          <li className={style.more_detail_list_title_de} key={j}>
                            <div className={style.more_detail_list_title_des_titl}>{spec?.key}{' :'}</div>
                            <div className={style.more_detail_list_title_des_tex}>{spec?.val[0]}</div>
                          </li>
                        ))}
                      </ul>


                    </div>
                  ))}
                </div>


              </div>
              }


            </div>

          </div>
          <div className={style.Phone_Detail_Main_selePrice}>

            <HomeBestSeller />
          </div>


        </>

      }
      <div className={style.Phone_Detail_Main_selePrice}>
        <div className={styles.suggest}>
          <div className={styles.suggest_phones_box}>
            {Array.apply(null, Array(4)).map((i, index) => (
              <div key={index} className={styles.suggest_phone}>
                <div className={styles.suggest_img}>
                  <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
                </div>
                <div className={styles.suggest_phone_brand}>Apple</div>
                <div className={styles.suggest_phone_offer}>Up to 55% Off</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.suggest}>
          <div className={styles.suggest_phones_box}>
            {Array.apply(null, Array(4)).map((i, index) => (
              <div key={index} className={styles.suggest_phone}>
                <div className={styles.suggest_img}>
                  <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
                </div>
                <div className={styles.suggest_phone_brand}>Apple</div>
                <div className={styles.suggest_phone_offer}>Up to 55% Off</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className={style.youMightbeInterested}>You might be interested in</h2>
        <div className={style.cardforinterested}>
          <div className={style.cardforinterestedCenter}>
            <div className={style.cardforinterestedCard}>
              <div className={style.interested_img}>
                <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
              </div>
              <div>
                <h3 className={style.interested_Phone_name}>Apple iPhone 12 Pro Max</h3>
                <p className={style.interested_Phone_off}>51% off</p>
              </div>
            </div>

            <div className={style.cardforinterestedCard}>
              <div className={style.interested_img}>
                <Image layout='responsive' width={70} height={100} src={'/images/phones.jpg'} alt="" />
              </div>
              <div>
                <h3 className={style.interested_Phone_name}>Apple iPhone 12 Pro Max</h3>
                <p className={style.interested_Phone_off}>51% off</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.button_Cantainer_Main}>
        {isSuccess && BottomNavbar &&
          <div className={style.BottomNav}>
            <button>{localStorage.getItem('company') ? `${localStorage.getItem('company')} ${localStorage.getItem('model1')}` : <span onClick={SecondAddMobile}>Add to Compare</span>} <span onClick={handelClear}>{localStorage.getItem('company') ? 'X' : ''} </span>
            </button>

            <button >
              <span > {localStorage.getItem('company2') ? `${localStorage.getItem('company2')} ${localStorage.getItem('model2')}` : <span onClick={SecondAddMobile}>Add to Compare</span>} </span>
              <span onClick={handelClearTwo}>{localStorage.getItem('company2') ? 'X' : ''}</span> </button>
          </div>
        }
        {isSuccess && CompareButton && <div className={style.CompareButton}>
          <p onClick={SecondAddMobile}>Compare Now </p>
          <p onClick={AllClear}>X </p>

        </div>}
      </div>



    </>
  )
}

export default StoreSlider