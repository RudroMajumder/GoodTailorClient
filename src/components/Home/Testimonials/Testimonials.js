import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
const testimonials = [
    {
        name: "Messi",
        review: "Great Service",
        img: "https://i.ibb.co/SxDVHnK/messi.jpg"
    },
    {
        name: "Ronaldo",
        review: "Great Service",
        img: "https://i.ibb.co/dbBNdrT/cr7.jpg"
    },
    {
        name: "Neymar",
        review: "Great Service",
        img: "https://i.ibb.co/wRJDKgq/neymar.jpg"
    }
]

const Testimonials = () => {
    return (
        <section>
            <div className="container mt-5">
                <h1 className="text-center">What Our Customer says About Us</h1>
                <hr style={{width:"100%",margin:"auto"}} />
                <div className="row mt-5">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;