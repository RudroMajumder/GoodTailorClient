import React from 'react';
import './UserAppointment.css';

const UserAppointment = ({appointment}) => {
    let statusStyle;
    if(appointment.status === "Pending"){
        statusStyle ={
            backgroundColor:"#EB9373"
        }
    }else if(appointment.status === "OnGoing"){
        statusStyle ={
            backgroundColor:"#EDED78"
        }
    }else{
        statusStyle ={
            backgroundColor:"#B4EF76"
        }
    }
    return (
        <div className="col-md-4 col-lg-4 col-sm-12 mt-5 mb-5 d-flex justify-content-center ">
            <div className="card rounded" style={{width: "20rem"}}>
                <img src={appointment.img} className="card-img-top w-100" alt="..."/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title mt-2">{appointment.name}  </h5>
                        <p style={statusStyle} className="status text-center">{appointment.status}</p>
                    </div>
                    <p className="card-text">${appointment.cost}</p>
                </div>
            </div>
        </div>
    );
};

export default UserAppointment;