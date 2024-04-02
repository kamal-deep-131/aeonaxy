import React from 'react'
import { CallToAction, Footer, Hero, Navbar, Review, Secondaryhero } from './components'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Secondaryhero />
            <Review />
            <CallToAction />
            <Footer />
        </>
    )
}

export default App