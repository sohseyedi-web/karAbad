import React, { useState } from 'react'
import '../Scss/Intro.scss'

const Intro = () => {


    const [activeTabs, setactiveTabs] = useState(1);
    const toggleTab = (index) => {
        setactiveTabs(index);
    }


    return (
        <header className='intro' dir='rtl'>
            <div className="container">
                <div className="intro-container">
                    <div className="intro-container__title">خونت، با ما آباد</div>
                    <div className="intro-container__box">
                        <div className="intro-container__box-header">
                            <div className={activeTabs === 1 ? "intro-container__box-header__tab active-tab" : "intro-container__box-header__tab"} onClick={() => toggleTab(1)}>خانه و آپارتمان</div>
                            <div className={activeTabs === 2 ? "intro-container__box-header__tab active-tab" : "intro-container__box-header__tab"} onClick={() => toggleTab(2)}>سازمان و شرکت ها</div>
                            <div className={activeTabs === 3 ? "intro-container__box-header__tab active-tab" : "intro-container__box-header__tab"} onClick={() => toggleTab(3)}>مغازه و رستوران</div>
                        </div>
                        <div className="intro-container__box-body">
                            <p className={activeTabs === 1 ? "intro-container__box-body__text active-text" : "intro-container__box-body__text"}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </p>
                            <p className={activeTabs === 2 ? "intro-container__box-body__text active-text" : "intro-container__box-body__text"}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </p>
                            <p className={activeTabs === 3 ? "intro-container__box-body__text active-text" : "intro-container__box-body__text"}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Intro