import React from 'react'
import AboutMe from '../../../CommonComponents/AboutMe'
import MainSlider from '../../../CommonComponents/MainSlider'
import Services from '../../../CommonComponents/Services'
import MyWork from '../../../CommonComponents/MyWork'

const Home = () => {
    return (
        <>
            <MainSlider />
            <AboutMe />
            <Services />
            <MyWork />
        </>
    )
}

export default Home