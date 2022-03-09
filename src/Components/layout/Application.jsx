import React from 'react'
import Bazar from '../Assets/bazar.svg'
import Pwa from '../Assets/pwa.svg'
import Play from '../Assets/play.svg'
import Mobile from '../Assets/mobile.svg'
import { FiMail, FiMapPin, FiMonitor } from 'react-icons/fi'
import '../Scss/Application.scss'

const Application = () => {
    return (
        <section className='app' dir='rtl'>
            <div className="container app-container">
                <div className="app-container__download">
                    <div className="app-container__download-text">
                        <h4 className='app-container__download-text__title'>دانلود اپلیکیشن کارآباد</h4>
                        <p className="app-container__download-text__subtitle">آخرین قیمت‌ها و پیشنهادها را در نسخه موبایل ببینید</p>
                        <ul>
                            <li>جست‌و‌جوی سریع بهترین پیشنهادها</li>
                            <li>اولویت در پیشنهادهای ویژه‌ی کارآباد</li>
                        </ul>
                        <div className="app-container__download-text__btn">
                            <a href='/'>
                                <span>دانلود از کافه بازار</span>
                                <img src={Bazar} alt="bazar" />
                            </a>
                            <a href='/'>
                                <span>دانلود از گوگل پلی</span>
                                <img src={Play} alt="google" />
                            </a>
                            <a href='/' >
                                <span>دانلود وب اپلیکیشن</span>
                                <img src={Pwa} alt="pwa" />
                            </a>
                        </div>
                    </div>
                    <div className="app-container__download-img">
                        <img src={Mobile} alt="" />
                    </div>
                </div>
                <div className="app-container__newsletter">
                    <div className="app-container__newsletter-title">خبرنامه کارآباد</div>
                    <div className="app-container__newsletter-subtitle">عضو خبرنامه کارآباد شوید!</div>
                    <p className="app-container__newsletter-desc">
                        با عضویت در خبرنامه کارآباد از آخرین پیشنهادها، تخفیف‌ها و اخبار باخبر خواهید شد.
                    </p>
                    <div className="app-container__newsletter-box">
                        <input type="email" placeholder='Example@gmail.com' dir='ltr' />
                        <button>ثبت و عضویت</button>
                    </div>
                </div>
                <div className="app-container__address">
                    <div className="app-container__address-detail">
                        <span className='app-container__address-detail__text'>IRan , Tehran</span>
                        <span className='app-container__address-detail__icon'><FiMapPin size={25} /></span>
                    </div>
                    <div className="app-container__address-detail">
                        <span className='app-container__address-detail__text'>Sohseyedi@gmail.com</span>
                        <span className='app-container__address-detail__icon'><FiMail size={25} /></span>
                    </div>
                    <div className="app-container__address-detail">
                        <a href='https://soheils.ir/' className='app-container__address-detail__text'>soheils.ir</a>
                        <span className='app-container__address-detail__icon'><FiMonitor size={25} /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Application