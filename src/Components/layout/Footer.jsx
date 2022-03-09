import React from 'react'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import '../Scss/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer" dir='rtl'>
            <div className="container footer-container">
                <div className="footer-container__item">
                    <h6>درباره کارآباد</h6>
                    <a href="">درباره ما</a>
                    <a href="">بلاگ کارآباد</a>
                    <a href="">اپلیکیشن کارآباد</a>
                    <a href="">فرصت های شغلی</a>
                </div>
                <div className="footer-container__item">
                    <h6>پشتیبانی کارآباد</h6>
                    <a href="">تماس با ما</a>
                    <a href="">احراز هویت</a>
                    <a href="">سوالات متداول</a>
                    <a href="">قوانین و مقررات</a>
                </div>
                <div className="footer-container__item ">
                    <h6>شبکه های اجتماعی</h6>
                    <div className="footer-container__item-socials">
                        <a href=""><FiGithub /></a>
                        <a href=""><FiInstagram /></a>
                        <a href=""><FiLinkedin /></a>
                        <a href=""><FiTwitter /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer