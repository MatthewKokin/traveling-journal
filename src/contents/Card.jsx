import React from 'react'
import geo from '../assets/geo.svg'
import './Card.css'

export default function Card(prompt) {
    return (
        <div className='card'>
            <img src={prompt.img} alt="Image" className='main-img'/>
            <div className='content'>
                <div className='top'>
                    <img src={geo} alt="geo icon" />
                    <h2>{prompt.country}</h2>
                    <a href={prompt.link}>View on Google Maps</a>
                </div>
                <h1 className='title'>{prompt.name}</h1>
                <h4 className='trip-length'>{prompt.startDate} - {prompt.endDate}</h4>
                <p className='description'>{prompt.description}</p>
            </div>
        </div>
    )
}