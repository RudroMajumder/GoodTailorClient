import React from 'react';


const Footer = () => {
    return (
        <footer className="mt-5 container-fluid" style={{backgroundColor:"lightskyblue"}}>
            <div className="container mt-5">
                <div className="row mt-5 " >
                <div className="col-md-3 col-lg-3 col-sm-3 mb-1 mt-5 ">
                        <h5 > Good Tailor </h5>
                        <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis ipsum a animi provident ullam? </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3 mb-1 mt-5 ">
                        <h5 > Address </h5>
                        <p > Munsef Bazar<br/>Patiya,Chattagram,<br/>Bangladesh </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3 mb-1 mt-5 ">
                        <h5 > Services </h5>
                        <ul>
                            <li style={{listStyle:"none"}}>Cutting Out</li>
                            <li style={{listStyle:"none"}}>Resize</li>
                            <li style={{listStyle:"none"}}>Body Measurements</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3 mb-1 mt-5 ">
                        <h5 > Latest News </h5>
                        <ul>
                            <li style={{listStyle:"none"}}>Set a Fashion Trend</li>
                            <li style={{listStyle:"none"}}>What's better</li>
                            <li style={{listStyle:"none"}}>False Breakage</li>
                        </ul>
                    </div>
                    <p className="text-center"> <big>All rights reserved to Good Tailor @{(new Date()).getFullYear()}</big> </p>         
                </div>
            </div>   
        </footer>
    );
};

export default Footer;