import React from 'react'
import Man from '../Assets/man.png'
import Women from '../Assets/women.png'
import '../Scss/Services.scss'

const Services = () => {
    return (
        <section className="services" dir='rtl'>
            <div className="container">
                <div className="services-container">
                    <div className="services-container__right men">
                        <img src={Man} alt="men" />
                        <div className="services-container__right-body">
                            <span className="services-container__right-body__bold">آقا مصطفی</span>
                            ، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </div>
                    </div>
                    <div className="services-container__left ">
                        <img src={Women} alt="women" />
                        <div className="services-container__left-body">
                            <span className="services-container__left-body__bold">مهناز خانم</span>
                            ، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services