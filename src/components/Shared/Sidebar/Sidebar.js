import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcMenu,FcList,FcAddDatabase,FcBusinessman,FcSettings } from "react-icons/fc";
import './Sidebar.css'

const Sidebar = ({sidebarOpen}) => {
    let sidebarStyle;

    if(sidebarOpen){
        sidebarStyle = {
            left:"0" 
        }
    }else{
        sidebarStyle = {
            left:"-100%"
        }
    }
    return (
        <div className="sidebar d-flex flex-row justify-content-between col-md-2 py-5 px-4" style={sidebarStyle}>
           
            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/dashboard" className="text-white" style={{textDecoration:"none"}}>
                        <FcMenu size={"25px"}/> <span> Dashboard </span>
                    </Link>
                </li>
                <li>
                    <Link to="/appointments" className="text-white" style={{textDecoration:"none"}}>
                    <FcList size={"25px"}/> <span> Appointments </span>
                    </Link>
                </li>
                <li>
                    <Link to="/allAppointments" className="text-white" style={{textDecoration:"none"}}>
                        <FcList size={"25px"}/> <span> All Appointments </span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white" style={{textDecoration:"none"}}>
                        <FcAddDatabase size={"25px"}/> <span> Add Service </span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white" style={{textDecoration:"none"}}>
                        <FcBusinessman size={"25px"}/> <span> Add Admin </span>
                    </Link>
                </li>
                <li>
                    <Link to="/manage" className="text-white" style={{textDecoration:"none"}}>
                        <FcSettings size={"25px"}/> <span> Manage Service </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;