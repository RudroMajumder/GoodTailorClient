import React,{useEffect} from 'react';
import works1 from '../../../images/works1.jpg';
import works2 from '../../../images/works2.jpg';
import works3 from '../../../images/works3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Works = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <section className="mt-5">
            <div className="container">
                <h1 className="text-center">Our Works</h1>
                <hr style={{width:"100%",margin:"auto"}} />
                <div className="row mt-5">
                    <div className="col-md-4 col-lg-4 col-sm-12 mb-5 card rounded d-flex justify-content-center">
                        <div className="card rounded" data-aos="flip-right">
                            <img src={works1} className="img-fluid" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 mb-5 card rounded d-flex justify-content-center">
                        <div className="card rounded" data-aos="flip-right">
                            <img src={works2} className="img-fluid" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 mb-5 card rounded d-flex justify-content-center">
                        <div className="card rounded" data-aos="flip-right">
                            <img src={works3} className="img-fluid" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;