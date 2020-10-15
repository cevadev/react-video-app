import React from 'react';

import CarouselItemImage from '../assets/images/profile.jpeg';
import CarouselPlayIcon from '../assets/images/play-icon.png';
import CarouselPlusIcon from '../assets/images/plus-icon.png'

function CarouselItem(){
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={CarouselItemImage} alt=""  />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={CarouselPlayIcon} alt="Play Icon" /> 
                    <img className="carousel-item__details--img" src={CarouselPlusIcon} alt="Plus Icon" /> 
                </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
      </div>
    )
}

export default CarouselItem