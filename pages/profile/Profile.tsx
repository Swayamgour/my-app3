import React, { useState } from "react";
import style from '@/styles/Profile.module.css'
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { useGetTrustedQuery } from '@/Redux/productsReducer'
// import { BsArrowLeft } from "react-icons/bs";

function Profile() {

    const { data, isSuccess } = useGetTrustedQuery('')
    // console.log(data)

    const [Name, setName] = useState(data?.Name)
    const [Email, setEmail] = useState(data?.Email)
    const [Contact, setContact] = useState(data?.Mobile)
    const [ID, setID] = useState(data?.id)
    const [Address, setAddress] = useState(data?.Address)
    const [Location, setLocation] = useState(data?.Location)


    return (
        <>
            <div>
                {/* <BsArrowLeft /> */}
                <div className={style.Profile_ImageContainer}>
                    <h3>Profile</h3>
                    <div className={style.Profile_Image_Logo}>
                        <Image src='/icons/bill.png' alt="profile Image" width={60} height={60} />
                        <div className={style.Profilr_Cammer_Icons}><FaCamera className={style.logo} /></div>
                    </div>
                    <p>{data?.Name}</p>
                </div>

                <div className={style.Profile_Edit_Section}>
                    <div className={style.Profile_Input_section}>
                        <p>Name</p>
                        <input  placeholder="Name" value={Name} 
                        // onChange={(e: any) => setName(e.target.value)} 
                        />
                    </div>
                    <div className={style.Profile_Input_section}>
                        <p>Email</p>
                        <input type="email" placeholder="Email" value={Email} 
                        // onChange={(e: any) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className={style.Profile_Input_section}>
                        <p>Contact</p>
                        <input type="number" placeholder="00000000000" value={Contact} 
                        // onChange={(e: any) => setContact(e.target.value)} 
                        />
                    </div>
                    <div className={style.Profile_Input_section}>
                        <p>ID</p>
                        <input placeholder="9090FIDS90" value={ID} 
                        // onChange={(e: any) => setID(e.target.value)} 
                        />
                    </div>
                    <div className={style.Profile_Input_section}>
                        <p>Address</p>
                        <input placeholder="Address" value={Address} 
                        // onChange={(e: any) => setAddress(e.target.value)} 
                        />
                    </div>
                    <div className={style.Profile_Input_section}>
                        <p>Prefred location</p>
                        <input placeholder="Address" value={Location} 
                        // onChange={(e: any) => setLocation(e.target.value)} 
                        />
                    </div>
                </div>
                <div className={style.Submit_button}>

                    <button>Submit</button>
                </div>
            </div>

        </>
    )
}

export default Profile;
