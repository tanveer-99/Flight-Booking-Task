import React from 'react';
import './PopularDestinations.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import PopularDestinationsFakeData from './FakeData';
import PopularDestinationsSlider from '../PopularDestinationsSlider/PopularDestinationsSlider';

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1
    }
  };



const PopularDestinations = () => {


    return (
        <div className="popular-destinations-section mb-5">

            <div className="d-flex justify-content-between">
                <div className="w-75">
                    <h1 className="popular-destinations-title">Countries you can travel to right now</h1>
                    <p className="text-secondary">Popular destinations open to visitors from your country</p>
                </div>
                <div >
                    <button className="btn btn-outline-dark see-all-button">See All</button>
                </div>
            </div>

            <div>
                <Carousel responsive={responsive}>
                    {
                        PopularDestinationsFakeData.map(destination => <PopularDestinationsSlider key={destination.key} destination={destination}></PopularDestinationsSlider>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default PopularDestinations;