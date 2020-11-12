import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

function Home() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
        </>
    )
}

export default Home
