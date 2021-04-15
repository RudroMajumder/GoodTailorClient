import React, { useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { FcMenu} from "react-icons/fc";
import Navbar from '../Shared/Navbar/Navbar';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddService = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const [serviceInfo,setServiceInfo ] = useState({});
    const [imgURL,setImgURL] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } }  = useForm();

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

    
    console.log(imgURL)
    return (
        <section>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2 col-sm-2">
                <FcMenu size={"50px"} onClick={handleSidebar} style={toggleStyle} className="toggle"/>
                <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
                </div>

                <div className="col-md-10 col-sm-10">
                    
                </div>

            </div>
        </section>
    );
};

export default AddService;