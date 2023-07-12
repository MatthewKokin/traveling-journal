import React from 'react'
import Card from './Card'
import data from '../../data.js'

export default function Body(){
    const elements = data.map(el => {
        return(
            <Card 
            img = {el.imageUrl}
            country = {el.location}
            link = {el.googleMapsUrl}
            name = {el.title}
            startDate = {el.startDate}
            endDate = {el.endDate}
            description = {el.description}
            />
        )
    })
    return(
        <div>
            {elements}
        </div>
    )
}