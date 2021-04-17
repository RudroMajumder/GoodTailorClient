import React, {  useEffect, useState } from 'react';
import Services from '../Home/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';

const AllServices = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [userName,setUserName] = useState(null);
    useEffect(()=>{
        const name = sessionStorage.getItem('name');
        setUserName(name);

    },[])
    useEffect(()=>{
        if(userName !=="undefined"){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    },[userName])
    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} userName={userName}> </Navbar>
            <Header/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default AllServices;