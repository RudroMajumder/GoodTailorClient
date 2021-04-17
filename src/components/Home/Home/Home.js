import React, {  useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Advantages from '../Advantages/Advantages';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';
import About from '../About';

const Home = () => {

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
            <Navbar isLoggedIn={isLoggedIn} userName={userName}></Navbar>
            <Header></Header>
            <Services ></Services>
            <Works></Works>
            <Advantages ></Advantages>
            <Testimonials></Testimonials>
            <About/>
            <Footer></Footer>
        </div>
    );
};

export default Home;