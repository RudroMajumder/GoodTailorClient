import React, { useEffect, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { FcMenu} from "react-icons/fc";
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const [adminEmail,setAdminEmail] = useState();
    const { register, handleSubmit, formState: { errors } }  = useForm();
    const [isAdmin,setIsAdmin] = useState(false);
    const email = sessionStorage.getItem("email");

    useEffect(()=>{

        fetch('https://dry-brook-25151.herokuapp.com/isAdmin',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email:email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[email])

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

    const handleBlur = e =>{
        const email = {email:e.target.value};
        setAdminEmail(email);
    }

    const onSubmit = data => {
        fetch('https://dry-brook-25151.herokuapp.com/addAdmin',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(adminEmail)
        })
        .then(res=>res.json())
        .then(data => {
            if(data){
                alert("New Admin Added Successfully");
                window.location.reload(true);
            }
        })
    };
    return (
        <section>
        <Navbar ></Navbar>
            <div className="row">
                <div className="col-md-2 col-sm-2">
                    <FcMenu size={"50px"} onClick={handleSidebar} style={toggleStyle} className="toggle"/>
                    <Sidebar sidebarOpen={sidebarOpen} isAdmin={isAdmin}></Sidebar>
                </div>
                <div className="col-md-10 col-sm-10 mt-5 p-5">
                    <h2> Add an Admin </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group  mt-3">
                        <input type="text" {...register("email")} name="email" placeholder="Admins Email" className="form-control" onBlur={handleBlur}/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>                   
                    <input type="submit" className="btn btn-success mt-3 text-white"/>
                </form>
                </div>

            </div>
        </section>
    );
};

export default AddAdmin;