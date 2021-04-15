import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { FcGoogle } from "react-icons/fc";
import './login.css';
import Navbar from '../Shared/Navbar/Navbar';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const signedInUser = {name:user.displayName, email:user.email};
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage,errorCode);
        });
    }

    console.log(loggedInUser);
    return (
        <div >
            <Navbar/>
            <div className="container-fluid login d-flex justify-content-center align-items-center">
                <div className="row"> 
                    <div className="col-12 ">
                        <button className="signin-btn" onClick={handleGoogleSignIn}> <FcGoogle/> Sign in With Google  </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;