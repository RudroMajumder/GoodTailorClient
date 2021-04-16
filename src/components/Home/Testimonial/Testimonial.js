import React from 'react';

const Testimonial = ({review}) => {

    return (
        <div className="col-md-4 col-lg-4 col-sm-12 mb-5 d-flex justify-content-center">
            <div className="card rounded" style={{width: "18rem"}}>
                <div className="d-flex ">
                    <img src={review.photo} className="w-25 ps-2 mt-1 rounded" alt="..."/>
                    <h5 className="ps-2 mt-3"> {review.name} </h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{review.review}.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;