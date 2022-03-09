import React from 'react'
import '../Scss/Services.scss'

const Services = () => {
    return (
        <section className="services" dir='rtl'>
            <div className="container services-container">
                <div className="services-container__right">
                    <img src="" alt="men" />
                    <div className="services-container__right-body">
                        <span className="services-container__right-body__bold">آقا مصطفی</span>
                        ، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </div>
                </div>
                <div className="services-container__left">
                    <img src="" alt="men" />
                    <div className="services-container__left-body">
                        <span className="services-container__left-body__bold">مهناز خانم</span>
                        ، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services