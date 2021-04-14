import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { GrDiamond } from "react-icons/gr";
import { FaGlobeAsia } from 'react-icons/fa';

const Advantages = () => {
    return (
        <section className="mt-5">
            <div className="container">
                <h1 className="text-center">Advantages of Choosing us</h1>
                <hr style={{width:"100%",margin:"auto"}} />
                <div className="row mt-5">
                    <div className="col-md-4 col-lg-4 col-sm-12 mb-5  d-flex justify-content-center">
                        <div className="card rounded ">
                            <FaWallet className="mt-5" style={{color:"red",fontSize:"30px",margin:"auto"}}/><br/>
                            <h4 className="text-center"> 100% Money Back Gurantee </h4>
                            <p className="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum accusantium, quaerat ipsa temporibus animi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 mb-5  d-flex justify-content-center">
                        <div className="card rounded">
                            <GrDiamond className="mt-5" style={{color:"red",fontSize:"30px",margin:"auto"}}/><br/>
                            <h4 className="text-center"> Express Service </h4>
                            <p className="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum accusantium, quaerat ipsa temporibus animi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 mb-5 d-flex justify-content-center">
                        <div className="card rounded ">
                            <FaGlobeAsia className="mt-5" style={{color:"red",fontSize:"30px",margin:"auto"}}/><br/>
                            <h4 className="text-center"> Worldclass Service </h4>
                            <p className="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum accusantium, quaerat ipsa temporibus animi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;