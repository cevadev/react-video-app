import React from 'react';

import '../assets/styles/components/CarouselItem.scss';
import CarouselPlayIcon from '../assets/images/play-icon.png';
import CarouselPlusIcon from '../assets/images/plus-icon.png'

function CarouselItem({cover, title, year, contentRating, duration}){
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}  />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={CarouselPlayIcon} alt="Play Icon" /> 
                    <img className="carousel-item__details--img" src={CarouselPlusIcon} alt="Plus Icon" /> 
                </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
            </div>
      </div>
    )
}

export default CarouselItem