import React, { useEffect, useState } from 'react';

const AdminDisplay = ({appointments}) => {
    const [status,setStatus] = useState({});

    const handleOnGoingClick = (id) =>{
        setStatus({});
        const statusValue = {status:"OnGoing"};
        setStatus(statusValue);
        fetch(`http://localhost:5000/update/${id}`,{
            method:"PATCH",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(status)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    const handleDoneClick = (id) =>{
        setStatus({});
        const statusValue = {status:"Done"};
        setStatus(statusValue);
        fetch(`http://localhost:5000/update/${id}`,{
            method:"PATCH",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(status)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    console.log(status);
    return (
        <div>
            <div class="table-responsive">
                        <table class="table  table-bordered border-success">
                            <thead>
                                <tr>
                                <th scope="col" className="col-sm-1">Sr No.</th>
                                <th scope="col" className="col-sm-2">User Email</th>
                                <th scope="col" className="col-sm-2">User Service</th>
                                <th scope="col" className="col-sm-1">Cost</th>
                                <th scope="col" className="col-sm-1">Status</th>
                                <th scope="col" className="col-sm-3">Update Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((appointment,index )=>
                                        <tr>
                                        <td> {index+1} </td>
                                            <td> {appointment.email}</td>
                                            <td> {appointment.service}</td>
                                            <td> {appointment.cost}</td>
                                            <td> {appointment.status}</td>
                                            <td className="d-flex justify-content-evenly">     
                                               <button className="btn btn-outline-warning" 
                                               onClick={()=>handleOnGoingClick(appointment._id)}>
                                                   OnGoing
                                                </button>
                                               <button className="btn btn-outline-success"
                                               onClick={()=>handleDoneClick(appointment._id)}>
                                                   Done
                                                </button>
                                            </td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default AdminDisplay;
