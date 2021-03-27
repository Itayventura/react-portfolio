import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image6 from '../images/img-6.jpg'

import image7 from '../images/img-7.jpg'

import image8 from '../images/img-8.jpg'

import image9 from '../images/img-9.jpg'
function Cards() {
    return (
        <div className="cards">
            <h1>Check out these epic destinations!</h1>
            <div className="cards__container">
                <ul className="cards__items">
                    <CardItem 
                    src={image6}
                    text="Explore Waterfall"
                    label="adventure"
                    path='/services'
                    />
                    <CardItem 
                    src={image7}
                    text="Explore Waterfall"
                    label="adventure"
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src={image8}
                    text="Explore Waterfall"
                    label="adventure"
                    path='/services'
                    />
                    <CardItem 
                    src={image9}
                    text="Explore Waterfall"
                    label="adventure"
                    path='/services'
                    />
                </ul>
            </div>
            
        </div>
    )
}

export default Cards
