import React from 'react'
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import '../Scss/Search.scss'

const Search = () => {
    return (

        <section className="search" dir='rtl'>
            <div className="container">
                <div className="search-content">
                    <div className="search-content__box">
                        <input className="search-content__box-city" placeholder='شهر مورد نظر' />
                        <input className="search-content__box-service" placeholder='سرویس مورد نظر' />
                        <button className='search-content__box-btn'><FiSearch size={32} /></button>
                        <div className='search-content__box-pip'></div>
                        <a href="/" className="search-content__box-full">جستجوی بهتر <FiArrowLeft /></a>
                    </div>
                    <div className="search-content__support">
                        <a href="/" className="">درخواست پشتیبانی</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search