import React, { useEffect, useState } from 'react';
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
    const [ reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then( res => res.json())
        .then( data => setReviews(data))
    },[])
    return (
        <section>
            <div className="container mt-5">
                <h1 className="text-center">What Our Customer says About Us</h1>
                <hr style={{width:"100%",margin:"auto"}} />
                <div className="row mt-5">
                    {
                        reviews.map(review => <Testimonial review={review}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;