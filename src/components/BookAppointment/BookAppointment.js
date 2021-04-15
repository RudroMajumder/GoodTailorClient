import React, { useContext, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { FcMenu} from "react-icons/fc";
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const BookAppointment = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } }  = useForm();

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [appointmentInfo,setAppointmentInfo] = useState({});

    const handleSidebar = () =>{
        if(!sidebarOpen){
            setSidebarOpen(true);
        }else{
            setSidebarOpen(false);
        }
    }

    const toggleStyle={
        backgroundColor:"#3A4256"
    }

    const onSubmit = data => {
        fetch('http://localhost:5000/addAppointment',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(loggedInUser)
        })
        .then(res=>res.json())
        .then(data => {
            if(data){
                alert("Appointment Booked Successfully");
            }
        })
    };
    console.log(loggedInUser)
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-100 mt-3">
                        <input type="text" name="email" defaultValue={loggedInUser.email} className="form-control"/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group w-100 mt-3">
                        <input type="text"  name="name" defaultValue={loggedInUser.name}  className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>                   
                    <div className="form-group w-100 mt-3">
                        <input type="text"  name="service"  className="form-control" defaultValue={loggedInUser.service} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group w-100 mt-3">
                        <input type="text" defaultValue={loggedInUser.cost} name="email"  className="form-control"/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <input type="submit" className="btn btn-success mt-3 text-white"/>
                </form>
                </div>
            </div>
            
        </section>
    );
};

export default BookAppointment;