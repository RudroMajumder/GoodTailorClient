import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { FcMenu} from "react-icons/fc";
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';

const BookAppointment = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const { register, handleSubmit,formState: { errors } }  = useForm();
    const [shippingData, setShippingData] = useState(null);
    const [loggedInUser] = useContext(UserContext);
    const [appointmentInfo,setAppointmentInfo] = useState(null);

    const handleSidebar = () =>{
        if(!sidebarOpen){
            setSidebarOpen(true);
        }else{
            setSidebarOpen(false);
        }
    }
    const serviceName= sessionStorage.getItem('serviceName');
    const serviceCost= sessionStorage.getItem('serviceCost');
    const img= sessionStorage.getItem('img');
    const toggleStyle={
        backgroundColor:"#3A4256"
    }
    const handleBlur = e =>{
        const appointmentDetails = {...appointmentInfo};
        appointmentDetails[e.target.name] = e.target.value;
        setAppointmentInfo(appointmentDetails);
    }
    const onSubmit = data => {
        const appointmentDetails = {...appointmentInfo,service:serviceName,cost:serviceCost,img:img,status:"Pending"}
        setShippingData(appointmentDetails);

    };
    const handlePayment = (paymentId)=>{
        const appointmentDetails = {...shippingData,paymentId:paymentId};
        setShippingData(appointmentDetails);
        fetch('http://localhost:5000/addAppointment',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(appointmentDetails)
        })
        .then(res=>res.json())
        .then(data => {
            if(data){
                alert("Appointment Booked Successfully");
                sessionStorage.clear()
            }
        })
 
    }

    console.log(shippingData)
    return (
        <section>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2 col-sm-2">
                    <FcMenu size={"50px"} onClick={handleSidebar} style={toggleStyle} className="toggle"/>
                    <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
                </div>
                <div className="col-md-10 col-sm-10 mt-5 p-5">
                    <h2> Book Appointment </h2>
                    <div style={{display: shippingData ? 'none': 'block'}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group w-100 mt-3">
                            <input type="text" name="email" placeholder="Your Email" onBlur={handleBlur} className="form-control"/>
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group w-100 mt-3">
                            <input type="text"  name="name" placeholder="Your Name" onBlur={handleBlur} className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>                   
                        <div className="form-group w-100 mt-3">
                            <input type="text"  name="service"  className="form-control" defaultValue={serviceName} />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group w-100 mt-3">
                            <input type="text" defaultValue={serviceCost} name="email"  className="form-control"/>
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <input type="submit" className="btn btn-success mt-3 text-white"/>
                    </form>
                    </div>
                    <div style={{display: shippingData ? 'block': 'none'}}>
                        <Payment handlePayment={handlePayment}></Payment>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default BookAppointment;