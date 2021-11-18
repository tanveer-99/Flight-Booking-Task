import React from 'react';
import './Sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faPlane, faHome, faHotel, faClipboardList, faTaxi, faGlobe, faTag, faRoute, faDirections, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = ({menuText}) => {

        const userInfo = useSelector(state => state.userInfoReducer.userData);

    return (
        <div className="sidebar-section">

            

            <div  style={{paddingBottom: '0'}} className="sidebar-part">

                <div className="d-flex sidebar-elements">
                    <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faUserCircle} /></i>
                    {
                        userInfo?.email ? <p className={menuText} style={{textDecoration: 'none', color: 'black'}}>{userInfo.name}</p> : <Link style={{textDecoration: 'none', color: 'black'}} to="/login"><p className={menuText}>Sign in</p></Link>
                    }
                </div>
            </div>

           <div className="sidebar-part">
                <div style={{backgroundColor: '#d7e0eb'}} className="d-flex sidebar-elements">
                        <i  className="sidebar-icon"><FontAwesomeIcon icon={faPlane} /></i>
                        <p style={{fontWeight: 'bold'}} className={menuText}>Flight</p>
                </div>
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faHome} /></i>
                        <p className={menuText}>Stays</p>
                </div>
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faTaxi} /></i>
                        <p className={menuText}> Car Rental</p>
                </div>
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faClipboardList} /></i>
                        <p className={menuText}>Things to do</p>
                </div>
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faHotel} /></i>
                        <p className={menuText}>Flight+Hotel</p>
                </div>
           </div>

           <div className="sidebar-part">
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faGlobe} /></i>
                        <p className={menuText}>Explore</p>
                </div>
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faTag} /></i>
                        <p className={menuText}>Deals</p>
                </div>
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faRoute} /></i>
                        <p className={menuText}>Routes</p>
                </div>
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon text-secondary"><FontAwesomeIcon icon={faDirections} /></i>
                        <p className={menuText}>Direct</p>
                </div>
           </div>

           <div style={{borderBottom: 'none'}} className="sidebar-part">
                <div className="d-flex sidebar-elements">
                        <i className="sidebar-icon"><FontAwesomeIcon icon={faSuitcaseRolling} /></i>
                        <p className={menuText}>Trips</p>
                </div>
           </div>

        </div>
    );
};

export default Sidebar;