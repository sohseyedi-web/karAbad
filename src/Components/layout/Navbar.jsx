import React from 'react'
import '../Scss/Navbar.scss'
const Navbar = () => {
    return (

        <nav className='navbars' dir='rtl'>
            <div className="container navbars-items">
                <div className="navbars-items__right">
                    <span className='navbars-items__right-logo'>
                        کارآباد
                    </span>
                    <a href='/' className='navbars-items__right-text'>
                        صفحه اصلی
                    </a>
                    <a href='/' className='navbars-items__right-text'>
                        جستجو سریع
                    </a>
                    <a href='/' className='navbars-items__right-text'>
                        پنل سازمانی
                    </a>
                    <a href='/' className='navbars-items__right-text'>
                        اپلیکیشن
                    </a>
                    <button className='navbars-items__right-btn btn-log'>ورود ، ثبت نام</button>
                </div>
                <div className="navbars-items__left">
                    <div className='navbars-items__left-number'>12345 - 021</div>
                    <button className='navbars-items__left-btn'>پیگیری سفارش</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar