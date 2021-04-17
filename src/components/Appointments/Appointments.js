import React from 'react';
import AdminDisplay from './AdminDisplay';
import UserDisplay from './UserDisplay';

const Appointments = ({appointments,isAdmin}) => {
    return (
        <section>
            <h2>Appointments</h2>
            <div className="row">
                <div >
                {
                isAdmin?<AdminDisplay appointments={appointments}></AdminDisplay> : 
                <UserDisplay appointments={appointments}> </UserDisplay>
                }
                </div>
            </div>
        </section>
    );
};

export default Appointments;