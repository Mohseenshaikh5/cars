import React from 'react'
import './poster.css'
import { Button, Typography } from '@mui/material'
import CarIntro from "../../assets/carVidio/Car Intro Video.mp4"
const PosterImg = () => {
    return (
        <>
            <div >
                <div class="car-intro">
                    <div className='posters'>
                        <h1>Welcome to our Car Showroom</h1>
                        <p>Experience the thrill of driving our top-notch cars!</p>
                        <Button variant='contained'>Explore Models</Button>
                    </div>
                </div>
            </div>
            {/* <div class="video-container">
                <video src={CarIntro} autoplay loop muted />
                {/* <source  type="video/mp4" /> */}
            {/* <!-- Add additional source elements for other video formats --> */}
            {/* </div> */}
        </>

    )
}

export default PosterImg