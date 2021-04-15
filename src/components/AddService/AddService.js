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

    const handleBlur = e => {
        const newServiceInfo = { ...serviceInfo };
        newServiceInfo[e.target.name] = e.target.value;
        setServiceInfo(newServiceInfo);
    }
    const handleChange = e =>{
        const imgData = new FormData();
        imgData.set("key","ca05be820f1d08faa7e2c9cd65312245");
        imgData.append("image",e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(function (response) {
            setImgURL(response.data.data.display_url);
          })
          .catch(function (error) {
          });
          let newInfo;
    }

    const onSubmit = data => {
        let newInfo;
        if(imgURL){
            newInfo = {...serviceInfo,img:imgURL};
        }
        setServiceInfo(newInfo);
        console.log(data)
        fetch('http://localhost:5000/addService',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(serviceInfo)
        })
        .then(res=>res.json())
        .then(data => {
            if(data){
                alert("Service added successfully");
            }
        })
    };
    console.log(serviceInfo)
    return (
        <section>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2 col-sm-2">
                <FcMenu size={"50px"} onClick={handleSidebar} style={toggleStyle} className="toggle"/>
                <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
                </div>

                <div className="col-md-10 col-sm-10 mt-5 p-5">
                    <h2> Add service </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-50 mt-3">
                        <input type="text" {...register("name")} name="name" placeholder="Service Name" className="form-control" onBlur={handleBlur}/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group w-50 mt-3">
                        <input type="text" {...register("cost")} name="cost" placeholder="Service cost" className="form-control" onBlur={handleBlur}/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group w-50 mt-3">
                        <input type="file"  name="image"  className="form-control" onChange={handleChange}/>
                        {errors.image && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    {imgURL?<input type="submit" className="btn btn-success mt-3 text-white"/>:
                    <input type="submit" className="btn btn-secondary mt-3 text-white" disabled/>}
                </form>
                </div>

            </div>
        </section>
    );
};

export default AddService;