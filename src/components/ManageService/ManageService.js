import React , { useEffect, useState }from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { FcMenu} from "react-icons/fc";
import Navbar from '../Shared/Navbar/Navbar';
import { FcFullTrash } from "react-icons/fc";

const ManageService = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const [services,setServices] = useState([]);
    useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then( res=> res.json())
            .then( data => setServices(data))
    },[])

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

    const handleDelete = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application.json"},
            body:JSON.stringify()
        })
        .then( res => res.json())
        .then( data => console.log(data))
        alert("Deleted Successfully")
        window.location.reload(true);
    }
    return (
        <section>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2 col-sm-2 col-lg-2">
                    <FcMenu size={"50px"} onClick={handleSidebar} style={toggleStyle} className="toggle"/>
                    <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
                </div>
                <div className="col-md-10 col-sm-10 col-lg-10 mt-5 p-5 w-75">
                    <h2> Manage Services </h2>
                    <div class="table-responsive">
                        <table class="table  table-bordered border-success">
                            <thead>
                                <tr>
                                <th scope="col" className="col-sm-2">Sr No.</th>
                                <th scope="col" className="col-sm-3">Service</th>
                                <th scope="col" className="col-sm-3">Cost</th>
                                <th scope="col" className="col-sm-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            services.map((service, index) => 
                                    
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{service.name}</td>
                                    <td>{service.cost}</td>
                                    <td> <FcFullTrash size={28} onClick={()=>handleDelete(service._id)}/> </td>
                                </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageService;