import React, {useState} from 'react';
import './FlightSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCalendarAlt, faExchangeAlt, faPlane, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const FlightSearch = () => {

   


    const [calenderOn, setCalenderOn] = useState(false);
    const [startedDate, setStartedDate] = useState(new Date().toDateString());
    const [endDate] = useState(new Date().toDateString());

    const handleCalenderOn = () => {
        if(calenderOn) {
            setCalenderOn(false);
        }
        else {
            setCalenderOn(true);
        }
    }

    const handleStartedDateChange = (date, event) => {
        const newDate = date.toDateString();
        setStartedDate(newDate);
        setCalenderOn(false);
    }

    // const handleEndDateChange = (date) => {
    //     const newDate = date.toDateString();
    //     setEndDate(newDate);
    //     setCalenderOn(false);
    // }
    return (
        <div className="flight-search-section">

            <div>
                <h2 className="flight-search-title">Welcome! find a flexible flight for your next trip</h2>
            </div>

            <div className="search-area mt-3">

                <div className="d-flex mb-2">

                        <div className="me-4">
                            <div className="dropdown">
                                <button className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                    Return
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#One-Way">One-Way</a>
                                    <a className="dropdown-item active" href="#Return">Return</a>
                                    <a className="dropdown-item" href="#Multi-city">Multi-city</a>
                                    <a className="dropdown-item" href="#Trip Builder">Trip Builder</a>
                                </div>
                            </div>
                        </div>

                        <div className="me-4">
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                    Economy
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item active" href="#Economy">Economy</a>
                                    <a className="dropdown-item " href="#Premium Economy">Premium Economy</a>
                                    <a className="dropdown-item" href="#Business">Business</a>
                                    <a className="dropdown-item" href="#First">First</a>
                                    <a className="dropdown-item" href="#Mixed">Mixed</a>
                                </div>
                            </div>
                        </div>

                </div>

            

                <div className="search-field d-flex">

                    <div className="from-field d-flex justify-content-between">
                        <i style={{width: '30px'}}><FontAwesomeIcon icon={faPlane} /></i>
                        <input className="search-field-input" type="text" placeholder="From?"></input>
                        <i className="plus-icon ms-auto"><FontAwesomeIcon icon={faPlus} /></i>
                    </div>

                    <div className="from-field exchange">
                        <i ><FontAwesomeIcon className="exchange-icon" icon={faExchangeAlt} /></i>
                    </div>

                    <div className="from-field  d-flex justify-content-between">
                        <i style={{width: '30px'}}><FontAwesomeIcon icon={faPlane} /></i>
                        <input className="search-field-input" type="text" placeholder="To?"></input>
                        <i className="plus-icon ms-auto"><FontAwesomeIcon icon={faPlus} /></i>
                    </div>

                    {/* start Date change  */}

                    <div className="from-field d-flex">
                        <i data-target="#exampleModalCenter" data-toggle="modal"  className="me-4 calender-icon"><FontAwesomeIcon onClick={handleCalenderOn} icon={faCalendarAlt} /></i>
                        <p className="m-0 text-secondary pe-4">{startedDate}</p>
                    </div>
                    
                    {/* end Date change  */}

                    <div className="from-field d-flex">
                        <i className="me-4 calender-icon" data-target="#exampleModalCenter" data-toggle="modal" ><FontAwesomeIcon onClick={handleCalenderOn} icon={faCalendarAlt} /></i>
                        <p className="m-0 text-secondary pe-4">{endDate}</p>
                    </div>

                    <button className="search-button"><FontAwesomeIcon className="search-icon" icon={faSearch} /></button>

                    

                    

                </div>


            </div>

            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Launch demo modal
            </button> */}

            <div className="modal fade" id="exampleModalCenter" role="dialog">
                <div className="modal-dialog  modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle" >Select Date</h5>
                        <button type="button" className="close" data-dismiss="modal">
                        x
                        </button>
                    </div>
                    <div className="modal-body">
                            <Calendar
                            onChange={handleStartedDateChange}
                            value={new Date()}
                            />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
                    </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FlightSearch;