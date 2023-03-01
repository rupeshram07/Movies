import React from 'react'
import '../assets/styles/home.scss'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TfiVideoClapper } from 'react-icons/tfi'
import { BiDevices } from 'react-icons/bi'
import { TbWorld } from 'react-icons/tb'

const Home = () => {
    return (
        <div className="home__container">
            <div className="__container__image">
                <img src={"/photos/h1.jpg"} alt="" />
            </div>
            <div className="__container__image__">
                <div>
                    <h1>Watch free Live TV, instantly.</h1>
                    <p>Tune in to Live TV on Plex anytime, on almost any device—no hardware required. With action, comedy, movies, news, and more streaming 24/7, there’s a channel for everyone..</p>

                </div>


            </div>
            <div className="home__container__description">
                <div className="home__container__des">
                    <div>
                        <b id='money'><RiMoneyDollarCircleLine /></b>
                        <h1>Always free</h1>
                        <p>Finally, a free movie website that's actually free. Watch any time, no subscription required.</p>

                    </div>
                    <div>
                        <b id='tv'><TfiVideoClapper /></b>
                        <h1>Tons to Watch</h1>
                        <p>Choose from over 50,000 free on-demand titles plus over 250 channels of instant Live TV.</p>

                    </div>
                    <div>
                        <b id='device'><BiDevices /></b>
                        <h1>Device-Friendly</h1>
                        <p>Stream the good stuff from your favorite devices including Apple, Android, Smart TVs, and more.</p>
                    </div>
                    <div>
                        <b id='world'><TbWorld /></b>
                        <h1>Works Worldwide</h1>
                        <p>Enjoy access to more content from more countries worldwide than any other service.</p>
                    </div>
                </div>
            </div>

            <div className="home__container__movies">
                <div>
                    <h1>what are you in the mood for</h1>
                </div>
                <div>
                    <button>Action</button>
                    <button>Drama</button>
                    <button>Romance</button>
                    <button>Comedy</button>
                    <button>Horror</button>
                    <button>Sci-fi</button>
                    
                </div>


            </div>


        </div>
    )
}

export default Home