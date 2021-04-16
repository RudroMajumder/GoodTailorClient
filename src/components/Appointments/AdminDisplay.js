import React from 'react';

const AdminDisplay = ({appointments}) => {
    return (
        <div>
            <div class="table-responsive">
                        <table class="table  table-bordered border-success">
                            <thead>
                                <tr>
                                <th scope="col" className="col-sm-1">Sr No.</th>
                                <th scope="col" className="col-sm-3">User Email</th>
                                <th scope="col" className="col-sm-2">User Service</th>
                                <th scope="col" className="col-sm-1">Cost</th>
                                <th scope="col" className="col-sm-2">Status</th>
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
                                            <td> {appointment.name}</td>
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
