import React from 'react'
import { Link } from "react-router-dom"
import { BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'

const SocoalMedia = () => {
    return (
        <div className='rm-socoal-meida'>
            <ul>
                <li><Link to=""><BsLinkedin /></Link></li>
                <li><Link to=""><BsTwitter /></Link></li>
                <li><Link to=""><BsInstagram /></Link></li>
                <li><Link to=""><BsFacebook /></Link></li>
            </ul>
        </div>
    )
}

export default SocoalMedia