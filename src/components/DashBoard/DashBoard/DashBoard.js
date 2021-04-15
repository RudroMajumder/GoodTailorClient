import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { FcMenu} from "react-icons/fc";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Appointments from '../Appointments/Appointments';

const DashBoard = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
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
                    <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
                </div>
                <div className="col-md-10 col-sm-10 ">
                    <Appointments></Appointments>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;