import React, { useEffect, useState } from "react";
import style from '@/styles/Compare.module.css';
import { BsArrowRight } from "react-icons/bs";
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import Image from "next/image";
import { CiHardDrive } from "react-icons/ci";
import { PiArrowsInLineVerticalThin, PiBatteryChargingVerticalThin, PiCameraRotateThin, PiCameraThin, PiCpuThin, PiDeviceMobileCameraThin, PiScalesThin } from "react-icons/pi";
import ReviewBar from "@/Component/ReviewBar";
import Navbar from "./Navbar";
import { useGetMobileModelsQuery, useGetProductNameQuery } from "@/Redux/productsReducer";
// useGetMobileModelsQuery
import { useRouter } from "next/router";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Company from '@/public/Company.json';
import ModileDetail from "@/Component/ModileDetail";




function Compare() {
  // const percentage = 66;
  const [phone, setPhone] = useState<any>('')
  const [phonemodel, setPhonemodel] = useState('')
  const [phone2, setPhone2] = useState('')
  const [phonemodel2, setPhonemodel2] = useState('')
  const [FirstModDetail, setFirstModDEtail] = useState<any>('')
  const [FirstModDetail2, setFirstModDEtail2] = useState<any>('')
  const [CompanyInput, setCompanyInput] = useState<any>('')
  const [ModelInput, setModelInput] = useState('')
  const [ModelInput2, setModelInput2] = useState('')
  const [Count, setCount] = useState<any>(1)

  useEffect(() => {
    const phone: any = localStorage.getItem('company')
    const model: any = localStorage.getItem('model1')
    const phone2: any = localStorage.getItem('company2')
    const model2: any = localStorage.getItem('model2')
    setPhonemodel(phone)
    setPhone(model)
    setPhonemodel2(phone2)
    setPhone2(model2)

  }, [Count])



  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(Count + 1)
    }, 500); // Delay of 0.5 seconds

    return () => {
      clearTimeout(timerId); // Clear the timeout on unmount
    };
  }, [ModelInput, ModelInput2]);

  const { data, isSuccess } = useGetProductNameQuery({ phone: phone, phonemodel: phonemodel })
  const { data: secondMobile, isSuccess: Iss } = useGetProductNameQuery({ phone: phone2, phonemodel: phonemodel2 })
  const { data: SearchPhone } = useGetMobileModelsQuery(CompanyInput)





  useEffect(() => {

    if (data) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const brand = data[key].data;
          setFirstModDEtail(brand)
          // console.log(brand);
        }
      }
    }
    if (secondMobile) {
      for (const key in secondMobile) {
        if (secondMobile.hasOwnProperty(key)) {
          const brand = secondMobile[key].data;
          setFirstModDEtail2(brand)
          // console.log(brand);
        }
      }
    }
  }, [isSuccess, Iss, Count])




  const array = [
    {
      name: 'realme 11X 5G (Midnight Black...',
      price: '₹ 20,999',
    },
    {
      name: 'realme 11X 5G (Midnight Black...',
      price: '₹ 20,999',
    },
    {
      name: 'realme 11X 5G (Midnight Black...',
      price: '₹ 20,999',
    },
    {
      name: 'realme 11X 5G (Midnight Black...',
      price: '₹ 20,999',
    },
  ]



  const router = useRouter()

  function GetCam(data: any) {
    // // // // //(data[]);
    // console.log(data[]);

    let key = data && data[6]?.specs[0]?.key
    let Skey = data && data[7]?.specs[0]?.key
    let Front = "";
    let Back = "";

    if (Skey === "Single") {
      let Cam1 = data[7]?.specs[0]?.val.toString().split(",")
      Front = Cam1[0]
    }

    if (Skey === "Dual") {
      let Line = data[7]?.specs[0]?.val.toString().split("\n")
      let Cam1 = Line.length < 1 ? null : Line[0].split(",")[0]
      let Cam2 = Line.length < 2 ? null : Line[1].split(",")[0]
      Front = Cam1 + " + " + Cam2
    }

    if (key === "Single") {
      let Cam1 = data[6]?.specs[0]?.val.toString().split(",")
      Back = Cam1[0]
    }

    if (key === "Dual") {
      let Line = data[6]?.specs[0]?.val.toString().split("\n")
      let Cam1 = Line?.length < 1 ? null : Line[0]?.split(",")[0]
      let Cam2 = Line?.length < 2 ? null : Line[1]?.split(",")[0]
      Back = Cam1 + " + " + Cam2
    }

    if (key === "Triple" || key === "Quad") {
      let Line = data[6]?.specs[0].val.toString().split("\n")
      let Cam1 = Line[0]?.split(",")
      let Cam2 = Line[1]?.split(",")
      let Cam3 = Line[2]?.split(",")

      if (Cam3 === undefined) {
        Back = Cam1[0] + " + " + Cam2[0]
      } else {
        Back = Cam1[0] + " + " + Cam2[0] + " + " + Cam3[0]
      }
    }
    return Back
  }

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

  // console.log(phone, data);

  // const handelCompany = (e: any) => {
  //   localStorage.setItem('company', e.target.value)
  //   setCompanyInput(e.target.value);
  // }



  const MobileModel = SearchPhone ? SearchPhone?.brands : []
  const CompanyName = Company?.map((e) => (e?.brand_name))


  return (
    <>
      <Navbar />

      <div className={style.compare_Cain}>

        <p className={style.Smartphones}>Smartphones comparison <BsArrowRight /></p>

        <div className={style.Compare_secondPhone}>
          <div className={style.PhoneCard}>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={CompanyName}
              sx={{ width: '100%', mt: '10px' }}
              onChange={(event: any, newValue: any) => {
                localStorage.setItem('company', newValue)
                setCompanyInput(newValue);
              }}

              renderInput={(params) => <TextField {...params} label="Company" variant="standard" />}
            />


            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={MobileModel}
              sx={{ width: '100%', mt: '10px' }}
              onChange={(event: any, newValue: any) => {
                localStorage.setItem('model1', newValue)
                setModelInput(newValue);
                setCount(Count + 1)
              }}
              renderInput={(params) => <TextField {...params} label="Models" variant="standard" />}
            />

            {FirstModDetail ?
              <>
                <h3 className={style.phone_name}>
                  <p >
                    {FirstModDetail && FirstModDetail?.brand}
                  </p>
                  <p>
                    {FirstModDetail && FirstModDetail?.phone_name}
                  </p>

                </h3>

                <div className={style.phone_images}>
                  <Image src={FirstModDetail && FirstModDetail?.thumbnail} width={100} height={100} alt="phoneImage" layout="responsive" />
                </div>

              </>
              :
              <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>Add Phone</p>
            }
          </div>

          <div className={style.line}>
            <p>VS</p>
          </div>

          <div className={style.PhoneCard}>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={CompanyName}
              sx={{ width: '100%', mt: '10px' }}
              onChange={(event: any, newValue: any) => {
                localStorage.setItem('company2', newValue)
                setCompanyInput(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Company" variant="standard" />}
            />


            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={MobileModel}
              sx={{ width: '100%', mt: '10px' }}
              onChange={(event: any, newValue: any) => {
                localStorage.setItem('model2', newValue)
                setModelInput2(newValue);
                setCount(Count + 1)
              }}
              renderInput={(params) => <TextField {...params} label="Models" variant="standard" />}
            />
            {FirstModDetail2 ?
              <>
                <h3 className={style.phone_name}>
                  <p>
                    {FirstModDetail2 && FirstModDetail2?.brand}
                  </p>
                  <p>
                    {FirstModDetail2 && FirstModDetail2?.phone_name}
                  </p>
                </h3>


                <div className={style.phone_images}>
                  <Image src={FirstModDetail2 && FirstModDetail2?.thumbnail} width={100} height={100} alt="phoneImage" layout="responsive" />
                </div>

              </>
              :
              <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>Add Phone</p>

            }
          </div>
        </div>


        <div className={style.Compare_secondPhone1}>
          {FirstModDetail &&
            <>
              <div className={style.PhoneCard1}>
                <div className={style.highlight}>
                  <div className={style.highlight_des_box}>
                    <div className={style.highlight_des_img}>
                      <CiHardDrive />
                      {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                    </div>
                    <div className={style.highlight_des}>
                      <div className={style.highlight_title}>Rom | Ram</div>
                      <div className={style.highlight_text}>
                        {FirstModDetail && FirstModDetail?.specifications[5].specs[1].val[0].split(',')[0]}
                      </div>
                    </div>
                  </div>
                  <div className={style.highlight_des_box}>
                    <div className={style.highlight_des_img}>
                      <PiCpuThin />
                      {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                    </div>
                    <div className={style.highlight_des}>
                      <div className={style.highlight_title}>Processor</div>
                      <div className={style.highlight_text}> {FirstModDetail && FirstModDetail?.specifications[4]?.specs[1]?.val[0]}</div>
                    </div>
                  </div>

                  <div className={style.highlight_des_box}>
                    <div className={style.highlight_des_img}>
                      <PiCameraRotateThin />
                      {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                    </div>
                    <div className={style.highlight_des}>
                      <div className={style.highlight_title}>Real Camera</div>
                      <div className={style.highlight_text}> {FirstModDetail?.specifications ? GetCam(FirstModDetail?.specifications) : ''}</div>
                    </div>
                  </div>


                  <div className={style.highlight_des_box}>
                    <div className={style.highlight_des_img}>
                      <PiDeviceMobileCameraThin />
                      {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                    </div>
                    <div className={style.highlight_des}>
                      <div className={style.highlight_title}>Display</div>
                      <div className={style.highlight_text}>
                        {FirstModDetail?.specifications ? GetDisplay(FirstModDetail?.specifications) : ''}
                      </div>
                    </div>
                  </div>

                  <div className={style.highlight_des_box}>
                    <div className={style.highlight_des_img}>
                      <PiBatteryChargingVerticalThin />
                      {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                    </div>
                    <div className={style.highlight_des}>
                      <div className={style.highlight_title}>Battery</div>
                      <div className={style.highlight_text}>
                        {/* {'Li-ion 4352 mAh , non-removable'} */}
                        {FirstModDetail && FirstModDetail?.specifications[11]?.specs[0]?.val[0]}
                      </div>
                    </div>
                  </div>


                  <div className={style.highlight_des_box}>
                    <div className={style.highlight_des_img}>
                      <PiCameraThin />
                      {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                    </div>
                    <div className={style.highlight_des}>
                      <div className={style.highlight_title}>Front Camera</div>
                      <div className={style.highlight_text}>
                        {FirstModDetail && FirstModDetail?.specifications[7]?.specs[0].val[0].split(',')[0]}

                      </div>

                    </div>
                  </div>

                  <div className={style.highlight_des_box}>
                    <div className={style.highlight_des_img}>
                      <PiScalesThin />
                      {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                    </div>
                    <div className={style.highlight_des}>
                      <div className={style.highlight_title}>Weight</div>
                      <div className={style.highlight_text}>
                        {FirstModDetail && FirstModDetail?.specifications[2]?.specs[1].val[0].split(',')[0]}

                      </div>
                    </div>
                  </div>

                  <div className={style.highlight_des_box}>
                    <div className={style.highlight_des_img}>
                      <PiArrowsInLineVerticalThin />
                      {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                    </div>
                    <div className={style.highlight_des}>
                      <div className={style.highlight_title}>Thickness</div>
                      <div className={style.highlight_text}>
                        {FirstModDetail && FirstModDetail?.dimension?.split(',')[1]}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </>
          }

          <div className={style.line}></div>

          {FirstModDetail2 && <>
            <div className={style.PhoneCard1}>
              <div className={style.highlight}>
                <div className={style.highlight_des_box}>
                  <div className={style.highlight_des_img}>
                    <CiHardDrive />
                    {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                  </div>
                  <div className={style.highlight_des}>
                    <div className={style.highlight_title}>Rom | Ram</div>
                    <div className={style.highlight_text}>
                      {FirstModDetail2 && FirstModDetail2?.specifications[5].specs[1].val[0].split(',')[0]}

                    </div>
                  </div>
                </div>
                <div className={style.highlight_des_box}>
                  <div className={style.highlight_des_img}>
                    <PiCpuThin />
                    {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                  </div>
                  <div className={style.highlight_des}>
                    <div className={style.highlight_title}>Processor</div>
                    <div className={style.highlight_text}> {FirstModDetail2 && FirstModDetail2?.specifications[4]?.specs[1]?.val[0]}</div>

                  </div>
                </div>

                <div className={style.highlight_des_box}>
                  <div className={style.highlight_des_img}>
                    <PiCameraRotateThin />
                    {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                  </div>
                  <div className={style.highlight_des}>
                    <div className={style.highlight_title}>Real Camera</div>
                    <div className={style.highlight_text}> {FirstModDetail2?.specifications ? GetCam(FirstModDetail2?.specifications) : ''}</div>

                  </div>
                </div>


                <div className={style.highlight_des_box}>
                  <div className={style.highlight_des_img}>
                    <PiDeviceMobileCameraThin />
                    {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                  </div>
                  <div className={style.highlight_des}>
                    <div className={style.highlight_title}>Display</div>
                    <div className={style.highlight_text}>
                      {FirstModDetail2?.specifications ? GetDisplay(FirstModDetail2?.specifications) : ''}


                    </div>
                  </div>
                </div>

                <div className={style.highlight_des_box}>
                  <div className={style.highlight_des_img}>
                    <PiBatteryChargingVerticalThin />
                    {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                  </div>
                  <div className={style.highlight_des}>
                    <div className={style.highlight_title}>Battery</div>
                    <div className={style.highlight_text}>
                      {FirstModDetail2 && FirstModDetail2?.specifications[11]?.specs[0]?.val[0]}
                    </div>
                  </div>
                </div>


                <div className={style.highlight_des_box}>
                  <div className={style.highlight_des_img}>
                    <PiCameraThin />
                    {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                  </div>
                  <div className={style.highlight_des}>
                    <div className={style.highlight_title}>Front Camera</div>
                    <div className={style.highlight_text}>
                      {FirstModDetail2 && FirstModDetail2?.specifications[7]?.specs[0].val[0].split(',')[0]}

                    </div>
                  </div>
                </div>

                <div className={style.highlight_des_box}>
                  <div className={style.highlight_des_img}>
                    <PiScalesThin />
                    {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                  </div>
                  <div className={style.highlight_des}>
                    <div className={style.highlight_title}>Weight</div>
                    <div className={style.highlight_text}>
                      {FirstModDetail2 && FirstModDetail2?.specifications[2]?.specs[1].val[0].split(',')[0]}

                    </div>
                  </div>
                </div>

                <div className={style.highlight_des_box}>
                  <div className={style.highlight_des_img}>
                    <PiArrowsInLineVerticalThin />
                    {/* <Image layout='responsive' width={100} height={100} src={'/images/icons/condition.jpeg'} alt="" /> */}
                  </div>
                  <div className={style.highlight_des}>
                    <div className={style.highlight_title}>Thickness</div>
                    <div className={style.highlight_text}>
                      {FirstModDetail2 && FirstModDetail2?.dimension?.split(',')[1]}

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>}

        </div>
      </div>

      <div>

        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[3]} FirstModDetail={FirstModDetail?.specifications[3]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[2]} FirstModDetail={FirstModDetail?.specifications[2]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[1]} FirstModDetail={FirstModDetail?.specifications[1]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[0]} FirstModDetail={FirstModDetail?.specifications[0]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[4]} FirstModDetail={FirstModDetail?.specifications[4]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[5]} FirstModDetail={FirstModDetail?.specifications[5]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[6]} FirstModDetail={FirstModDetail?.specifications[6]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[7]} FirstModDetail={FirstModDetail?.specifications[7]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[8]} FirstModDetail={FirstModDetail?.specifications[8]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[9]} FirstModDetail={FirstModDetail?.specifications[9]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[10]} FirstModDetail={FirstModDetail?.specifications[10]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[11]} FirstModDetail={FirstModDetail?.specifications[11]} />}
        {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[12]} FirstModDetail={FirstModDetail?.specifications[12]} />}
        {/* {FirstModDetail2 && FirstModDetail && <ModileDetail FirstModDetail2={FirstModDetail2?.specifications[13]} FirstModDetail={FirstModDetail?.specifications[13]} />} */}
      </div>

      {/* <div>
        <h3 className={style.Price_Compare}>Price comparison</h3 >

        <p className={style.Phone_Name}>Realme 11X 5G</p>

        <div className={style.PhoneList_Container}>
          {array?.map((e, index) => {

            return (
              <>
                <div className={style.phone_List_Con}>
                  <p className={style.Store_Name}>{e.name}</p>
                  <p className={style.StorePrice_}>{e.price}</p>
                </div>

              </>
            )
          })}
        </div>
      </div> */}




      {/* <p style={{ marginTop: '30px' }} className={style.Phone_Name}>Realme 11X 5G</p> */}

      {/* <div className={style.PhoneList_Container}>
        {array?.map((e, index) => {
          return (
            <>
              <div key={index} className={style.phone_List_Con} >
                <p className={style.Store_Name}>{e.name}</p>
                <p className={style.StorePrice_}>{e.price}</p>
              </div>

            </>
          )
        })}
      </div> */}

      {/* <div className={style.compare_User_Review}>
        <h3>User Review</h3>
      </div> */}


      {/* <div className={style.user_review_}>
        <p>Realme 11X 5G</p>
        <p>Realme 11X 5G</p>
      </div> */}

      {/* <div className={style.review_comparison}>
        <div className={style.review_comparison_box}>

          <ReviewBar title="realme 11x 5G (Midnight Black)" rating={8.9} color="#40e440" />
          <ReviewBar title="realme 11x 5G (Midnight Black)" rating={6.9} color="red" />
        </div>
      </div> */}

      {/* <div className={style.review_comparison}>
        <div className={style.review_comparison_box}>

          <ReviewBar title="Camera Review" rating={6.9} color="#40e440" />
          <ReviewBar title="Camera Review" rating={4.9} color="red" />
        </div>
      </div> */}

      {/* <div className={style.review_comparison}>
        <div className={style.review_comparison_box}>

          <ReviewBar title="Battery Review" rating={7.9} color="#40e440" />
          <ReviewBar title="Battery Review" rating={5.9} color="red" />
        </div>
      </div> */}

      {/* <div className={style.review_comparison}>
        <div className={style.review_comparison_box}>

          <ReviewBar title="Performance Review" rating={8.9} color="#40e440" />
          <ReviewBar title="Performance Review" rating={6.9} color="red" />
        </div>
      </div> */}


    </>
  )

}

export default Compare;
