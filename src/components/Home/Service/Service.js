import React from 'react';

const Service = ({service}) => {
    return (
        <div className="col-md-4 col-sm-12 mb-5 ">
            <div className="card rounded" style={{width: "18rem"}}>
                <img src={service.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{service.name}  </h5>
                    <p className="card-text">${service.cost}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default Service;