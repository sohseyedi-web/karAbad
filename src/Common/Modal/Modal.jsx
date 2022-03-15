import React from 'react'
import { MdClose } from 'react-icons/md'
import Back from '../Back/Back'

import './Modal.scss'
import { useModal } from './../../Context/ModalProvider';

const Modal = () => {

    const { modal, closeModal } = useModal();

    return (
        <>
            <Back />
            {
                modal ?
                    <div className='box'>
                        <span className="box-close" onClick={closeModal}><MdClose size={32} /></span>
                        <div className="box-details">
                            <div className="box-details__title">پیگیری خدمات</div>
                            <form className="box-details__form">
                                <label htmlFor='mobile'>شماره پیگیری درخواست</label>
                                <input type="text" name='mobile' id='mobile' autocomplete="off" placeholder='شماره پیگیری را وارد کنید' />
                                <input type="submit" value="ادامه" />
                            </form>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default Modal