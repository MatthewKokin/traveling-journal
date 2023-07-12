import React from 'react'
import globe from '../assets/globe.svg'

export default function Nav() {
    return (
        <div className='nav'>
            <img src={globe} />
            <h1>my travel journal.</h1>
        </div>
    )
}