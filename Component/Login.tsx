// import React from 'react';
import Dialog from '@mui/material/Dialog';
import style from '@/styles/Login.module.css'
import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState, useRef, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import { useLogWithOtpMutation, useLoginMutation, useResetOtpMutation } from '@/Redux/productsReducer';
import { LuUser } from 'react-icons/lu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AlertDialog({ setTokenForLocal, openDialer, setOpenDialer }: any) {


    const [phoneNumber, setPhoneNumber] = useState('');

    const [phoneNumberError, setPhoneNumberError] = React.useState(false);
    const [showLogin, setShowLogin] = useState(true)
    const [otp, setOtp] = useState<string[]>(['', '', '', '']);
    // const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const inputRefs = useRef<any>([]);

    const [seconds, setSeconds] = useState(30);
    const [time, setTime] = useState(false);



    const [RegesterByNumber] = useLogWithOtpMutation()
    const [LoginWithNumberandOtp, reasult] = useLoginMutation()
    const [resetOtp] = useResetOtpMutation()


    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== '' && index < 3) {
                inputRefs.current[index + 1]?.focus();
            }

            const otpValue = newOtp.join('');
            if (otpValue.length === 4) {
                LoginWithNumberandOtp({ Mobile: phoneNumber, OTP: otpValue });
            }
        }
    };

    useEffect(() => {
        if (reasult.isSuccess) {
            if (reasult.data?.Status === 'success') {
                const token = reasult?.data?.Token;
                localStorage.setItem("token", token);
                setTokenForLocal(true)
                setOpenDialer(false)
            }
        }
    }, [reasult])




    useEffect(() => {
        if (reasult.isError === true) {
            alert('Wrong Otp  and phone Number')
        }
    }, [reasult])


    // const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    //     if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
    //         inputRefs.current[index - 1]?.focus();
    //     }
    // };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };



    const handleClickOpen = () => {
        setOpenDialer(true);
    };

    const handleClose = () => {
        setOpenDialer(false);
    };

    const handelClick = () => {
        if (phoneNumber.length === 10) {
            RegesterByNumber({ Mobile: phoneNumber })
            setShowLogin(false);
        }
    };
    const handelEditNumber = () => {
        setShowLogin(true);
    };
    const handlePhoneNumberChange = (e: any) => {
        setPhoneNumber(e.target.value)
    };

    const handelClickotp = () => {
        setTime(true)
        setSeconds(30)
        setOtp(['', '', '', ''])
        resetOtp({ Mobile: phoneNumber })
    };

    const handleKeyDownBut = (e: any) => {
        if (e.key === 'Enter') {
            handelClick();
        }
    };

    useEffect(() => {
        if (seconds === 0) {
            setTime(false)
        }
        if (time === true) {
            const interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [seconds, time]);



    return (
        <React.Fragment>
            <p
                // style={{fontSize:'20px' , border:'1px solid black' , padding:'3px 10px' , borderRadius:'10px'}} 
                onClick={handleClickOpen}>
                {/* Login */}
                <LuUser />
            </p>
            <Dialog
                // open={true}
                open={openDialer}
                onClose={handleClose}

            >
                <div className={style.Dialogbox}>


                    <DialogTitle >
                        < p onClick={() => setOpenDialer(false)} style={{ textAlign: 'end' }}>x</p>
                        <h3 style={{ textAlign: 'center' }}>{"LOG IN"}</h3>
                    </DialogTitle>
                    {showLogin ? <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <div className={style.LogInEnternumber}>
                                <p className={style.LoginPhoneNumber}>
                                    Enter Your phone Number
                                </p>
                                <div className={style.InputLogin}>
                                    +91  <input
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        placeholder="Enter your phone number"
                                        onKeyDown={handleKeyDownBut}
                                        maxLength={10}
                                    />
                                </div>
                                {phoneNumberError && <p className={style.input_message_show}>Phone number must be 10 digits</p>}
                                <button onClick={handelClick} className={style.SigninBut}>Sign in</button>
                                <p className={style.termandcondision}>By Clicking Login with Phoneo. You Agree to <span className={style.LoginSpan}>Terms and Conditions</span>  And <span className={style.LoginSpan}>Privacy Policy</span></p>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                        :
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <div className={style.LogInEnternumber}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p className={style.LoginPhoneNumber}>{phoneNumber}</p>
                                        <p className={style.LoginPhoneNumber} onClick={handelEditNumber}>
                                            Edit
                                        </p>
                                    </div>
                                    <p className={style.LoginPhoneNumber}>
                                        M pin
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                        {otp.map((value, index) => (
                                            <div key={index}>
                                                <input
                                                    type="number"
                                                    name={`otp${index}`}
                                                    value={value}
                                                    onChange={(e) => handleChange(e, index)}
                                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                                    ref={(el: any) => (inputRefs.current[index] = el)}
                                                    maxLength={1}
                                                    style={{
                                                        width: '2rem',
                                                        height: '2rem',
                                                        margin: '0.5rem',
                                                        textAlign: 'center',
                                                        fontSize: '1.5rem',
                                                    }}
                                                />
                                            </div>
                                        ))}

                                    </div>

                                    {phoneNumberError && <p className={style.input_message_show}>Phone number must be 10 digits</p>}
                                    <button className={style.SigninBut}>Log in</button>
                                    <div className={style.Second}>

                                        {time && <span className={style.LoginSpanSecond}>{seconds}</span>}
                                        {time ? 'Resend Otp' : <p style={{ textAlign: 'end' }} className={style.termandcondision}>

                                            Log in With <span onClick={handelClickotp}
                                                style={{ cursor: 'pointer' }}
                                                className={style.LoginSpan}>OTP</span>
                                        </p>}

                                    </div>
                                    <p className={style.termandcondision}>By Clicking Login with Phoneo. You Agree to <span className={style.LoginSpan}>Terms and Conditions</span>  And <span className={style.LoginSpan}>Privacy Policy</span></p>
                                </div>
                            </DialogContentText>
                        </DialogContent>}
                </div>
            </Dialog>
            <ToastContainer />
        </React.Fragment>
    );
}
