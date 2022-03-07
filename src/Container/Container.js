import React from 'react'
import Navbar from '../Components/layout/Navbar'
const Container = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Container