import React from 'react'
import { FiSearch , FiArrowLeft } from 'react-icons/fi';
import '../Scss/Search.scss'

const Search = () => {
    return (
        <section className='search' dir='rtl'>
            <div className="container">
                <div className=' search-box'>
                    <input className="search-box__input" placeholder='....' />
                    <select name="" id="" className="search-box__radio">
                        <option value="آقا">آقا</option>
                        <option value="خانم">خانم</option>
                    </select>
                    <button className='search-box__btn'><FiSearch size={25}/></button>
                </div>
                <div className="search-full">جستجوی کامل <FiArrowLeft/></div>
            </div>
        </section>
    )
}

export default Search