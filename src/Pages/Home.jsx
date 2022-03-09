import React from 'react'
import Accordion from '../Components/layout/Accordion'
import Application from '../Components/layout/Application'
import Footer from '../Components/layout/Footer'
import Intro from '../Components/layout/Intro'
import Search from '../Components/layout/Search'
import Services from '../Components/layout/Services'
import Container from '../Container/Container'

const Home = () => {
    return (
        <Container>
            <Intro />
            <Services />
            <Search />
            <Accordion />
            <Application />
            <Footer />
        </Container>
    )
}

export default Home