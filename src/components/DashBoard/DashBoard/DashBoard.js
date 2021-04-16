import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { FcMenu} from "react-icons/fc";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Appointments from '../../Appointments/Appointments';
import { UserContext } from '../../../App';

const DashBoard = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const [loggedInUser] = useContext(UserContext);
    const [appointments,setAppointments] = useState([]);
    const [isAdmin,setIsAdmin] = useState(false);

    useEffect(()=>{

        fetch('http://localhost:5000/isAdmin',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[loggedInUser.email])

    useEffect(()=>{
        fetch('http://localhost:5000/appointments',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[loggedInUser.email])

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

    return (
        <div >
            <Navbar></Navbar>
            
            <div className="row">
                <div className="col-md-2 col-sm-2 ">
                    <FcMenu size={"50px"} onClick={handleSidebar} style={toggleStyle} className="toggle"/>
                    <Sidebar sidebarOpen={sidebarOpen} isAdmin={isAdmin}></Sidebar>
                </div>
                <div className="col-sm-10 col-md-10 mt-5 p-5">
                    <Appointments appointments={appointments} isAdmin={isAdmin}></Appointments>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;