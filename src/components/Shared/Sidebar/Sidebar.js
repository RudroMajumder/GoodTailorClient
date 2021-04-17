import React from 'react';
import { Link } from 'react-router-dom';
import { FcMenu,FcList,FcAddDatabase,FcBusinessman,FcSettings } from "react-icons/fc";
import { BiExit } from "react-icons/bi";
import './Sidebar.css'

const Sidebar = ({sidebarOpen,isAdmin}) => {

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
    const handleLogout = () =>{
        sessionStorage.clear();
        alert('You Have Been Logged Out');
        window.location.reload(true);
    }

    return (
        <div className="sidebar d-flex flex-row justify-content-between col-md-2 py-5 px-4" style={sidebarStyle}>
           
            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/dashboard" className="text-white" style={{textDecoration:"none"}}>
                        <FcList size={"25px"}/> <span>Appointments </span>
                    </Link>
                </li>
                <li>
                    <Link to="/book" className="text-white" style={{textDecoration:"none"}}>
                        <FcMenu size={"25px"}/> <span> Book Appointment </span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white" style={{textDecoration:"none"}}>
                    <FcList size={"25px"}/> <span> Review </span>
                    </Link>
                </li>
                {isAdmin && <div>
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
                    </div>}
                        <li onClick={handleLogout}>
                            <Link  className="text-white" style={{textDecoration:"none"}}>
                                <BiExit size={"25px"}/> <span>Logout </span>
                            </Link>
                        </li>
            </ul>
        </div>
    );
};

export default Sidebar;