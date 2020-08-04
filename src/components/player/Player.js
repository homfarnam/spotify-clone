import React from 'react'
import './Player.css'
import Sidebar from '../sidebar/Sidebar'
import Body from '../body/Body'
import Footer from '../footer/Footer'

function Player({player}) {
    return (
        <div className='player'>
            <div className="player__body">
                <Sidebar />
                <Body /> 
            </div>

            <Footer />
        </div>
    )
}

export default Player
