import React, {  useEffect, useState } from 'react';
import Services from '../Home/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';

const AllServices = () => {

    return (
        <div>
            <Navbar > </Navbar>
            <Header/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default AllServices;