import React from 'react';
import UserAppointment from './UserAppointment';

const UserDisplay = ({appointments}) => {
    // console.log(appointments)
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    {
                        appointments.map(appointment=><UserAppointment appointment={appointment}></UserAppointment>)
                    }
                </div>
            </div>
        </section>
    );
};

export default UserDisplay;