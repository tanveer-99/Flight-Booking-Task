import React from 'react';
import './TopNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from './../Login/firebaseConfig';
import { useDispatch } from 'react-redux';
import { userLogoutAction } from '../../Redux/actions/actions';


const TopNav = () => {
    const userInfo = useSelector(state=> state.userInfoReducer.userData);
    
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(userLogoutAction());
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="topNav-section">
            <div className="d-flex justify-content-between">
                <div>
                    <h1 className="logo">Tanvir</h1>
                </div>
                <div className="d-flex">
                    <p className="business">Business</p>
                    <p className="trip">Trips</p>
                    <i style={{cursor: 'pointer'}} className="sidebar-icon text-secondary me-4"><FontAwesomeIcon icon={faHeart} /></i>
                    <div style={{cursor: 'pointer'}} className="d-flex">
                        <FontAwesomeIcon style={{color: '#E7556A'}} className="me-2 sidebar-icon" icon={faSignInAlt} />

                        { userInfo?.email ? <h6 onClick={handleSignOut} style={{color: '#E7556A'}}>Log Out</h6>
                        : <Link style={{textDecoration: 'none'}} to="/login"><h6 style={{color: '#E7556A'}}>Log In</h6></Link>}

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TopNav;
