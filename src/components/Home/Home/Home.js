import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Advantages from '../Advantages/Advantages';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            <Works></Works>
            <Advantages></Advantages>
        </div>
    );
};

export default Home;