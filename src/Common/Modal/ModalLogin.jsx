import React from 'react'
import { MdClose } from 'react-icons/md'

import './Modal.scss'

const ModalLogin = () => {


    return (
        <>
            <div className="back"></div>
            <div className='box'>
                <span className="box-close" ><MdClose size={32} /></span>
                <div className="box-details">
                    <div className="box-details__title">ورود / ثبت‌نام کارآباد</div>
                    <form className="box-details__form">
                        <label htmlFor='mobile'>شماره موبایل یا ایمیل</label>
                        <input type="text" name='mobile' id='mobile' autocomplete="off" placeholder='شماره موبایل یا ایمیل خود را وارد کنید' />
                        <input type="submit" value="ثبت اطلاعات" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalLogin