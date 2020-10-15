import React from 'react';

function Carousel({ children }){
    return(
        <section className="carousel">
            <div className="carousel-item">
                {children}
            </div>
        </section>
    )
}

export default Carousel