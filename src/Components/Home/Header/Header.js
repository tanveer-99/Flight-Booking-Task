import React from 'react';
import TopNav from './../TopNav/TopNav';
import FlightSearch from './../FlightSearch/FlightSearch';
import PopularDestinations from '../PopularDestinations/PopularDestinations';

const Header = () => {
    return (
        <div>
            <TopNav></TopNav>
            <FlightSearch></FlightSearch>
            <PopularDestinations></PopularDestinations>
        </div>
    );
};

export default Header;