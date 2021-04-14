import React from 'react';
import Service from '../Service/Service';
import measurements from '../../../images/body measurement.jpeg';
import cutting from '../../../images/cloth-cutting.jpg';
import resize from '../../../images/resizing.jpg';

const services = [
    {
        name:"Body Measurements",
        cost: 35,
        img : measurements
    },
    {
        name: "Cutting Out",
        cost: 25,
        img : cutting
    },
    {
        name: "Resize",
        cost: 40,
        img : resize
    }
]
const Services = () => {
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