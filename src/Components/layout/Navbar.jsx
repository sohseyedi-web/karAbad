import React, { useState } from 'react'
import { IoMdFingerPrint } from 'react-icons/io'
import { Link } from 'react-router-dom';
import '../Scss/Navbar.scss'
import Modal from './../../Common/Modal/Modal';
import { useModal } from './../../Context/ModalProvider';
const Navbar = () => {

    const { openModal } = useModal();
    const [active, setActive] = useState(false);

    return (
        <nav className='navbars' dir='rtl'>
            <div className="container navbars-items">
                <div className="navbars-items__right">
                    <div className='navbars-items__right-logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100 100" fill="#14286d">
                            <path
                                d="M60 20c-16.563 0-30 13.431-30 29.997 0 11.045 8.955 20 20 20s19.997-8.955 20-20c0-7.357-5.967-13.331-13.333-13.331-7.363 0-13.334 5.974-13.334 13.333 0 3.685 2.985 6.667 6.667 6.667s6.667-2.982 6.667-6.667H50c0-3.685 2.985-6.667 6.667-6.667s6.666 2.982 6.666 6.667c0 7.366-5.97 13.333-13.333 13.333S36.667 57.366 36.667 50c0-11.042 8.955-20 20-20 11.048 0 19.996 8.955 20 19.997v-.004V50v-.003C76.663 64.724 64.727 76.663 50 76.663S23.333 64.724 23.333 49.997V50v-.007.004c0-20.248 16.42-36.664 36.667-36.664 2.624 0 5.179.286 7.646.811C62.317 11.517 56.341 10 50 10c-22.09 0-40 17.91-40 40s17.91 40 40 40 40-17.91 40-40c0-1.035-.078-2.051-.156-3.066C88.308 31.807 75.534 20 60 20z" />
                        </svg>
                        کارآباد
                    </div>
                    <Link to={"/"} className='navbars-items__right-text'>
                        صفحه اصلی
                    </Link>
                    <a href='/' className='navbars-items__right-text'>
                        جستجو سریع
                    </a>
                    <a href='/' className='navbars-items__right-text'>
                        پنل سازمانی
                    </a>
                    <a href='/' className='navbars-items__right-text'>
                        اپلیکیشن
                    </a>
                    <Link to={"/auth"} className='navbars-items__right-text right-btn'>ورود ، ثبت نام</Link>
                </div>
                <div className="navbars-items__left">
                    <div className='navbars-items__left-number'>12345 - 021</div>
                    <button className='navbars-items__left-btn btn-order' onClick={openModal}>پیگیری سفارش</button>
                    <Modal />

                    <div className="navbars-items__left-mobile" onClick={() => setActive(!active)}><IoMdFingerPrint size={35} /></div>
                </div>
                <div className={active ? "navbars-items__responsive active-nav" : "navbars-items__responsive"} onClick={() => setActive(!active)}>
                    <Link to='/' className='navbars-items__responsive-text'>
                        صفحه اصلی
                    </Link>
                    <a href='/' className='navbars-items__responsive-text'>
                        جستجو سریع
                    </a>
                    <a href='/' className='navbars-items__responsive-text'>
                        پنل سازمانی
                    </a>
                    <a href='/' className='navbars-items__responsive-text'>
                        اپلیکیشن
                    </a>
                    <Link to='/auth' className='navbars-items__responsive-text'>
                        ورود و ثبت نام
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar