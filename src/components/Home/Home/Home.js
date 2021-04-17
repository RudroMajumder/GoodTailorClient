import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Advantages from '../Advantages/Advantages';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';

const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services ></Services>
            <Works></Works>
            <Advantages ></Advantages>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;