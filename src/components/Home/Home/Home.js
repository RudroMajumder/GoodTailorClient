import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
        </div>
    );
};

export default Home;