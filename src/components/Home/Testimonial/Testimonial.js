import React from 'react';

const Testimonial = ({testimonial}) => {
    return (
        <div className="col-md-4 col-lg-4 col-sm-12 mb-5 d-flex justify-content-center">
            <div className="card rounded" style={{width: "18rem"}}>
                <div className="d-flex ">
                    <img src={testimonial.img} className="w-25 ps-2 mt-1 rounded" alt="..."/>
                    <h5 className="ps-2 mt-3"> {testimonial.name} </h5>
                </div>
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci temporibus labore sint ullam reiciendis sit.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;