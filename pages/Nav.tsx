import React,{useState} from 'react'
import style from '@/styles/Navbar.module.css';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

const Nav = () => {

    const [Nav1,setNav1] = useState(false);
    const [Nav2,setNav2] = useState(false);
    const [Nav3,setNav3] = useState(false);

    const router = useRouter();

  return (
    <div className={style.bottomNav}>
        <div className={style.dropdown}>

          <ul className={style.nav} >
            <p className={style.dropBtn} onClick={()=>router.push('/About')}>About</p>
          </ul>
          <ul className={style.nav}>
            <p className={style.dropBtn} onClick={()=>router.push('/contact')}>Contact</p>
          </ul>
          <ul className={style.nav} onMouseLeave={()=>setNav1(false)}>
            <p className={style.dropBtn} onMouseEnter={()=>setNav1(true)} >
              <span>Near by Store</span>
              <span className={style.arrow}><IoIosArrowForward /></span>
            </p>

            <ul className={`${style.dropdown_list}  ${Nav1?style.active_dropdown_list:style.inactive_dropdown_list}`}>
              <li>
                <Link href={'/'}>home</Link>
              </li>
            </ul>
          </ul>
          <ul className={style.nav} onMouseLeave={()=>setNav2(false)}>
            <p className={style.dropBtn} onMouseEnter={()=>setNav2(true)}>
              <span>By Shop</span>
              <span className={style.arrow}><IoIosArrowForward /></span>
            </p>
            <ul className={`${style.dropdown_list}  ${Nav2?style.active_dropdown_list:style.inactive_dropdown_list}`}>
              <li>
                <Link href={'/'}>home</Link>
              </li>
            </ul>
          </ul>
          <ul className={style.nav} onMouseLeave={()=>setNav3(false)}>
            <p className={style.dropBtn} onMouseEnter={()=>setNav3(true)} >
              <span>More</span>
              <span className={style.arrow}><IoIosArrowForward /></span>
            </p>
            <ul className={`${style.dropdown_list}  ${Nav3?style.active_dropdown_list:style.inactive_dropdown_list}`}>
              <li>
                <Link href={'/career'}>Careers</Link>
              </li>
              <li>
                <Link href={'/'}>Health</Link>
              </li>
              <li>
                <Link href={'/privacy&policy'}>Privacy & Policy</Link>
              </li>
              <li>
                <Link href={'/faq'}>FAQ&apos;s</Link>
              </li>
            </ul>
          </ul>
          <div className={style.location}>
            <p>
              <Image layout='responsive' width={20} height={30} src="/images/icons/location.png"  alt="" />
            </p>
            bhilai
          </div>
          <button className={style.sellerBtn}>Become a seller</button>
        </div>
      </div>
  )
}

export default Nav