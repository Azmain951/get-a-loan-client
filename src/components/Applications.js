import React, { useEffect, useState } from 'react';
import Application from './Application';

const Applications = () => {

    const [applications, setApplications] = useState([]);
    useEffect(() => {
        fetch('https://morning-dusk-41374.herokuapp.com/loan')
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [applications])

    return (
        <div className='bg-light m-5 p-5 rounded shadow-lg'>
            <h2 className='text-center mb-3'>Loan Applications</h2>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">SL No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Company</th>
                            <th scope="col">Company Address</th>
                            <th scope="col">Loan Amount</th>
                            <th scope="col">Loan Tenure</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <Application
                                index={index}
                                key={application._id}
                                application={application}
                            ></Application>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Applications;