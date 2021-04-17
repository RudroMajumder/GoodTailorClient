import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    useEffect(()=>{
        fetch('https://dry-brook-25151.herokuapp.com/services')
        .then( res=> res.json())
        .then( data => setServices(data))
    },[])
    return (
        <section className=" mt-5" data-aos="fade-up">
            <div className="container mt-5">
                <h1 className="text-center"> Services We Provide</h1>
                <hr style={{width:"100%",margin:"auto"}} />
                <div className="row mt-5">
                    {
                        services.map(service => <Service service={service}> </Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;