import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import measurements from '../../../images/body measurement.jpeg';
import cutting from '../../../images/cloth-cutting.jpg';
import resize from '../../../images/resizing.jpg';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then( res=> res.json())
        .then( data => setServices(data))
    },[])
    return (
        <section className=" mt-5">
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