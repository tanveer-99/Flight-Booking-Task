import React from 'react';
import './Login.css'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './firebaseConfig';
import { useDispatch } from 'react-redux';
import { userLoginAction } from './../../Redux/actions/actions';
import { useNavigate } from 'react-router';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = {
        name: '',
        email: '',
        isSignedIn: false
    }

    const provider = new GoogleAuthProvider();

    const handleSignIn = ()=> {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            const newUserInfo = {...userInfo};
            newUserInfo.name = user.displayName;
            newUserInfo.email = user.email;
            newUserInfo.isSignedIn = true;

            dispatch(userLoginAction(newUserInfo));
            
            navigate("/");
            console.log(newUserInfo);
          }).catch((error) => {
            
          });
    
    }

    
   
    return (
        <div className="login-section d-flex justify-content-center align-items-center">
            <div className="login-container shadow">
                <h3>Sign in with google</h3>
                <button onClick={handleSignIn} className="btn btn-primary">Sign In</button>
            </div>
        </div>
    );
};

export default Login;