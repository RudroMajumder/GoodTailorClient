import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { motion } from "framer-motion"

const Service = ({service}) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const name = service.name;
    const cost = service.cost;
    const img = service.img;

    const setAppointment = () =>{
        const appointmentInfo = {...loggedInUser};
        setLoggedInUser(appointmentInfo);
        sessionStorage.setItem('serviceName',name);
        sessionStorage.setItem('serviceCost',cost);
        sessionStorage.setItem('img',img);
    }
    return (

        <motion.div
        className="col-md-4 col-lg-4 col-sm-12 mb-5 justify-content-center"
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}  >
            
            <div className="card rounded" style={{width: "18rem"}}>
                <img src={service.img} className="card-img-top w-100" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{service.name}  </h5>
                    <p className="card-text">${service.cost}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <Link to='/book'>
                        <button className="btn btn-primary" onClick={setAppointment}> Set An Appointment </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
export default Service;