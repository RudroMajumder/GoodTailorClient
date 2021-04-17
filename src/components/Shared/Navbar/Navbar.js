import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [userName,setUserName] = useState();
    useEffect(()=>{
        const name = sessionStorage.getItem('name');
        if(name !=="undefined"){
            setUserName(name)
        }
    },[])

    const handleLogout = () =>{
        sessionStorage.clear();
        alert('You Have Been Logged Out');
        window.location.reload(true);
    }
   const logoutStyle={
       cursor:"pointer"
   }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">Good Tailor</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                    <li className="nav-item pe-5">
                    <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item pe-5">
                    <Link to="/services" className="nav-link" href="#">Services</Link>
                    </li>
                    <li className="nav-item pe-5">
                    <Link to="/dashboard" className="nav-link" aria-current="page" href="#">Dashboard</Link>
                    </li>
                    <li className="nav-item pe-5">
                      {
                          userName? <p className="nav-link" > {userName} </p>:
                          <Link to="/login" className="nav-link" >  Login  </Link> 
                      }
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;