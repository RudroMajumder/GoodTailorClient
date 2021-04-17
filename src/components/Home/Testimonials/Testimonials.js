import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [ reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://dry-brook-25151.herokuapp.com/reviews')
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