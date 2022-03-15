import React from 'react'
import './Login.scss'
import Avatar from '../Assets/login.svg'
import Container from '../../Container/Container'

const Login = () => {
    return (
        <Container>
            <section className="form" dir='rtl'>
                <div className="container">
                    <div className="form-box">
                        <h4 className="form-box__title">ورود / ثبت‌نام کارآباد</h4>
                        <form className="form-box__input">
                            <label htmlFor="mobile">شماره موبایل یا ایمیل</label>
                            <input type="text" name='mobile' autoComplete='off' id='mobile' dir='ltr' placeholder='شماره موبایل یا ایمیل خود را وارد کنید' />
                            <button>ثبت نام و عضویت</button>
                        </form>
                        <img src={Avatar} alt="کارآباد" className='form-box__image' />
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Login