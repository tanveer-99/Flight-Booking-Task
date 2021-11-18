import React from 'react';
import './PopularDestinationsSlider.css'

const PopularDestinationsSlider = ({destination}) => {
    return (
        <div className="slider">
            <img className="slider-image" src={destination.image} alt="" />
            <div className="slider-description">
                <h3>{destination.name}</h3>
                <p className="m-0">{destination.description}</p>
                <p className="slider-status">{destination.status}</p>
            </div>
        </div>
    );
};

export default PopularDestinationsSlider;